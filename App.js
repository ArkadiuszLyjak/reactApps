const header = <h1 className='className'>Witaj</h1>;

const classBig = "big";

const main = (
    <div>
        <h1 className='red'>Pierwszy artykół</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellat
            deserunt, sequi quia voluptatum quis adipisci iure, eius maxime maiores
            voluptatem ad soluta veritatis tenetur! Odio, facere temporibus. Repellat,
            ipsa?
        </p>
    </div>
);


class City {

}

const Warsaw = new City()
console.log(Warsaw)

// const fn = (item1, item2)=> {
// 	console.log(`Podany argument to: ${item1} oraz ${item2}`)
// }
//
// fn("hej", "hek")

const user = [2, 3, 4, 5]
// const users_joined = user.join(" ")
// console.log(users_joined)

// const doubled_numbers = user.forEach(num => console.log(`${num}, zdublowane: ${num*2})`);
// console.log(doubled_numbers)
// console.log(user.forEach(num => console.log(`${num}, zdublowane: ${num*2})`))

// const numbers = [1, 2, 3, 4, 5]; // Przykładowa tablica liczb
//
// numbers.forEach(num => {
//     console.log(`${num}, zdublowane: ${num * 2}`);
// });
//
// console.log(numbers);


// function isString(value) {
//     return typeof value === "string" || value instanceof String;
// }

// function isString(value) {
// 	return typeof value === "string" || value instanceof String;
// }

// const users = ["adam", new  String("Bogdan"), "czarek", "darek"];

// const lowercaseUsers = users.map(user => {
// 	if (isString(user)) {
// 		return user.toLowerCase();
// 	} else {
// 		// Obsługa przypadku, gdy element nie jest łańcuchem znaków
// 		return user;
// 	}
// });
//
// console.log(lowercaseUsers);
//
// const new_table = [...users, user]

// const big_letter = users.map(user => user[0].toUpperCase())
// console.log(big_letter)

// const users = ["Alice", "Bob", new String("Charlie")]; // Tablica zawierająca stringi i obiekt String
//
// // Używamy map do przekształcenia każdego elementu na jego długość
// const lengths = users.map(
// 	(user, index, array) => {
//     console.log(`Index: ${index}, Element: ${user}, Length: ${user.length}, ${array[index]}`);
//     return user.length;
// });
//
// console.log(lengths); // Wyświetli [5, 3, 7]


// const user_ages = [21, 22, 34, 56, 78];
//
// const nums_greater_than_22 = user_ages.filter((num, index, talica) => {
// 	return num >= 23;
// });
//
// console.log(nums_greater_than_22)


// const people = [
//     {"name": "Alice", "age": 27},
//     {"name": "Bob", "age": 30},
//     {"name": "Charlie", "age": 12},
//     {"name": "Diana", "age": 28},
//     {"name": "Eve", "age": 35},
//     {"name": "Frank", "age": 40},
//     {"name": "Grace", "age": 32},
//     {"name": "Hank", "age": 27},
//     {"name": "Ivy", "age": 26},
//     {"name": "Jack", "age": 16}
// ];

// console.log(people);

// const isUserAdult = people.findIndex(person  => person.age < 18);
// console.log(isUserAdult)

// const underAgedPeople = people.filter((people, index, array) => {
//     return people.age < 18;
// });

// console.log(underAgedPeople)

// const alice = people.find((element, index, array) => {
//     return element.name === "Alice";
// });

// console.log(alice)
// const alice = people.findIndex((element, index, array) => {
//     return element.name === "Alice";
// });
//
// console.log(alice)

// user_ages.forEach((value, index, array) => {
// console.log(value+10, index, array)
// });

// const age_doubled = user_ages.map((value, index, array) => {
//     console.log(`${value + 1}, ${index}, ${array[index]}`);
//     return value * 2; // Zwracamy zdublowaną wartość
// });
//
// console.log(age_doubled); // Wyświetli [42, 44, 68, 112, 156]


// const new_letter_upper_case = users.map(elem => elem[0].toUpperCase())
// const new_letter_upper_case = users_joined.map(elem => elem[0].toUpperCase())
// console.log(new_letter_upper_case)

// console.log(typeof "Dupa")
// console.log("Dupa" instanceof String)
// const dupa = new String("Dupa")
// console.log(dupa instanceof String)


// console.log(isString("Dupa")); // true
// console.log(isString(new String("Dupa"))); // true
// console.log(isString(42)); // false
// console.log(isString({})); // false


// console.log(typeof users);
// console.log(typeof new_table);
// console.log(typeof 42); // "number"
// console.log(typeof "Hello, world!"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof { name: "Alice" }); // "object"
// console.log(typeof null); // "object" (jest to specyficzny przypadek w JavaScript)
// console.log(typeof function() {}); // "function"
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof BigInt(123)); // "bigint"

// console.log([] instanceof Array); // true
// console.log({} instanceof Object); // true
// console.log(function() {} instanceof Function); // true
// console.log(new Date() instanceof Date); // true

// console.log(Array.isArray([])); // true
// console.log(Array.isArray({})); // false

// console.log(Object.prototype.toString.call([])); // "[object Array]"
// console.log(Object.prototype.toString.call({})); // "[object Object]"
// console.log(Object.prototype.toString.call(new Date())); // "[object Date]"
// console.log(Object.prototype.toString.call(/regex/)); // "[object RegExp]"
// console.log(Object.prototype.toString.call(null)); // "[object Null]"
// console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]"
// console.log(Object.prototype.toString.call(123)); // "[object Number]"
// console.log(Object.prototype.toString.call("abc")); // "[object String]"
// console.log(Object.prototype.toString.call(true)); // "[object Boolean]"
// console.log(Object.prototype.toString.call(Symbol())); // "[object Symbol]"
// console.log(Object.prototype.toString.call(BigInt(123))); // "[object BigInt]"

// function getType(variable) {
//     if (variable === null) {
//         return "null";
//     }
//     if (Array.isArray(variable)) {
//         return "array";
//     }
//     if (variable instanceof Date) {
//         return "date";
//     }
//     if (variable instanceof RegExp) {
//         return "regexp";
//     }
//     return typeof variable;
// }
//
// console.log(getType(42)); // "number"
// console.log(getType("Hello, world!")); // "string"
// console.log(getType(true)); // "boolean"
// console.log(getType(undefined)); // "undefined"
// console.log(getType({ name: "Alice" })); // "object"
// console.log(getType(null)); // "null"
// console.log(getType([])); // "array"
// console.log(getType(function() {})); // "function"
// console.log(getType(new Date())); // "date"
// console.log(getType(/regex/)); // "regexp"
// console.log(getType(Symbol())); // "symbol"
// console.log(getType(BigInt(123))); // "bigint"


const footer = (
    <footer>
        <p className={classBig}>Footer na razie niezrobiony...</p>
    </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
