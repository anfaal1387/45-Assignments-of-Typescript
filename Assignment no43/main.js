//Define the functions to show the variables name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Functions to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great magician ".concat(name); });
}
//Defne an array of magicians names
var magicians_names = ["Harry", "Peter", "William", "Andrew"];
//Making a copy of original array through .slice() function
var copy_magician_names = magicians_names.slice();
//Modify the copied array to include "The Great" with thoer names
var copy_great_magician = make_great(copy_magician_names);
//Show both arrays original and copied
//Original
console.log("\nOriginal Array\n");
show_magicians(magicians_names);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
