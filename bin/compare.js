#!/usr/bin/env node

import * as path from 'path';
import * as fs from 'fs';
import _ from 'lodash';

export const getObjectFromJson = (file) => {
    const filePath = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file)
    const read = (fs.readFileSync(`${filePath}`, 'utf8'));
    const readJson = JSON.parse(read)
    return readJson
}

export const calculateTheDifferences = (jsonFile1, jsonFile2) => {
    const obj1 = getObjectFromJson(jsonFile1)
    const obj2 = getObjectFromJson(jsonFile2)

    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);

    const sortedKeys = _.sortBy(_.uniq(_.union(keysObj1, keysObj2)))
    const result = sortedKeys.map((key) => {
        if (!_.has(obj1, key)) {
            return { key, state: 'added', value: obj2[key] }
        }
        if (!_.has(obj2, key)) {
            return { key, state: 'deleted', value: obj1[key] }
        }
        if (_.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key]) {
            return { key, state: 'changed', value1: obj1[key], value2: obj2[key] }
        }
        if (typeof obj1[key] === 'object' && obj1[key] !== null && typeof obj2[key] === 'object' && obj2[key] !== null) {
            return { key, state: 'nested', value: calculateTheDifferences(obj1[item], obj2[item])}
        } 
        if (_.has(obj1, key) && _.has(obj2, key)) {
            return { key, state: 'notChanged', value: obj1[key] }
        } 
    })
    
    console.log(result)
    return result
}

calculateTheDifferences('../file1.json', '../file2.json')