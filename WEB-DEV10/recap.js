var a = 5;
console.log(a);
a = 8;
console.log(a)

var b =10;
var c = a + b;
console.log("c=" , c)

var x = 10;
var y = 1.5;
var z = "john";
var w = true;

var list = [1, 2, 3, 4, 5];
var three = list[2];
var person = {age: 30, haircolor: "#00000",
 eat: function(food){
    console.log("i am eating" , food);
}}

console.log(person.age)


function multiply(a, b) {
    return a * b;
}
console.log(multiply(12,6))

//var j = multiply(123, 14);
//consol.log(j)



function divide(a, b) {
    if (b !== 0) {
    return a / b;

} else { throw new Error("You cant divide with zero");} }


console.log(divide(12, 0));
