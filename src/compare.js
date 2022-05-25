#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export const getObjectFromJson = (file) => {
    // eslint disable process
    // eslint-disable-next-line no-undef
    const filePath = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file)
    const read = (fs.readFileSync(`${filePath}`, 'utf8'));
    const readJson = JSON.parse(read)
    return readJson
}

const calculateTheDifferences = (jsonFile1, jsonFile2) => {
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
            return { key, state: 'nested', value: calculateTheDifferences(obj1[key], obj2[key])}
        } 
        if (_.has(obj1, key) && _.has(obj2, key)) {
            return { key, state: 'notChanged', value: obj1[key] }
        } 
    })
    
    const tab = '   '
    const treeObj = result.map(({ key, state, value, value1, value2 }) => {
        if (state === 'added') {
            state = '+'
            return `${state} ${key}: ${value}`
        }
        if (state === 'deleted') {
            state = '-'
            return `${state} ${key}: ${value}`
        }
        if (state === 'notChanged') {
            state = ' '
            return `${state} ${key}: ${value}`
        }
        if (state === 'changed') {
            state = ['-', '+']
            return `${state[0]} ${key}: ${value1} \n${tab}${state[1]} ${key}: ${value2}`
        }
    })
    
    console.log('{')
    treeObj.map((value) => {
        console.log(`${tab}${value}`)
    }) 
    console.log('}')
}

export default calculateTheDifferences