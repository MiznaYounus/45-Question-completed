var magicians1 = ["brad", "Rmeez", "ainak wala"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians1);
var magicians2 = ["brad", "Rmeez", "Chris"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";
    }
}
make_great(magicians2); //Modifies the orignal array
show_magicians(magicians2); //Show modified name
function make_great1(magicians1) {
    var great_Magicians = [];
    for (var i = 0; i < magicians1.length; i++) {
        great_Magicians.push(magicians1[i] + "the Great");
    }
    return great_Magicians;
}
var magicians3 = ["Alice", "David", "Chris"];
var great_Magicians2 = make_great1(magicians3);
show_magicians(magicians3);
console.log("\nGreat magicians:");
show_magicians(great_Magicians2);
