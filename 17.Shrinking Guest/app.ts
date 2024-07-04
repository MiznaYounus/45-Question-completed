let guest_list: string []=['Sania', 'Hadia', 'Hina', 'Khadija']; 
let not_present : string ='Hadia'; 
let new_guest:string = 'Saim'; 
guest_list[1]=new_guest;
guest_list.unshift('Saim', 'Imad', 'Ali');
console.log('\n unfortunately we can not arrrange big table , Only two people allow.')
while(guest_list.length>2){
let remove_guest = guest_list.pop();
 console.log(`Sorry Sir/Madam.${remove_guest}you are not inivited for dinner.`);
}
 for (let i=0; i<guest_list.length; i++){
 console.log('Respected Sir/Madam'+ guest_list[i] + ',\nYes you are still invited on tommorow dinner.\n\nThank You\n')
}
guest_list.splice(0,2)
console.log(guest_list)
    
