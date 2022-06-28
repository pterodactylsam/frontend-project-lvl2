### Hexlet tests and linter status:
[![Actions Status](https://github.com/pterodactylsam/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/pterodactylsam/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/579149df8f041e461ef4/maintainability)](https://codeclimate.com/github/pterodactylsam/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/579149df8f041e461ef4/test_coverage)](https://codeclimate.com/github/pterodactylsam/frontend-project-lvl2/test_coverage)
![Node CI](https://github.com//pterodactylsam/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)

# Описание проекта: 
**Вычислитель отличий** - это CLI-программа, которая генерирует разницу между двумя файлами.
Поддерживаемые форматы: JSON, YML, YAML.

## Как установить:
1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/en/) не ниже версии 12: ```node -v```.
2. Клонируйте репозиторий: ```git@github.com:pterodactylsam/frontend-project-lvl2.git```.
3. Измените директорию на frontend-project-lvl2
4. Выполните команду: ```make install```.

```shell
$ git clone git@github.com:pterodactylsam/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ make install
```

## Запустить тесты:
```shell
$ make test
```

## Как использовать:
Вы можете использовать проект как скрипт в терминале или как библиотеку в вашем проекте JavaScript. Вы можете форматировать разницу в трех стилях: stylish (по умолчанию), plain и json.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```

## Аскинемы проекта:
### Проверка json файлов: 
https://asciinema.org/a/QZmIysJu269aJJDdMHnN5LWjU
### Проверка вложенных json файлов
https://asciinema.org/a/t0gcYX5sk19KW2Xytw1luKqnQ
### Проверка yml и yaml файлов: 
https://asciinema.org/a/M6Rx5Efu21LHf9FhIBsjR22qE
### Проверка плоского (plain) формата: 
https://asciinema.org/a/XTgDDXlxHQzTkWLpczizbvwuE
### Проверка вывода в json формате: 
https://asciinema.org/a/bIBvEKS3T7TubUuYJK4mczjAm