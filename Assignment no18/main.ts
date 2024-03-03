//Making an array of countries and print its original order
let countriesToVisit: string[] = ["Palestine", "Germany", "Japan", "Saudi Arab", "United Arab Emirates"];
console.log("Original Order;", countriesToVisit);

//Print the array in alphabetical order without modifying actual array
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the array is still in actual array
console.log("Still in Original Colour:", countriesToVisit);

//Now Printing in Reverse Order
console.log("Reverse Order:", [...countriesToVisit].reverse());

//Showing array is still in  actual array
console.log("Still in Original Order:", countriesToVisit);

//We have changed the order of original array
console.log("Original Array Reversed :", countriesToVisit.reverse());

//Print to show that it is backed to Original Order
console.log("Back to the original ordeer:", countriesToVisit.reverse());

//Print order has been changed in alphabetical order
console.log("sorted in alphabetical order:", countriesToVisit.sort());

//We have changed the original order in reversed order again
console.log("original order reversed:", countriesToVisit.reverse());