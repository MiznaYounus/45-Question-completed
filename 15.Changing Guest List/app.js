var guest_list = ['Sania', 'Hadia', 'Hina', 'Khadija'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n');
}
var not_present = 'Hadia';
var new_guest = 'Saim';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThank You\n');
}
console.log("Mrs.".concat(not_present, "will not coming tomorrow dinner."));
