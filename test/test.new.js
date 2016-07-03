const should = require('should');
var Regex = require('../');

var conStr = 'Hello World';


describe( 'new test', function () {
    it( 'two create mode', function () {
        var regex = new Regex('Hell','ig');
        var regex2 = new Regex(/Hell/ig);
        regex.match(conStr).value.should.equal(regex2.match(conStr).value);
        regex.regex.toString().should.equal(regex2.regex.toString());
    } );
} );