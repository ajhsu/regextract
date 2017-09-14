'use strict';

function extract(text, regex) {
  var matches = [];
  var extracts = [];
  var execResult = null;
  while ((execResult = regex.exec(text))) {
    var extractCount = execResult.length - 1;
    if (extractCount > 0) {
      for (var extIter = 0; extIter < extractCount; extIter++) {
        extracts.push(execResult[extIter + 1]);
      }
    }
    matches.push(execResult[0]);
  }
  return {
    matches: matches,
    extracts: extracts
  };
}

module.exports = extract;
