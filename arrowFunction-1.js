let stringReducer=(input = "") =>{
    if(input === '')
        return '';
    input = process.argv.slice(3);
    let combinedLetters='';
    const mapResult = input.map(firstLetter => firstLetter[0]).reduce((letter1, letter2, combinedLetters) => letter1+letter2);
    console.log(`[${input}] becomes "${mapResult}"`);
    return mapResult;
}
const res=stringReducer();
console.log(res);
module.exports = {stringReducer};