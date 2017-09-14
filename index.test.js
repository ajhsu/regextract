var test = require('tape');
var extract = require('./index.js');

test('Extract text as expected', t => {
  var result = extract(
    'transform: scale3d(0.5, 1, 1); transform: scale3d(2.0, 2.0, 1.0);',
    /scale3d\((.*?)\)/g
  );

  t.deepEquals(result.matches, [
    'scale3d(0.5, 1, 1)',
    'scale3d(2.0, 2.0, 1.0)'
  ]);
  t.deepEquals(result.extracts, ['0.5, 1, 1', '2.0, 2.0, 1.0']);

  t.end();
});

test('Extract text as expected', t => {
  var result = extract('iPhone6, iPhone7, iPhone8, iPhoneX', /iPhone\d/g);

  t.deepEquals(result.matches, ['iPhone6', 'iPhone7', 'iPhone8']);
  t.deepEquals(result.extracts, []);

  t.end();
});
