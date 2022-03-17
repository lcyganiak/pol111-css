// // var name = 'Jan'
// // var age = 25.5
// // var isPies = true
// // var niewiem = undefined
// // var nic = null

// console.log(name)
// // const name = 'Jan'
// // name = "Andrzej"

// let name2 = 'Michał'

// const arr = ["Halina", 25, 45, true, undefined];
// // console.log(arr[2]) // wypisze 45

// const obj = {
//     class: "5A",
//     name: "Przemek",
//     sName: "Kowalski"
// };
// obj.xd = "Żartowniś"
// // console.log(obj.name) // wypisze "Przemek"
// // funkcje 
// function add(x, y) {
//     console.log(this)
//     return x + y
// }
// add(4, 5)
// const sub = (a, b) => {
//     console.log(this)
//     return a - b
// }
// sub(5, 5)

// const wynika = add(true, false) // true === 1 false === 0
// // console.log(wynik)
// // console.log(true === 1) // false  trzy znaki === porównują typ i wartość 
// // console.log(true == 1) // true dwa znaki == porównują wartość 
// // console.log(1 == '1') // true dwa znaki == porównują wartość 
// // console.log(1 === '1') // false  trzy znaki === porównują typ i wartość 


// const example = 'Udostępniasz swój ekran'

// console.log('długość string', example.length) // zwraca 23 
// console.log('czy wartość ępni występuje w naszym przykładzie ', example.includes('ępni')) // true
// console.log('czy wartość java występuje w naszym przykładzie ', example.includes('java')) // false

// console.log('gdzie zaczyna się ępni', example.indexOf('ępni'))
// console.log('gdzie zaczyna się java', example.indexOf('java'))

// const exampleArr = example.split('')
// console.log(exampleArr)
// const xd = "Billennium" // 'muinnelliB'

// const prawieLiczba = '3E8'
// console.log(parseInt(prawieLiczba)) // zwróci 3 xd :)

// const zminnoprzecinkowa = 555.785858745

// console.log(zminnoprzecinkowa.toFixed(2)) // 555.79
// console.log(zminnoprzecinkowa.toLocaleString('ja-JP', { style: 'currency', currency: "JPY" })) // ￥556

// if (xd === "Billennium") {
//     console.log("Fajna firma")
// } else {
//     console.log("sii też jest spoko")
// }

// xd === "Billennium" ? console.log("Fajna firma") : console.log("sii też jest spoko")



// const oo = "Jan powiedział że: 'lubi koty'"

// const random = Math.random()

// const dynamiczny = `jestem randomową liczbą ${random}`
// console.log(dynamiczny)

// // funkcje tablicowe

// const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // map zwraca nową tablice o takiej samej długości, ze zminionymi elemntami

// const arrNumberMap = arrNumber.map(item => {
//     if(item % 2 === 0) {
//         return item * 2
//     } 
//     return item * 3
// } )
// // rozwiązanie poniższe jest błędne bo zwróci  [undefined, undefined, undefined, undefined, 5, 6, 7, 8, 9]

// // const filterMap = arrNumber.map (item => {
// //     if(item > 4) {
// //         return item
// //     }
// // })
// console.log('map na arrNumber',  arrNumberMap)


// // filtrowanie  zwraca nową tablicę ale z mnijszą lub równa liczba rekordów co orginał 

// const arrNumberFilter = arrNumber.filter(item => {
//     if(item > 5) {
//         return item
//     }
// })
// console.log("filter na arrNumber", arrNumberFilter)

// // some i every obie zwracją bool ( true lub false )
// // some sprawdza czy który kolwiek z el. spełnia warunek
// // every sprawdza czy wszystkie el. spełniaja warunek 

// const arrNumberSome = arrNumber.some(item => item > 4)
// console.log("some na arrNumber", arrNumberSome)

// const arrNumberEvery = arrNumber.every(item => item > 2)
// console.log("every na arrNumber", arrNumberEvery)

// // push i pop , czyli dodwanie i usuwanie z końca tablicy

// // push - dodaje

// const arrNumberPush = arrNumber.push(10) // błedny zapis, zwraca tylko 10 jako number 

// console.log(arrNumber)

// // pop usuwa 
// const arrNumberPop = arrNumber.pop()
// console.log(arrNumberPop ,arrNumber)

// // unshift i shift dodawani i usuwanie  na poczatek zasady jak przy pop i push
// // unshift dodje 
// // shift usuwa 


// // revers odwracanie 

// // arrNumber.reverse()
// // console.log(arrNumber )


// //  sort sortowanie 

// const names = ["Jan", "Adam", "Cecylja" ,"Ćma"]
// console.log(names.sort())

// const numbers = [5,8,7,11,12,21,111,222,32,17]


// const sortNumbers = numbers.sort((a, b) => {
//     console.log(numbers)
//     console.log("a", a)
//     console.log("b", b)
//     return a -b
// })
// console.log(sortNumbers)

// // concat łączenie tablic 

// const arrNumberConcat = arrNumber.concat(numbers)


