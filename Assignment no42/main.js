//Define the functions to show the variables name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great magician ".concat(name); });
}
//Defne an array of magicians name 
var magicians_names = ["Harry", "Peter", "William Andrew"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
