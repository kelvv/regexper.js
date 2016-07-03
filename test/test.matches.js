const should = require('should');
var Regex = require('../');

var conStr = 'Hello World';


describe( 'matches test', function () {
    it( 'no match', function () {
        var regex = new Regex('R');
        var matchList = regex.matches(conStr);
        should(matchList.length).equal(0);
    } );
    it( 'two match', function () {
        var regex = new Regex('H');
        var matchList = regex.matches(conStr);
        should(matchList.length).equal(1);
        should(matchList[0].value).equal('H');
    } );
    it( 'more match', function () {
        var regex = new Regex('l','ig');
        var matchList = regex.matches(conStr);
        should(matchList.length).equal(3);
    } );
} );