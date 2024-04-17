//Define a function with a rest parameter that accept items arguments are representing our sandwich
function make_sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy your sandwich!")
}

//Call the function with three items and three differnt arguements
make_sandwich("Chicken", "Ketchup", "All yof our special sauces", "Cheese", "boil egg");
make_sandwich("Bread", "Butter");
make_sandwich("lettuce", "Fries Chips", "Shimla Mirch");