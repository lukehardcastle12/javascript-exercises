//take two numbers
//sum all numbers between the two numbers
//return the sum
//1,4
//starts as 1 + 2 + 3 + 4 = 10
//
const sumAll = function(start, end) {
    let finalNum;
    //error for negative number
    if(start < 0 || end < 0) return 'ERROR';
    if(isNaN(start) || isNaN(end) || typeof start  === 'string' || typeof end === 'string') return 'ERROR';
    //Swaps start and end if start is bigger
    if(start > end){
        const holder =  start;
        start = end;
        end = holder;
    }
    finalNum = start;
    for(i=start + 1;i <= end; i++){
        finalNum += i;
    }
    return finalNum;
};

// Do not edit below this line
module.exports = sumAll;
