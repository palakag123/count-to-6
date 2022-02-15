module.exports = (...args) => {
    let sum=0;
    args.forEach(function(number){
        sum +=number;
    });
    return (sum/args.length);
};

/* (...args) => {
    var sum = args.reduce((valueSoFar, element)=> valueSoFar+element, 0);
    return sum/args.length;
};
*/