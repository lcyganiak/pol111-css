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
// funkcje 
function add(x, y) {
    console.log(this)
    return x + y
}
add(4, 5)
const sub = (a, b) => {
    console.log(this)
    return a - b
}
sub(5, 5)

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
console.log(zminnoprzecinkowa.toLocaleString('ja-JP', { style: 'currency', currency: "JPY" })) // ￥556

if (xd === "Billennium") {
    console.log("Fajna firma")
} else {
    console.log("sii też jest spoko")
}

xd === "Billennium" ? console.log("Fajna firma") : console.log("sii też jest spoko")



const oo = "Jan powiedział że: 'lubi koty'"

const random = Math.random()

const dynamiczny = `jestem randomową liczbą ${random}`
console.log(dynamiczny)

// funkcje tablicowe

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// map zwraca nową tablice o takiej samej długości, ze zminionymi elemntami

const arrNumberMap = arrNumber.map(item => {
    if(item % 2 === 0) {
        return item * 2
    } 
    return item * 3
} )
// rozwiązanie poniższe jest błędne bo zwróci  [undefined, undefined, undefined, undefined, 5, 6, 7, 8, 9]

// const filterMap = arrNumber.map (item => {
//     if(item > 4) {
//         return item
//     }
// })
console.log('map na arrNumber',  arrNumberMap)


// filtrowanie  zwraca nową tablicę ale z mnijszą lub równa liczba rekordów co orginał 

const arrNumberFilter = arrNumber.filter(item => {
    if(item > 5) {
        return item
    }
})
console.log("filter na arrNumber", arrNumberFilter)

// some i every obie zwracją bool ( true lub false )
// some sprawdza czy który kolwiek z el. spełnia warunek
// every sprawdza czy wszystkie el. spełniaja warunek 

const arrNumberSome = arrNumber.some(item => item > 4)
console.log("some na arrNumber", arrNumberSome)

const arrNumberEvery = arrNumber.every(item => item > 2)
console.log("every na arrNumber", arrNumberEvery)

// push i pop , czyli dodwanie i usuwanie z końca tablicy

// push - dodaje

const arrNumberPush = arrNumber.push(10) // błedny zapis, zwraca tylko 10 jako number 

console.log(arrNumber)

// pop usuwa 
const arrNumberPop = arrNumber.pop()
console.log(arrNumberPop ,arrNumber)

// unshift i shift dodawani i usuwanie  na poczatek zasady jak przy pop i push
// unshift dodje 
// shift usuwa 


// revers odwracanie 

// arrNumber.reverse()
// console.log(arrNumber )


//  sort sortowanie 

const names = ["Jan", "Adam", "Cecylja" ,"Ćma"]
console.log(names.sort())

const numbers = [5,8,7,11,12,21,111,222,32,17]


const sortNumbers = numbers.sort((a, b) => {
    console.log(numbers)
    console.log("a", a)
    console.log("b", b)
    return a -b
})
console.log(sortNumbers)

// concat łączenie tablic 

const arrNumberConcat = arrNumber.concat(numbers)


console.log(arrNumberConcat)
// łącznie tablic  z unikatowymi wartościami 
// 1 metoda 
numbers.forEach(item => {
    console.log(arrNumber.includes(item), arrNumber , item)
    if(!arrNumber.includes(item)) {
        arrNumber.push(item)
    }
})
// 2 metoda 
const concatUniq = new Set(arrNumber.concat(numbers))
console.log("NEWSET", concatUniq)
const concatTwoArr = Array.from(concatUniq)
console.log(concatTwoArr)
// forEAch 
let x = []
arrNumber.forEach(item => {
    if(item > 5 ) {
        x.push(item)
    }
})

