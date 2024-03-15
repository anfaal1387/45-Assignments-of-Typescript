//Creating an array
var userNames = ["Ashraf", "Erum Naz", "Admin", "Zunair", "Manahil Ashraf"];
//Using ForEach loop on array
userNames.forEach(function (onerUser) {
    if (onerUser === "Admin") {
        console.log("Hello ".concat(onerUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello".concat(onerUser, ", Thank you for logging in again."));
    }
});
