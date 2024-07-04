let guest_list: string []=['Sania','Hadia','Hina','Khadija'];
let not_present : string ='Hadia'; 
let new_guest:string = 'Saim'; 
guest_list[1]=new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n')
}
guest_list.unshift('Saim','Imad','Ali');
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam'+ guest_list[i] + ',\nWe found big table so we decide to inivte 3 more guest.\n\nThank You\n')
}