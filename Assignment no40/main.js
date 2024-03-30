//Define the make album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions with different values
var album1 = make_album("Mr. Ashraf", "Album title 1");
var album2 = make_album("Mr. Zunair", "Album title 2");
//creating a variable function with third parameter
var album3 = make_album("Mr. Anfaal", "Album title 3", 70);
//Print values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
