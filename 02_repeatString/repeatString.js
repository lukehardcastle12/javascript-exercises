const repeatString = function(input, repeated){
    let output = "";
    if(repeated>=0){
        for(i=1;i<=repeated;i++){
            output = output + input
        }
        return output;
    }
    else{
        return "ERROR";
    }

    
};

// Do not edit below this line
module.exports = repeatString;
