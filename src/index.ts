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