console.log("Hello World"); 
var a = 100
console.log(a)
console.log(typeof a)
var a = "hello"

console.log(a)

let c = 100
// let c ="Hello"
console.log(c)
{
    //console.log(c)
    let c = 200
    a = "world"
    console.log(c)
}

console.log(c)

var x = null
console.log(typeof a)
console.log(typeof true)
console.log(typeof x)
console.log(typeof undefined)
console.log(typeof aa)
//Function Declaration
function greet() {
    return 'welcome'
}

//Function expression
greet = function() {
    return 'welcome'
}

//Arrow function
greet = () => {
    return 'welcome'
}
console.log(typeof greet)

//Object Literal
let emp = {
    eid: 1,
    100: 'Hundred',
    name: "Pritesh",
    "city name": 'NYC',
    print: function(){
        console.log(this.eid)
    }
}

console.log(typeof emp)
console.log(emp.eid)

console.log(emp.eid)
console.log(emp[100])
console.log(emp["100"])
console.log(emp["city name"])
const key1 = 'eid'

console.log(emp[key1])