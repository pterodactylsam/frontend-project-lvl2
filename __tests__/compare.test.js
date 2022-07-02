/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

test('gendiff correct-stylish, ext-js', () => {
    const path1 = getFixturePath('file1.json')
    const path2 = getFixturePath('file2.json')
    const correctJs = readFile('correct-stylish.txt');
    expect(gendiff(path1, path2)).toEqual(correctJs);
});

test('gendiff correct-plain, ext-json', () => {
    const path1 = getFixturePath('file1.json')
    const path2 = getFixturePath('file2.json')
    const correctPlain = readFile('correct-plain.txt');
    expect(gendiff(path1, path2,'plain')).toEqual(correctPlain);
});

test('gendiff correct-json, ext-json', () => {
    const path1 = getFixturePath('file1.json')
    const path2 = getFixturePath('file2.json')
    const correctPlain = readFile('correct-json.txt');
    expect(gendiff(path1, path2,'json')).toEqual(correctPlain);
});

test('gendiff correct-stylish, ext-yml, ext-yaml', () => {
    const path1 = getFixturePath('file1.yml')
    const path2 = getFixturePath('file2.yml')
    const correctYml = readFile('correct-stylish.txt');
    expect(gendiff(path1, path2)).toEqual(correctYml);
});

test('gendiff correct-plain, ext-yml, ext-yaml', () => {
    const path1 = getFixturePath('file1.yml')
    const path2 = getFixturePath('file2.yml')
    const correctPlain = readFile('correct-plain.txt');
    expect(gendiff(path1, path2, 'plain')).toEqual(correctPlain);
});

test('gendiff correct-json, ext-yml, ext-yaml', () => {
    const path1 = getFixturePath('file1.yml')
    const path2 = getFixturePath('file2.yml')
    const correctPlain = readFile('correct-json.txt');
    expect(gendiff(path1, path2, 'json')).toEqual(correctPlain);
});

test('gendiff wrong extension', () => {
    const path1 = getFixturePath('file1-wrong.txt')
    const path2 = getFixturePath('file2-wrong.txt')
    const error = new Error("Invalid file extension: 'txt'! Try supported formats.")
    expect(() => {
        gendiff(path1, path2);
      }).toThrow(error);
})
