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

console.log('długość string', example.length) // zwraca 23 
console.log('czy wartość ępni występuje w naszym przykładzie ', example.includes('ępni')) // true
console.log('czy wartość java występuje w naszym przykładzie ', example.includes('java')) // false

console.log('gdzie zaczyna się ępni', example.indexOf('ępni')) 
console.log('gdzie zaczyna się java', example.indexOf('java')) 

const exampleArr = example.split('')
console.log(exampleArr)
const xd = "Billennium" // 'muinnelliB'

const prawieLiczba = '3E8'
console.log(parseInt(prawieLiczba)) // zwróci 3 xd :)

const zminnoprzecinkowa = 555.785858745

console.log(zminnoprzecinkowa.toFixed(2)) // 555.79
console.log(zminnoprzecinkowa.toLocaleString('ja-JP', {style:'currency', currency: "JPY" })) // ￥556

if(xd === "Billennium" ) {
    console.log("Fajna firma")
} else {
    console.log("sii też jest spoko")
}

xd === "Billennium" ? console.log("Fajna firma") : console.log("sii też jest spoko")

""
''
``

const oo = "Jan powiedział że: 'lubi koty'"