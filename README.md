# regexper.js

[![Build Status](https://travis-ci.org/kelvv/regexper.js.svg?branch=master)](https://travis-ci.org/kelvv/regexper.js)

node.js regex use easy

# Installation


using npm (the recommended way):

```
$ npm install regexper.js --save
```

# Usage

```
var Regex = require('../');

var regex = new Regex('(W)(1)(2)3','ig');

let match = regex.match('wWW')

/* match : {
              value : string
              index : number,
              input : string,
              groups: [{
                value : string
              }]
            }
*/

regex.matches('Vwisit W123School')

regex.replace('Visit Hello','visi');

regex.replace('Visit Hello',(match)=>{
  let value = match.value;
  return 'd';
});
```

# License

MIT
