//creating a guestlist array
let guestlist = ["Ashraf", "Erum Naz", "Anfaal", "Zunair", "Manahil"];

//making a variable for those who cannot come
let notcome = guestlist[0];

//print the name of guest who cannot come
console.log(notcome, "Anfaal Can't come.");

//add or remove values from guestlist arrays
guestlist.splice(3, 1, "Sultan Anfaal");

//message print for bigger table
console.log("Good News! We have found a bigger table for diner");

//adding a new value at starting of array
guestlist.unshift("Abbu");

//adding a new value at the end of an array
guestlist.push("Asshad");

//adding a new value at middle index of array
let middleIndex: number = Math.floor(guestlist.length / 2);

//addin a new value in the middle index of array
guestlist.splice(middleIndex, 0, "Areeb Hussain");


console.log("Updated list of our guests");

//sending invitation to our guest one by one
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to have dinner with me tonight?`));