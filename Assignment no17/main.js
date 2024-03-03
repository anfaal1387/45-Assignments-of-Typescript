//creating a guestlist array
var guestlist = ["Ashraf", "Erum Naz", "Anfaal", "Zunair", "Manahil"];
//making a variable for those who cannot come
var notcome = guestlist[0];
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
var middleIndex = Math.floor(guestlist.length / 2);
//addin a new value in the middle index of array
guestlist.splice(middleIndex, 0, "Areeb Hussain");
console.log("Updated list of our guests");
//sending invitation to our guest one by one
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to have dinner with me tonight?")); });
//Inform that only two guests can be invited today for dinner 
console.log("Unfortunately, the big table will not ne available today, so I can only Invite two guests to diner with me.");
//Using while loop for condition to remove guests until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " I can't invite you to dinner because table will not be available"));
}
//making 2 guests know that they are still invited
console.log("Invitations to the last two guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckily, ".concat(lasttwo, " You are still invite for the dinner")); });
//making list empty
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
