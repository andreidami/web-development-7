var numbers = [1, 2, 3, 4, 5];
console.log(numbers);//pozitia incepe de la 0

console.log(numbers[1]);//imi arata doar pozitia 2

for (var index = 0; index < numbers.length; index++) { // cu cuvantul putem sa iteram o bucata de cod cat timp o conditie e indeplinata, adica o functie
    console.log(numbers[index]);//in prima parte a forului ii spunem de unde sa inceapa adica index=0,a doua parte este conditie
}//index este pozitia dintro lista care incepe de la 0


console.log(numbers[10]);//undifined pt k nu exista in lista

//this one goes through each element everytime
numbers.forEach(function (number){console.log(number);});

numbers.push(6); //adauga numar la sfarsit
console.log(numbers)

numbers.unshift(-2); //adauga numar la inceput
console.log(numbers);

numbers[2] = "two";
console.log(numbers)

// deleta an item from the array

numbers.splice(2, 1); //primul e pozitia si dupa cate vrei sa stergi
console.log(numbers);

//filter items
var oddNumbers = numbers.filter(function (number) {
    if (number % 2 !== 0) {return true;} else {return false}
})
console.log(oddNumbers);

//mapping items fron an array

var dubledNumbers = numbers.map(function (number) {return number * 2;})
console.log(dubledNumbers);
//map = transform in programare

var randomNumbers = [3, 11, 421, -521, 4, -5, 98];

randomNumbers.sort(function (firstElement, secondElement) {
    if (firstElement < secondElement) {
        return -1;
    }
    if (firstElement > secondElement) {
        return 1;
    }
    if (firstElement === secondElement) {
        return 0;
    }
}

)
console.log(randomNumbers)

function filterNames(names) {
    return names.filter(function(name) {
        if (name.length > 4) {
            return true;
        } else {return false;}
    });
}
var names = ["Ana", "Cosmin", "Samantha", "tomy", "jonathan"];
var longNames = filterNames(names);

console.log(longNames)




function generateWinningLotteryNumbers(numberOfResults, results) { 
    if(numberOfResults > 5) {
        return;
    }

    var number = Math.floor(Math.random() * 49) + 1;
    var isNumberInResult = false;
    for(var index = 0; index < results.lenght; index++){
        if (results[index] === number) {
            isNumberInResult = true;
        }
    }
    if(isNumberInResult === false) {
        results.push(number);
        generateWinningLotteryNumbers(numberOfResults + 1, results);
    } else {
        generateWinningLotteryNumbers(numberOfResults, results)
    }
    return results;
    
}
console.log(generateWinningLotteryNumbers(0, []))


