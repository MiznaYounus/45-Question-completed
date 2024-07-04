"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currentUsers = ["admin", "Ali", "Ahmed", "Hammad", "Shahbaz"];
var newUsers = ["admin", "Taha", "Sana", "Hammad", "Shahbaz"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var new_users = newUsers_1[_i];
    var lowercase_new_users = new_users.toLowerCase();
    if (currentUsers.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_users)) {
        console.log("the username ".concat(new_users, " is not available"));
    }
    else {
        console.log("the username ".concat(new_users, " is avaiable"));
    }
}
