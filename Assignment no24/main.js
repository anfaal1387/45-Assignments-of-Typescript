//Define Variables
var Fruit = "Apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Mango", "Grapes", "Pomegranate", "Guava"];
//Tests for equality and unequality with strings
console.log("\nIs fruit equal to apple?");
console.log(Fruit == "Apple");
console.log("\nIs fruit equal to apple?");
console.log(Fruit != "Apple");
//Tests using lowercase functions
console.log("Is Fruit equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs Fruit is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Tests
console.log("\nIs ten equal to twenty?");
console.log(ten == twenty);
//Not Equal to test
console.log("\nIs ten not equal to twenty/");
console.log(ten != twenty);
//Greater than test
console.log("\nIs ten greater than zero?");
console.log(ten > 0);
//Less Than Test
console.log("\nIs twenty less than ten?");
console.log(twenty < 10);
//Greater than or equal to test
console.log("\nIs ten is greater than or equal to five?");
console.log(ten >= 5);
//Less than or equal to test
console.log("\nIs twenty less than or equal to 10?");
console.log(twenty <= 10);
//tests using "and" & "or" Operators
//using an(&&) operator
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using or(||) operator
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Tests wheather an item is in array
console.log("\n Is Mango included in my fruits in my fruits array?");
console.log(fruits.includes("Mango"));
//not include
console.log("\n Is Mango  not included in my fruits in my fruits array?");
console.log(!fruits.includes("Mango"));
