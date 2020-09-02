function sum(a, b) { //lista de parametri a , b

    var c = a + b;
    return c;
}

var x = sum(10, 5); //functia trebuie sa ofere inapoi locului unde a fost chemata
console.log(x) //15
console.log(sum(20, 30));

function isNumberEven(number) {
    var isEven = number % 2;

    if (isEven === 0) {
        console.log("The number " + number + "is even");
    } else {
        console.log("The number " + number + "is odd.");
    }
    return isEven === 0;
}


console.log(isNumberEven(4));

console.log(Math.floor(4.6)) //4

console.log(Math.pow(2,5))//32 ridicarea la putere

console.log(Math.min(2, 10, 124, 1, -5, ));//cel mai mic  numar

console.log(Math.random())

var number1 = Math.floor(Math.random() * 49);
var number2 = Math.floor(Math.random() * 49);

var number3 = Math.floor(Math.random() * 49);
var number4 = Math.floor(Math.random() * 49);
var number5 = Math.floor(Math.random() * 49);
var number6 = Math.floor(Math.random() * 49);
console.log(number1, number2, number3, number4, number5, number6);

function generateWinningLotteryNumbers(numberOfResults) { 
    if(numberOfResults > 6) {
        return;
    }
    var number = Math.floor(Math.random() * 49);
    console.log("Lottery numbers: ",number);
    generateWinningLotteryNumbers(numberOfResults + 1);
}

generateWinningLotteryNumbers(1)