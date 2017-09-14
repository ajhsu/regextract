'use strict';

function extract(text, regex) {
  var appName = 'Regextract: ';

  if (typeof text === 'undefined') {
    throw new Error(appName, 'text must be string');
  }
  if (typeof regex === 'undefined') {
    throw new Error(appName, 'regex must be Regular Expression');
  }

  var matches = [];
  var extracts = [];
  var execResult = null;

  do {
    if ((execResult = regex.exec(text))) {
      var extractCount = execResult.length - 1;
      if (extractCount > 0) {
        for (var extIter = 0; extIter < extractCount; extIter++) {
          extracts.push(execResult[extIter + 1]);
        }
      }
      matches.push(execResult[0]);
    }
  } while (regex.global && execResult);

  return {
    matches: matches,
    extracts: extracts
  };
}

module.exports = extract;
