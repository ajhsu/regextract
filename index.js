'use strict';

function extract(text, regex) {
  if (typeof text === 'undefined') {
    throw new Error('The first parameter (text) is not assigned.');
  }
  if (typeof regex === 'undefined') {
    throw new Error('The second parameter (regexp) is not assigned.');
  }

  // Storage for matches and extracts
  var matches = [];
  var extracts = [];

  /**
   * It will runs multiple times only when Regular Expression has global flag.
   * Otherwise, it only run once.
   */
  var execResult = null;
  do {
    if ((execResult = regex.exec(text))) {
      var extractCount = execResult.length - 1;
      var nestedExtracts = [];
      if (extractCount > 0) {
        for (var extIter = 0; extIter < extractCount; extIter++) {
          nestedExtracts.push(execResult[extIter + 1]);
        }
      }
      extracts.push(nestedExtracts);
      matches.push(execResult[0]);
    }
  } while (regex.global && execResult);

  return {
    matches: matches,
    extracts: extracts,
    captured: extracts
  };
}

module.exports = extract;
