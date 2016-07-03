const should = require('should');
var Regex = require('../');

var conStr = 'Hello World';


describe( 'match test', function () {
    it( 'no match', function () {
        var regex = new Regex('K');
        var match = regex.match(conStr);
        should(match).not.be.ok();
    } );
    
    it( 'one match', function () {
        var regex = new Regex('He');
        var match = regex.match(conStr);
        should(match).is.a.Object();
        match.value.should.equal('He');
    } );
    
    it( 'two match', function () {
        var regex = new Regex('Hell');
        var match = regex.match(conStr);
        should(match).is.a.Object();
        match.value.should.equal('Hell');
    } );
} );