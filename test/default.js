
var Regex = require('../');

var regex = new Regex('(W)(1)(2)3','ig');

console.log(regex.test('2'));

console.log(JSON.stringify(regex.match('wWW')));

console.log(JSON.stringify(regex.matches('Vwisit W123School')));