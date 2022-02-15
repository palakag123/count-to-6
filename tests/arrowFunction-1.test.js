const obj = require('../arrowFunction-1.js');

describe('function to return reduced form of string', function(){
    it('should return 1st letter of words concatenated', function(){
        const result = obj.stringReducer();
        expect(result).toBe(".hbk");
    });
    it.only('should take empty string if no value passed in command line', function(){
        const result = obj.stringReducer();
        expect(result).toBe("");
    });
});