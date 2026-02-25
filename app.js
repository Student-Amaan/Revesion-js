// Variables & Data Types (45 min)
// Topics:

// let const var (difference samjho)

// String Number Boolean

// Array Object

// typeof

// let ko hum change our update kar saktha ha e.g=>

let num = 22;

// console.log(num)
num = 12;

num = 33;
console.log(num);

// let sirf block scope ka andar kam kartha ha e.g =>

if (true) {
  let name = "dnaish";
  console.log(name);
}
// let ko dobara re-declear nahi karsakhta

// let a = 'alpha' ghalt ho gata ha
// let a = 'Beta'

// correct method

let a = "alpha";
a = "Beta";

console.log(a)



// const ka matlab ha constant  (jo change nahi hota)

const age = 22
// age = 25;

console.log(age)

// const  object  value ko change kar sakhta ha lekein porra object change nahi karsktha

const person = {
    name: 'aman',
    age : 25,
    class : 9,
}

console.log(person.class) // correct


// we cannot initialize veriable like this

// const name;
//this is block scope of const
if(true){
    const name = 'Rawilpendi'
    console.log(name) // true
}

// console.log(name) false method