// console.log(arrNumberConcat)
// // łącznie tablic  z unikatowymi wartościami 
// // 1 metoda 
// numbers.forEach(item => {
//     console.log(arrNumber.includes(item), arrNumber , item)
//     if(!arrNumber.includes(item)) {
//         arrNumber.push(item)
//     }
// })
// // 2 metoda 
// const concatUniq = new Set(arrNumber.concat(numbers))
// console.log("NEWSET", concatUniq)
// const concatTwoArr = Array.from(concatUniq)
// console.log(concatTwoArr)
// // forEAch 
// let x = []
// arrNumber.forEach(item => {
//     if(item > 5 ) {
//         x.push(item)
//     }
// })


const janKowalski = {
    name: "Jan",
    sName: "Kowalski",
    children: {
        name: "Kasia",
        Sname: "Nowak"
    }
}
const cloneJanKowalski = {...janKowalski}

janKowalski.children.Sname = "Potocka"

console.log(cloneJanKowalski)


// Hoisting 
// lodz = "Miasto"
// var lodz
// lodz = "Moje Miasto"
// console.log(lodz)

// warszawa = "Miasto"
// let warszawa
sda()
function sda() {
    console.log("Fajny kurs")
}

const objekt = {
    city: "Łódź",
    club: "ŁKS"
}

class Club {
    constructor(city, club) {
        this.city = city
        this.club = club
        this.majsters = []
    }
    get fullName() {
        return `${this.city} ${this.club}`
    }
    set majster(year) {
        this.majsters.push(year)
    }
}

const newClub = new Club("Poznań", "Lech")
newClub.majster = 2022
newClub.majster = 2023
console.log(newClub)




const person =   {
    id: 1,
    name: "Leanne Graham",
    usernam: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  }

// const keysPerson = Object.keys(person) // zwraca tablice stringów z kluczami podanego obiektu
// console.log(keysPerson)

// keysPerson.forEach(item => {
//     console.log(` moje ${item} to: ` + person[item])
// })

// keysPerson.includes('company')   // sprawdza czy klucz jest w tablicy stworzonej z kluczy objektu potrzebne wcześniejsze wykorzystanie Object.keys 

// person.hasOwnProperty('company') // bezpośrednio na objekcie sprawdza czy dany klucz jest

// Object.freeze(person)
// person.usernam = "Arlen" // zgłosi błąd. nie możemy manipulowac przy zamrozonym objekcie 

// Object.isFrozen(person) // zwraca true/false i sprawdza czy objekt jest freeze



console.log(document)
console.log(window.top)
// pobranie el. z pliku html po ID
const eleId = document.getElementById('skil-icon-id')
console.log('po id', eleId)
// zmina zawartości el. na stronie


// pobranie el. z pliku html po class zwraca HTMLCollection
const eleClass = document.getElementsByClassName('skil-icon')

console.log('po class', eleClass)
// po selektorze .skil-icon pobieramy pierwszy el. któy ma class="skil-icon" 
const querySel = document.querySelector('.skil-icon')
// po selektorze .skil-icon pobieramy wszystkie el. które mają class="skil-icon"  zwraca HTMLCollection
const querySelAll = document.querySelectorAll('.skil-icon')


//  HTMLCollection zmiana na zwukłą tablicę 
const querySelAllToArray = Array.from(document.querySelectorAll('.skil-icon'))

// tworzymy Paragraf
const paragraf = document.createElement('p')
// uzupełniamy tekst w paragrafie rozwiązanie bezpieczne
// paragraf.innerText = "Jestem paragrafem dodanym przez JS"

// uzupełniamy tekst w paragrafie rozwiązanie niebezpieczne!!!!!!!!!!
paragraf.innerHTML = "<p class='xd'> Jestem paragrafem dodanym przez JS</p>"

// dodajemy do dowolnego el. nasz paragraf. 
querySelAllToArray[3].appendChild(paragraf)

// pobranie button show more z sekcji SQL
const showMoreSql = document.getElementById('show-more-sql')


showMoreSql.addEventListener('click', showMoreAboutSql)

function showMoreAboutSql() {
    // pobieramy paragrafa z HTML, który jest ukryty przez css
    const sql = document.getElementById('desc-sql')
    // zminiamy css na widoczne 
    sql.style.display = 'block'
    // pobieramy przycisk do pokazywania szczegółów i go chowamy css 
    const show = document.getElementById('show-more-sql')
    show.style.display = 'none'

    // pobieramy przycisk do chowania opisu i go pokazujemy 
    const less = document.getElementById('show-less-sql')
    less.style.display = 'block'
}
// przy evantach typu change, focus , input 
// const telefon = document.getElementById('telefon').value

// telefon.addEventListener('change', )



// //    <!-- <label for="telefon">podaj swój numer tel a oddzwonię</label>
// <input type="text" onchange="telefonValue(value)" id="telefon" > -->
// drugi sposób podpinania eventów. powyżej kod z html wykomentowny 
 function telefonValue(v) {
     console.log(v)
 }