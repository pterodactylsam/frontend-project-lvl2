import fs from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import editTree from './editTree.js';

const getContentFromFile = (file) => {
    // eslint disable process
    // eslint-disable-next-line no-undef
    const filePath = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file)
    const fileContent = (fs.readFileSync(filePath, 'utf8'));
    const readJson = JSON.parse(fileContent)
    return readJson
}

const gendiff = (filePath1, filePath2) => {
    const file1 = getContentFromFile(filePath1)
    const file2 = getContentFromFile(filePath2)
    const diffInfo = buildTree(file1, file2)
    const outputDiffInfo = editTree(diffInfo)

    return outputDiffInfo
}

console.log(gendiff('../__fixtures__/file1.json','../__fixtures__/file2.json'))

export default gendiff;