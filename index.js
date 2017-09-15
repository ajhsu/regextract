'use strict';

function extract(text, regex) {
  var appName = 'Regextract: ';

  /* Do error-handling at first */
  if (typeof text === 'undefined') {
    throw new Error(appName, 'text must be string');
  }
  if (typeof regex === 'undefined') {
    throw new Error(appName, 'regex must be Regular Expression');
  }

  /* Storage for matches and extracts */
  var matches = [];
  var extracts = [];

  /*
    It will runs multiple times
    only when Regular Expression has global flag.
    (cause it's a stateful regexp)
    Otherwise, it only run once.
  */
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
    extracts: extracts,
    captured: extracts
  };
}

module.exports = extract;
