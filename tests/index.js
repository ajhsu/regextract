var test = require('tape');
var extract = require('../index.js');

test('Extract text as expected', t => {
  var result1 = extract('transform: scale3d(0.5, 1, 1);', /scale3d\((.*?)\)/g);
  t.equal(result1.matches, 'scale3d(0.5, 1, 1)', '\'matches\' property should match as expected');
  t.equal(result1.firstGroup, '0.5, 1, 1', '\'firstGroup\' property should match as expected');
  t.equal(result1.secondGroup, null, '\'secondGroup\' property should match as expected');
  t.equal(result1.thirdGroup, null, '\'thirdGroup\' property should match as expected');
  t.end();
});
