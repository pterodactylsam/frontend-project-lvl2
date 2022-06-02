import _ from 'lodash';

const getIndent = (depth, space = ' ', firstIndent = 2, spaceCount = 4) =>
  space.repeat(spaceCount * depth).slice(firstIndent);

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }

  const lineInfo = Object.entries(data).map(
    ([key, value]) => `${getIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`
  );

  return ['{', ...lineInfo, `${getIndent(depth)}  }`].join('\n');
};

const makeFormat = (diff) => {
  const iter = (tree, depth) =>
    tree.map((node) => {
      const makeLine = (value, sign) => `${getIndent(depth)}${sign} ${node.key}: ${stringify(value, depth)}`;

      switch (node.state) {
        case 'added':
          return makeLine(node.value, '+');
        case 'deleted':
          return makeLine(node.value, '-');
        case 'notChanged':
          return makeLine(node.value, ' ');
        case 'changed':
          return [`${makeLine(node.value1, '-')}`, `${makeLine(node.value2, '+')}`].join('\n');
        case 'nested':
          return `${getIndent(depth)}  ${node.key}: ${['{', iter(node.value, depth + 1), `${getIndent(depth)}  }`, ].join('\n')}`;
        default:
          throw new Error(`Type: ${node.state} is undefined`);
      }
    });

  const stylishDiff = iter(diff, 1);
  return ['{', ...stylishDiff, '}'].join('\n');
};

export default makeFormat;