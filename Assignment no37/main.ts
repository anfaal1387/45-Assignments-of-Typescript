//Making a function
function make_shirt (size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`Creating a ${size} shirt with ${printMessage} message printed on your shirt`)
}

//Calling a function by default values for large shirts
make_shirt();

//Calling a function by default values for medium shirts now
make_shirt("Medium");

//Calling a function now for any size we are taking it small and print a differnt message
make_shirt("Small", "Al-Muharibeen-ul-Muslimeen");