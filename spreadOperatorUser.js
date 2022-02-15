let spreadFunction = ()=>{
    const array = process.argv.slice(2);
    let minimumNumber = Math.min(...array);
    console.log(`The minimum of [${array}] is ${minimumNumber}`);
};
spreadFunction();