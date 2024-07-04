var guest_list = ['Sania', 'Hadia', 'Hina', 'Khadija'];
var not_present = 'Hadia';
var new_guest = 'Saim';
guest_list[1] = new_guest;
guest_list.unshift('Saim', 'Imad', 'Ali');
console.log('\n unfortunately we can not arrrange big table , Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, "you are not inivited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nYes you are still invited on tommorow dinner.\n\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
