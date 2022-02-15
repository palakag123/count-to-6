function replaceSpecialCharacters(escapeWord)
{
    escapeWord = escapeWord.replace(/&/g,'&amp;');
    escapeWord = escapeWord.replace(/'/g,'&apos;');
    escapeWord = escapeWord.replace(/"/g,'&quot;');
    escapeWord = escapeWord.replace(/</g,'&lt;');
    escapeWord = escapeWord.replace(/>/g,'&gt;');   
    return escapeWord;
}

function html(fixedWords,...varPassed) {
    let resultString = fixedWords[0];
    for(let index = 0; index < varPassed.length; index++){
        resultString += replaceSpecialCharacters(varPassed[index]) + fixedWords[index+1];
    }
    return resultString;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);