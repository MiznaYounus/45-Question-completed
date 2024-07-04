// Exercise :41

let magicians1: string[] = ["brad","Rmeez","ainak wala"];

function show_magicians(magicians: string[]){
    magicians.forEach(magicians => {
       console.log(magicians); 
    });
}

show_magicians(magicians1);



//Exercise :42


let magicians2: string[] =["brad","Rmeez","Chris"];

function make_great(magicians: string[]) {
    for (let i =0; i<magicians.length; i++){
        magicians[i] = magicians[i] +"the Great";
    }
}

make_great(magicians2); //Modifies the orignal array
show_magicians(magicians2) //Show modified name



//Exercise :43


function make_great1(magicians1:string[]): string[]{
   const great_Magicians:string []= []
   for (let i=0; i< magicians1.length; i++){
    great_Magicians.push(magicians1[i]+ "the Great");
   }
    return great_Magicians
}

const magicians3: string[] =["Alice","David","Chris"]
const great_Magicians2: string[] =make_great1(magicians3)
show_magicians(magicians3) 
console.log("\nGreat magicians:");
show_magicians(great_Magicians2); 