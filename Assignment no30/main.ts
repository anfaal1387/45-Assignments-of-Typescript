//Creating an array
let userNames = ["Ashraf", "Erum Naz", "Admin", "Zunair", "Manahil Ashraf"];

//Using ForEach loop on array
userNames.forEach(onerUser =>{
    if(onerUser === "Admin"){
        console.log(`Hello ${onerUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello${onerUser}, Thank you for logging in again.`)
    }
})