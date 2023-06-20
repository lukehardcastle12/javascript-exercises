const fibonacci = function(start) {
    let a = 0,
    b = 1, 
    c;
    if(start === 0) return start;
    if(start < 0) return 'OOPS';
    for(let i = 2; i <= start; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
