//Heading for the program
console.log("\nMy Car Info:\n");
//Define a function to create a car objest with optional options....
function create_car(Manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //Initialize a car object with manufacturer and Model...
    var car = {
        Manufacturer: Manufacturer,
        Model: Model,
    };
    //Add additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object
var my_car = create_car("Kia", "Sportage", "Colour: White", "Sunroof: True", "Condition: New(Zero Meter)");
//Print the variable to ensure all the information is stored correclty in the car object
console.log(my_car);
