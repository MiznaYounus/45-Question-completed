function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_album("Ali", "Rang-e-Mohabat");
var album2 = make_album("Madad", "Roshan Andhera");
var album3 = make_album("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of tracks
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = make_album2("Ali", "Dil hai", 58);
var album5 = make_album2("Madad", "ajeeb kahani", 55);
var album6 = make_album2("AtifAslam", "Doorie", 75);
console.log(album4);
console.log(album5);
console.log(album6);
