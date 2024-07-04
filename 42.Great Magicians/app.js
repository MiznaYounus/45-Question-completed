// Exercise :41
var magicians = ["brad", "Rmeez", "ainak wala"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
// Exercise :42
var magicians2 = ["brad", "Rmeez", "Chris"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";
    }
}
make_great(magicians); //Modifies the orignal array
show_magicians(magicians); //Show modified name
