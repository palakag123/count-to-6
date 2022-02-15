const { describe } = require('yargs');
const obj = require('../templateString.js');

describe('function that returns a template string', function(){
    it('should return template string with lowercase value', function(){
        const result = obj.templateString("PALAK");
        expect(result).toBe(`Hello, PALAK!
        Your name lowercased is "palak".`);
    });
});