let GuestList = ["M.Ashraf", "Erum Naz", "M.Anfaal","M.Zunair", "Manahil Ashraf"];

let NotComing = GuestList[0];

console.log(NotComing, "Cannot Come because he has flight to makkah with his family.");

guestList.splice(0, 1, "Aamir");

guestList.forEach(guest => console.log(`Salam, ${guest}, would you like to have dinner with me?`));