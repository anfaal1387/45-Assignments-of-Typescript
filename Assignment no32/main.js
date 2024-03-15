//Array of current users
var current_users = ["Ashraf", "Erum Naz", "Anfaal", "Zunair", "Manahil"];
var our_user_name = ["Anfaal"];
//Array of new users
var new_users = ["Jameel", "Ayesha", "Neelam Nayab", "Abdul Haseeb", "Sana Jabeen"];
//Loop throuh new users to check for usernames availiblity
new_users.forEach(function (new_one_user) {
    //Making a conditio for username already exist and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    //Print Different messages using If-else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, ", is available"));
    }
});
