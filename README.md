# regextract

Extracting text with Regular Expression

[![npm](https://img.shields.io/npm/v/regextract.svg)](https://www.npmjs.com/package/regextract)
[![Build Status](https://travis-ci.org/ajhsu/regextract.svg?branch=master)](https://travis-ci.org/ajhsu/regextract)

## Install

```
npm install regextract --save
```

## API

```js
var result = extract(text, RegExp);
```

#### `result.matches`

Type: Array

Matches of RegExp patterns to the source text.

#### `result.extracts`

Type: Array

Captured groups of capturing parentheses within RegExp patterns to the source text.

#### `result.captured`

Type: Array

Alias to `result.extracts`.

## Usage

Require package

```js
var extract = require('regextract');
```


Find matches

```js
extract('iPhone6, iPhone7, iPhone8, iPhoneX', /iPhone\d/g);

// You'll get:
{
  matches: ['iPhone6', 'iPhone7', 'iPhone8'],
  extracts: []
}
```

Get extracted texts

```js
extract('Price: NTD$299', /NTD\$(\d+)/g)

// You'll get:
{
  matches: ['NTD$299'],
  extracts: ['299']
}
```

## License

MIT