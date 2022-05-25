/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import calculateTheDifferences from '../src/compare.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const path1 = getFixturePath('file1.json')
const path2 = getFixturePath('file2.json')
const correct = readFile('correct.txt');

test('gendiff', () => {
    expect(calculateTheDifferences(path1, path2)).toEqual(correct);
});