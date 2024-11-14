const repeatString = function(word, timesToRepeat) {
    let returnval = "";

    if(timesToRepeat < 0) return "ERROR";
    for(let i = 0; i < timesToRepeat; i++){
        returnval+=word;
    }
    return returnval;
};

// Do not edit below this line
module.exports = repeatString;
