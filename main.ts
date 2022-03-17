
let url: string = "www.wp.pl"
function add(num1: number, num2: number) {
    return num1 + num2
}

add(5, 4)

// nie pozwala zminiac typu zadklarownej zmiennej
// url = 452525
interface User {
    id: number,
    name: string,
    username: string | undefined | number,
    email: string | null, // taki zapis daje nam mozliwoś przypisania stringa bądz null 
    address: Address,
    phone: string | number,// taki zapis daje nam mozliwoś przypisania stringa bądz number 
    website?: string | boolean,
    company: object
}
interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo?: {
        lat: number,
        lng: number
    }
}

// znak zapytania przy kluczy w interface, daje mozliwość opcjonalnego dodanie w objekcie danej własności
let user: User = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: -37.3159,
            lng: 81.1496
        }
    },
    phone: "1-770-736-8031 x56442",
    website: true,
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",

    }
}

enum Day { Monday, Tuesday, Wednesday, Thursday, Friday };

const day: Day = Day.Monday
// zmienn oczekuje tablicy z objektami User
// const allUsers: User[] = [
//     {},
//     {}
// ]

// oba zapisy list i list2 robią dokładnie to samo. 
let list: Array<number> = [1, 2, 3];
let list2: number[] = [5, 6, 7]

// let a = []
// let b = new Array()
// oba zapisy robią dokładnie to samo.

interface ClubIn {
    name: string,
    numberCups: number,
    start: Date,
    x?: HTMLCollection
}

function addClub(name : string, numberCups: number, start: Date):ClubIn {
    return {
        name: name,
        numberCups: numberCups,
        start: start
    }
}
// dodanie ? przy argumencie, powoduję że jest nie wymagany
function send(url: string, payload: object, pageNumber?: number) {
    //
}
send("www", {})
