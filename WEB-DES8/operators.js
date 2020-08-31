//operatori ne ajuta sa mutam sau sa schimbam datele
//Arithmetic operators
var a = 5;
var b = 3;

var c = a + b;
console.log(c);

var d = a - b;
console.log(d)
var e = a * b; //inmultit
console.log(e);


var f = a / b; //impartit
console.log(f);

var g = a % b;
console.log(g);

var h = 10;
h++;// h = h + 1 or h = 1
console.log(h)

//String operators
var firstName = "Cosmin";
var lastName = "Pruteanu";
var fullName = firstName + " " + lastName;
console.log(fullName);

// Comparison operators
//sunt folositi pentru a face comparatii
a = 10;
b = 7;
console.log(a < b);//false
console.log(a > b);//true
console.log(a <= 10);//a is equal or bigger then 10 witch is true
console.log(a == b);//testam verificam daca o variabila e egal u alta ,doi ==, false
console.log(a == "10");//this is true , verivica daca 10 = 10
console.log(a === "10");//this is false ,verifica si daca este de acelasi tip ,text ,numar
console.log(a !== b); //is a diferent from b => true

//Logical operators
var i = false;
console.log(!i);
console.log(true && true && false); //this will be false operatorul numit "si" "and"
console.log(true || true || false); //this will be true ."or" operator



