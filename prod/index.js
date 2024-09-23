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
function sum(num1, num2) {
    return num1 + num2;
}
// Função sem retorno ela se torna void, sem retorno.
function returnE(price) {
    console.log('The result is ' + price);
}
returnE(sum(3, 9));
const users = {
    firstName: 'Rogerio',
    age: 40,
    lastName: 'S'
};
users.lastName = 'Cordeiro';
const e1 = {
    firstName: 'Rogerio',
    age: 35,
    id: 258,
    role: "Admin"
};
// Day 3 - Exercise 1
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
// Day 3 - Exercise 2
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie}-flavored pie.`);
// Day 3 - Exercise 3
let isDouglas = true;
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`);
// Day 3 - Exercise 4
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log(members);
// Day 3 - Exercise 5
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];
console.log(allMyArrays);
