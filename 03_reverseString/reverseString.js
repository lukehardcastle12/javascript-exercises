const reverseString = function(string) {
    let reversed=""
    for(i=0;i<=string.length;i++){
        reversed += string.charAt(string.length-i);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
