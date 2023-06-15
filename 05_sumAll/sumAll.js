//take two numbers
//sum all numbers between the two numbers
//return the sum
//1,4
//starts as 1 + 2 + 3 + 4 = 10
//
const sumAll = function(start, end) {
    let finalNum;
    //error for negative number
    if(start < 0 || end < 0){
        return 'ERROR';
    }
    // error if input is not a number
    if(isNaN(start) || isNaN(end) || typeof start  === 'string' || typeof end === 'string'){
        return 'ERROR';
    }
    //smaller first
    if(start < end){
        let finalNum = start;
        for(i=start + 1;i <= end; i++){
            finalNum += i;
        }
        return finalNum;
    }
    //bigger first
    if(start>end){
        let finalNum = end;
        for(i=end + 1;i <= start; i++){
            finalNum += i;
        }
        return finalNum;
    }

};

// Do not edit below this line
module.exports = sumAll;
