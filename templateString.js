const es6String=() => 
`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`; 

console.log (es6String());

