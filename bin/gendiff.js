#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

program
  .name("gendiff")
  .usage("[options] <filepath1> <filepath2>")
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .version('0.1.0')
  .arguments('<filepath1> <filepath2>');
  

program.parse(process.argv);
