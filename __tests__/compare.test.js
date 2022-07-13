/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import gendiff from '../src/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

const expectedStylish = readFile('correct-stylish.txt');
const expectedPlain = readFile('correct-plain.txt');
const expectedJson = readFile('correct-json.txt');

const extensions = ['json', 'yaml', 'yml'];

describe('Positives cases', () => {
  test.each(extensions)('Format %s', (extension) => {
    const file1 = `${process.cwd()}/__fixtures__/file1.${extension}`;
    const file2 = `${process.cwd()}/__fixtures__/file2.${extension}`;

    expect(gendiff(file1, file2, 'stylish')).toEqual(expectedStylish);
    expect(gendiff(file1, file2, 'plain')).toEqual(expectedPlain);
    expect(gendiff(file1, file2, 'json')).toEqual(expectedJson);
  });
});

describe('Negative cases', () => {
  test('Check wrong file extension', () => {
    const error = new Error("Invalid file extension: 'txt'! Try supported formats.");

    expect(() => {
      gendiff(getFixturePath('file1-wrong.txt'), getFixturePath('file2-wrong.txt'));
    }).toThrow(error);
  });
});
