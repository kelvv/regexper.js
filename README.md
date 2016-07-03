# regexper.js

[![Build Status](https://travis-ci.org/kelvv/regexper.js)](https://travis-ci.org/kelvv/regexper.js.svg?branch=master)

node.js regex use easy


```
var Regex = require('../');

var regex = new Regex('(W)(1)(2)3','ig');

regex.match('wWW')

regex.matches('Vwisit W123School')

regex.replace('Visit Hello','visi');

regex.replace('Visit Hello',(match)=>{
  let value = match.value;
  return 'd';
});
```
