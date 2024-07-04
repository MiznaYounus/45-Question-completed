import { Console } from "console";

let currentUsers : string[] = ["admin","Ali","Ahmed","Hammad","Shahbaz"];
let newUsers : string[] = ["admin","Taha","Sana","Hammad","Shahbaz"];

for (let new_users of newUsers){
    const lowercase_new_users = new_users.toLowerCase();


    if(currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_users)){
       console.log(`the username ${new_users} is not available`);

    }else{
        console.log(`the username ${new_users} is avaiable`);

    }
}