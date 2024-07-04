// Exercise :41

let magicians: string[] = ["brad","Rmeez","ainak wala"];

function show_magicians(magicians: string[]){
    magicians.forEach(magicians => {
       console.log(magicians); 
    });
}

show_magicians(magicians);


// Exercise :42

let magicians2: string[] =["brad","Rmeez","Chris"];

function make_great(magicians: string[]){
    for (let i =0; i<magicians.length; i++){
        magicians[i] = magicians[i] +"the Great";
    }
}

make_great(magicians); //Modifies the orignal array
show_magicians(magicians) //Show modified name