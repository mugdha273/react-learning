// const myfunc = (name) =>{
//     console.log(name);
// }

// myfunc("mugdha")

//export and import

// import {smth} from './utility.js'    ->when no default is used
// import prs from './person     ->when default is used in export

//classes

// class person{
//     name  = "Max"   //property
//     call = () => console.log("hello");   //methods
// }

// const obj = new person()
// obj.call()

//inheritance-> class Person extends Master
// in ES7 there is no need to write constructor() {} you can simply write your properties and methods. also in ES7 you can use arrow functions directly

//spread and rest operators
// ...
//spead-> used to split array elements or object elements
// oldArray = [5,6,2,1];
// newArray = [...oldArray,6,8]

// console.log(newArray);
//for objects->
//const newObject = {...oldObject, newProp:5}

//rest operator-> used to merge a list of function arguements into an array
/*

function sortArgs(...args){
    return args.sort();
}

so it can get a lot of arguements and we can return them in an sorted ARRAY!
*/

//Destructuring

/*

[a,b] = ["hello", "max"]

console.log(a)
console.log(b)

*/


