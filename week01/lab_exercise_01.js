//Lab Exercise 01

//Exercise 01: Capitalize the first letter of each word

function capitalize(str) {
    return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

 console.log("Exercise 01 Output: ")
 console. log();
 console.log(capitalize("hi professor, how are you doing?"));
 console.log(capitalize("summer ended so fast, ugh."));
 console. log();


//Exercise 02: Pick largest of 3 integers

function maximum(x, y, z){
    return Math.max(x, y, z);
}

console.log("Exercise 02 Output: ");
console. log();
console.log(maximum(34, 67, 12));
console.log(maximum(777, 77, 7));
console.log(maximum(1, 3003, 29));
console. log();


//Exercise 03: Move last 3 letter to the front of a string

function move(str){
    if (str.length < 3){
        return str;
    }
    return str.slice(-3) + str.slice(0, str.length - 3);
}

console.log("Exercise 03: ");
console.log();
console.log(move("Potato"));
console.log(move("cat"));
console.log(move("Bangtan"));
console.log();


//Exercise 04: Find the type of angle

function angleType(angle){
    if(angle === 90) {
        return "Right angle"
    }
    if(angle < 90) {
        return "Acute angle"
    }
    if(angle > 90 && angle <180) {
        return "Obtuse angle"
    }
    if(angle === 180) {
        return "Stright angle"
    }
}
console.log("Exercise 04: ");
console.log();
console.log(angleType(77));
console.log(angleType(90));
console.log(angleType(104));
console.log(angleType(180));

