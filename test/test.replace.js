const should = require('should');
var Regex = require('../');

var conStr = 'dHello World';


describe( 'replace test', function () {
    it( 'left area', function () {
        var regex = new Regex('H');
        regex.replace(conStr,'h').should.equal('dhello World');
    } );

    it( 'middle area', function () {
        var regex = new Regex('o\\sW');
        regex.replace(conStr,'T').should.equal('dHellTorld');
    } );

    it( 'right area', function () {
        var regex = new Regex('d$');
        regex.replace(conStr,'P').should.equal('dHello WorlP');
    } );

    it( 'more match', function () {
        var regex = new Regex('o','ig');
        regex.replace(conStr,'').should.equal('dHell Wrld');
    } );
} );