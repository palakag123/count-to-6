
const es6String=() => {
    return `Hello, ${process.argv[2]}!
    Your name lowercased is "${process.argv[2].toLowerCase()}".`; 
    }

console.log (es6String());

module.exports= {templateString:es6String};