const sumAll = function(numOne, numTwo) {
    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return "ERROR";
    let larger, lesser;
    if(numOne > numTwo){
        larger = numOne;
        lesser = numTwo;
    }
    else{
        larger = numTwo;
        lesser = numOne;
    }

    if(lesser < 0) return "ERROR";
    let sum = 0;
    for(let i = lesser; i <= larger; i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
