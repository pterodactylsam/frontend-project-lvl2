import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJson from './json.js'

export default (data, format, replacer) => {
    switch (format) {
        case 'stylish':
          return makeStylish(data, replacer);
        case 'plain':
          return makePlain(data);
        case 'json':
          return makeJson(data, null, replacer);
        default:
          throw new Error(`Invalid file format type: '.${format}'! Try supported file formats.`);
      }
};