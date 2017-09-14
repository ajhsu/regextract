# regextract

Extracting text with Regular Express

[![npm](https://img.shields.io/npm/v/regextract.svg)](https://www.npmjs.com/package/regextract)
[![Build Status](https://travis-ci.org/ajhsu/regextract.svg?branch=master)](https://travis-ci.org/ajhsu/regextract)

## Install

```
npm install regextract --save
```

## Usage

Require package

```js
var extract = require('regextract');
```


Find multiple matches

```js
extract('iPhone6, iPhone7, iPhone8, iPhoneX', /iPhone\d/g);

// Outputs
{
  matches: ['iPhone6', 'iPhone7', 'iPhone8'],
  extracts: []
}
```

Get extracted texts

```js
extract('Price: NTD$299', /NTD\$(\d+)/g)

// Outputs
{
  matches: ['NTD$299'],
  extracts: ['299']
}
```

## License

MIT