// function firstEl(arr:(number | string)[]){
//     return arr[0];
// }
// const value = firstEl(["ratnadeep","abc"]);
// console.log(value.toUpperCase());// problem


function identity<T>(arg:T):T{
    return arg;
}

let output = identity<string>("myname");
let output2 = identity<number>(12);
console.log(output.toUpperCase());
console.log(output2);