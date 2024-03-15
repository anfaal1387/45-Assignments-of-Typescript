let userNames = ["Ashraf", "Erum Naz", "Admin", "Zunair", "Manahil Ashraf"]


userNames = []

if(userNames.length === 0){
   console.log("Your Array is empty, we need to find some users!")
}else{
    //Using foreach loop on array
    userNames.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})
}