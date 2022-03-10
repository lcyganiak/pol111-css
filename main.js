// var name = 'Jan'
// var age = 25.5
// var isPies = true
// var niewiem = undefined
// var nic = null

console.log(name)
// const name = 'Jan'
// name = "Andrzej"

let name2 = 'Michał'

const arr = ["Halina", 25, 45, true, undefined];
// console.log(arr[2]) // wypisze 45

const obj = {
    class: "5A",
    name: "Przemek",
    sName: "Kowalski"
};
obj.xd = "Żartowniś"
// console.log(obj.name) // wypisze "Przemek"

function add(x, y) {
    return x + y
}
const wynika = add(true, false) // true === 1 false === 0
// console.log(wynik)
// console.log(true === 1) // false  trzy znaki === porównują typ i wartość 
// console.log(true == 1) // true dwa znaki == porównują wartość 
// console.log(1 == '1') // true dwa znaki == porównują wartość 
// console.log(1 === '1') // false  trzy znaki === porównują typ i wartość 


const example = 'Udostępniasz swój ekran'

console.log('długość string', example.length)