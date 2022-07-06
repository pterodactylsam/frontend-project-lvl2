import fs from 'fs';
import path from 'path';
import buildTree from './buildTree.js';
import parse from './parsers.js';
import formatOutput from './formatters/index.js';

// eslint-disable-next-line no-undef
const getAbsolutePath = (file) => path.resolve(process.cwd(), file)
const getExtensions = (file) => path.extname(file).slice(1)

const getContentFromFile = (file) => {
    const absolutePath = getAbsolutePath(file);
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    const extension = getExtensions(file)
    return parse(fileContent, extension)
}

const gendiff = (filePath1, filePath2, format = 'stylish') => {
    const file1 = getContentFromFile(filePath1)
    const file2 = getContentFromFile(filePath2)
    const diffInfo = buildTree(file1, file2)
    const formattedTree = formatOutput(diffInfo, format)

    return formattedTree
}

export default gendiff;