const palindromes = function (word) {
    const backwards = word.toLowerCase().replace(/[^a-z0-9]/g,"");
    return backwards.split("").reverse().join('') == backwards;
};

  

// Do not edit below this line
module.exports = palindromes;
