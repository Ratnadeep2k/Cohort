// function greet(firstname : string){
//     console.log("Hello World" + " " +firstname);
// }
// greet("John");


// function sum(a :number , b: number) : number{
//     return a+b;
// }
// console.log(sum(1,2)); 


function runAfter1s(fn :()=> void){
 setTimeout(fn, 1000);
}

runAfter1s(function(){
    console.log("Hello");
})
