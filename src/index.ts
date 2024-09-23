function add(num1: number, num2: number) {
    return num1+num2
}

let result = add(5, 8)
console.log(result)

// o uso do type ANY
// evitar usar esse tipo por boas práticas

let price = 40 //type number
let item = 'apple' //type string
let inStore = true //type boolean

let value //type ANY
value = 10 // Aceita number
value = 'Rogerio' // Aceita string

// Array 
let values: number[] = [10, 20, 40, 10]

// Tupla
let items: [string, number, boolean] = ['Apple', 3, true]

// const admin = 1
// const read = 2
// const backup = 3
enum Role {admin =1, read = 2, backup = 3}

const user = {
    firstName: 'Rogerio',
    age: 37,
    role: Role.backup
}
console.log(user)

function sum(num1: number, num2: number) : number {
    return num1 + num2
}

// Função sem retorno ela se torna void, sem retorno.
function returnE(price: number) {
    console.log('The result is ' + price)
}

returnE(sum(3,9))

const users: {
    firstName: string;
    age: number;
    lastName: string
} = {
    firstName: 'Rogerio',
    age: 40,
    lastName: 'S'
}

users.lastName = 'Cordeiro'

type Person = {
    firstName: string
    age: number
}

type JobRole = {
    id: number
    role: string
}

type employee = Person & JobRole

const e1: employee = {
    firstName: 'Rogerio',
    age: 35,
    id: 258,
    role: "Admin"
}

// Day 3 - Exercise 1

let pi = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);

// Day 3 - Exercise 2

let pie : string
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)


// Day 3 - Exercise 3

let isDouglas: boolean = true
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)


// Day 3 - Exercise 4

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber:number = Infinity;

const members: number[] = [
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

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers:(number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);


// Seção 6 - OOP

class Users2 {
    name: string
    private balance: number = 0

    constructor(n: string, b: number) {
        this.name = n
        this.balance = b
    }

    addMoney(amount: number) {
        this.balance += amount
    }
}

const user1 = new Users2('Rogerio', 12)
const user2 = new Users2('Paulo', 50)
user1.addMoney(100)
console.log(user1)
console.log(user2)

interface Item {
    name: string
    price: number

    itemPurchased(message: string) :void
}

let product1: Item

product1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(message: string) {
        console.log(message + ' ' + this.name)
    }
}

product1.itemPurchased("You just bought a")


// Day 5 - Exercise 1

interface itemEx {
    id: number
    title: string
    variantId?: number
}

function addToCart(item: itemEx) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});