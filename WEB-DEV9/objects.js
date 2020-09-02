var car = {
    type: "Fiat",
    model: "500",
    color: "white",
    isEngineStarted: false,
    fuel: 10,
    startEngine: function() {
        this.isEngineStarted = true;
        console.log("Engine Started");
    },

    refuel: function (fuelAmmount) {
        this.fuel = this.fuel+ fuelAmmount;
        console.log("Refuled with: ", fuelAmmount);
    }
};
console.log(car);
var carType = car.type;
console.log(carType);
console.log(car["type"]);

console.log(car.isEngineStarted);

car.startEngine();
console.log(car. isEngineStarted);
console.log("Before we had:", car.fuel);
car.refuel(30);
console.log("Now we have: ", car.fuel)


