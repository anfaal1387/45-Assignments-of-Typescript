//Array of current users
let current_users = ["Ashraf", "Erum Naz", "Anfaal", "Zunair", "Manahil"]
//Array of new users
let new_users = ["Jameel", "Ayesha", "Neelam Nayab", "Abdul Haseeb", "Sana Jabeen"]

//Loop throuh new users to check for usernames availiblity
new_users.forEach(new_one_user => {

    //Making a conditio for username already exist and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())

    //Print Different messages using If-else statements
    if(our_condition){
       console.log(`Sorry ${new_one_user}, is already taken!`)    
    }else{
        console.log(`This Username ${new_one_user}, is available`)
    }   
})