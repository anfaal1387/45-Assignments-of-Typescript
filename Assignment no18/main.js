var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array of countries and print its original order
var countriesToVisit = ["Palestine", "Germany", "Japan", "Saudi Arab", "United Arab Emirates"];
console.log("Original Order;", countriesToVisit);
//Print the array in alphabetical order without modifying actual array
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//Show that the array is still in actual array
console.log("Still in Original Colour:", countriesToVisit);
//Now Printing in Reverse Order
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
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
