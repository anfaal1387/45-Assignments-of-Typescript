//Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an array containing magicians name
var magicians_names = ["Herry", "Mark", "Peter", "Andrew"];
//Call the function to print each magician name
show_magicians(magicians_names);
