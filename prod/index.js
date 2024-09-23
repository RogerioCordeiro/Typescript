"use strict";
function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 8);
console.log(result);
// o uso do type ANY
// evitar usar esse tipo por boas práticas
let price = 40; //type number
let item = 'apple'; //type string
let inStore = true; //type boolean
let value; //type ANY
value = 10; // Aceita number
value = 'Rogerio'; // Aceita string
// Array 
let values = [10, 20, 40, 10];
// Tupla
let items = ['Apple', 3, true];
// const admin = 1
// const read = 2
// const backup = 3
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Rogerio',
    age: 37,
    role: Role.backup
};
console.log(user);
