### Hexlet tests and linter status:
[![Actions Status](https://github.com/pterodactylsam/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/pterodactylsam/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/579149df8f041e461ef4/maintainability)](https://codeclimate.com/github/pterodactylsam/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/579149df8f041e461ef4/test_coverage)](https://codeclimate.com/github/pterodactylsam/frontend-project-lvl2/test_coverage)
![Node CI](https://github.com//pterodactylsam/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)

# Description: 
**Generator of difference** is the CLI programm that generate difference between two files. Supporting formats: JSON, YML, YAML.

## How to install:
1. Make sure you have installed [Node.js](https://nodejs.org/en/) no lower version 12: ```node -v```.
2. Clone repository: ```git@github.com:pterodactylsam/frontend-project-lvl2.git```.
3. Change directory to frontend-project-lvl2
4. Run the command: ```make install```.

```shell
$ git clone git@github.com:pterodactylsam/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
```

## Run tests:
```shell
$ make test
```

## How to use:
You can use the project as a script in the terminal or as a library in your JavaScript project. You can format the difference in three styles: stylish (default), plain and json.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```

## Project asciinemas:
### Checking json files: 
https://asciinema.org/a/QZmIysJu269aJJDdMHnN5LWjU
### Checking attached json files:
https://asciinema.org/a/t0gcYX5sk19KW2Xytw1luKqnQ
### Checking yml and yaml files: 
https://asciinema.org/a/M6Rx5Efu21LHf9FhIBsjR22qE
### Checking the plain format: 
https://asciinema.org/a/XTgDDXlxHQzTkWLpczizbvwuE
### Checking output in json format: 
https://asciinema.org/a/bIBvEKS3T7TubUuYJK4mczjAm