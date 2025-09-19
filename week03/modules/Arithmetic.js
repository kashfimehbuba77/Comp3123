function add(a,b){
    return a + b;
}

function sub(a,b){
    return a -b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if (b === 0){
        throw new Error("Division by zero is not allowed");
    }
    return a/b;
}

//Export the functions to be used in another module
module.exports = {
     sum:add, //renamed sum for external use
     sub,
     multiply,
     divide
};

