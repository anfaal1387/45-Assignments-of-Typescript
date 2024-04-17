//Heading for the program
console.log("\nMy Car Info:\n");

//Define a function to create a car objest with optional options....
function create_car(Manufacturer, Model, ...options){
    //Initialize a car object with manufacturer and Model...
    let car = {
        Manufacturer: Manufacturer,
        Model: Model,
    };

    //Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
    });

    return car;    
}

//Call the function to create a car object
let my_car = create_car("Kia", "Sportage", "Colour: White", "Sunroof: True", "Condition: New(Zero Meter)");

//Print the variable to ensure all the information is stored correclty in the car object
console.log(my_car);
