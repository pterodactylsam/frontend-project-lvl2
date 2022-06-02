import fs from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
// import editTree from './editTree.js';
import { fileURLToPath } from 'url';
import parse from './parsers.js';
import makeFormat from './formatters/stylish.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const getContentFromFile = (file) => {
    const filePath = path.isAbsolute(file) ? file : getPath(file)
    const fileContent = (fs.readFileSync(filePath, 'utf8'));
    const extension = path.extname(filePath)
    return parse(fileContent, extension)
}

const gendiff = (filePath1, filePath2, format = 'stylish') => {
    const file1 = getContentFromFile(filePath1)
    const file2 = getContentFromFile(filePath2)
    const diffInfo = buildTree(file1, file2)
    // const outputDiffInfo = editTree(diffInfo)
    const formattedTree = makeFormat(diffInfo, format)

    return formattedTree
}

export default gendiff;