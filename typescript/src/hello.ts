// function greet(firstname : string){
//     console.log("Hello World" + " " +firstname);
// }
// greet("John");


// function sum(a :number , b: number) : number{
//     return a+b;
// }
// console.log(sum(1,2)); 


// function runAfter1s(fn :()=> void){
//  setTimeout(fn, 1000);
// }

// runAfter1s(function(){
//     console.log("Hello");
// })

// interface User{
//     name : string;
//     age : number;
//     email?: string; //optional 

// }
// function isLegal(user :User){
//     if(user.age >18){
//        console.log("is Legal")
//     }
//     else{
//        console.log("isnot Legal")
//     }

// }
// isLegal({
//     name : "John",
//     age : 2
// })
// interface Person{
//     name : string;
//     age : number;
//     greet(phrase : string):void
// }
// class Employee implements Person{
//     name : string;
//     age : number;
//     constructor(name : string, age : number){
//         this.name = name;
//         this.age = age;
//     }
    
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
//     }

// }
//Type 
type greeArg = number | string |boolean
function greet(id: greeArg){
    console.log(id);
}
greet(1);
greet(3) 