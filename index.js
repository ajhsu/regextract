'use strict';

function extract(text, regex) {
  var result = regex.exec(text);
  return {
    matches: result ? result[0] : null,
    firstGroup: result.length >= 2 ? result[1] : null,
    secondGroup: result.length >= 3 ? result[2] : null,
    thirdGroup: result.length >= 4 ? result[3] : null
  };
}

module.exports = extract;
