const should = require('should');
var Regex = require('../');

var conStr = 'Hello World';


describe( 'test test', function () {
    it( 'true', function () {
        var regex = new Regex('H');
        regex.match(conStr).should.be.ok();
    } );
    it( 'false', function () {
        var regex = new Regex('BB');
        should(regex.match(conStr)).not.be.ok();
    } );
} );