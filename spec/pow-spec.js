
var Arifmetika = require('../js/script.js');

describe("testing function pow()", function() {
    var    x = [0, 1, 1, 3, -3 ,2, 1];
    var    y = [1, 1, 10, 3, 3, 4, 0];
    var answ = [0,1,1,27,-27,16,1];
    
    function test_my_pow(base, exponent, answer){
      it('should pow(' + base + ',' + exponent +') = ' + answer, function() {
        expect(Arifmetika.pow(base, exponent)).toEqual(answer);
      });
    }
    if (x.length === y.length && y.length === answ.length) {

        for (var i = 0; i < x.length; i++) {
   
         test_my_pow(x[i], y[i], answ[i]);
        
        };
     };
});