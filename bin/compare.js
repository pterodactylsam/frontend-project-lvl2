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
    const file1 = getObjectFromJson(jsonFile1)
    const file2 = getObjectFromJson(jsonFile2)

    const keysFile1 = Object.keys(file1);
    const keysFile2 = Object.keys(file2);

    const sortedKeys = _.sortBy(_.uniq(keysFile1.concat(keysFile2)))
    const result = sortedKeys.map((item) => {
        if (keysFile1.includes(item) && !keysFile2.includes(item)) {
            const prefix = '- '
            const value = file1[item]
            return [prefix + item + ": " + value]
        } else if (keysFile1.includes(item) && keysFile2.includes(item) && file1[item] == file2[item]) {
            const prefix = '  '
            const value = file1[item]
            return [prefix + item + ": " + value]
        } else if (keysFile1.includes(item) && keysFile2.includes(item) && file1[item] != file2[item]) {
            const prefixFile1 = '- '
            const prefixFile2 = '+ '
            const valueFile1 = file1[item]
            const valueFile2 = file2[item]
            return [prefixFile1 + item + ': ' + valueFile1, prefixFile2 + item + ': ' + valueFile2]
        } else if (!keysFile1.includes(item) && keysFile2.includes(item)) {
            const prefix = '+ '
            const value = file2[item]
            return [prefix + item + ': ' + value]
        }
    })
    console.log(result)
    return result
}

calculateTheDifferences('../file1.json', '../file2.json')