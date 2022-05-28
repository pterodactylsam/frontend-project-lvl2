#!/usr/bin/env node

import { Command } from 'commander';
import calculateTheDifferences from '../src/compare.js';

const program = new Command();

program
  .name("gendiff")
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0',  '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    calculateTheDifferences(filepath1, filepath2)
  })

program.parse();
