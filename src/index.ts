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

let values: number[] = [10, 20, 40, 10]