//Define the functions to show the variables name
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Functions to make magicians great through map.() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great magician ${name}`);
}

//Defne an array of magicians name 
let magicians_names = ["Harry", "Peter", "William Andrew"]

//Call make_great function to modify array 
let great_magicians = make_great(magicians_names);

//Call show_magicians that show modified list of magicians name
show_magicians(great_magicians);