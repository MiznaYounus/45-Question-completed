function make_album(artistName:string, albumTitle:string){
    return {artistName, albumTitle}
}

let album1=make_album("Ali","Rang-e-Mohabat");
let album2=make_album("Madad","Roshan Andhera");
let album3=make_album("Ayaz","Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

//Number of tracks
function make_album2(artistName: string, albumTitle:string, numberOfTracks?: number){
    return{artistName,albumTitle,numberOfTracks}
}

let album4 =make_album2("Ali","Dil hai",  58);
let album5 =make_album2("Madad","ajeeb kahani", 55);
let album6 =make_album2("AtifAslam","Doorie", 75);

console.log(album4);
console.log(album5);
console.log(album6);