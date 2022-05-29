import fs from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import editTree from './editTree.js';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const getContentFromFile = (file) => {
    const filePath = path.isAbsolute(file) ? file : getPath(file)
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

export default gendiff;