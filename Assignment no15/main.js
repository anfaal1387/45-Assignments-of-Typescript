var guestList = ["M.Ashraf", "Erum Naz", "M.Anfaal", "M.Zunair", "Manahil Ashraf"];
var notComing = guestList[0];
console.log(notComing, "Cannot Come because he has flight to makkah with his family.");
guestList.splice(0, 1, "Aamir");
guestList.forEach(function (guest) { return console.log("Salam, ".concat(guest, ", would you like to have dinner with me?")); });
