// function greeting(){
//     console.log("Hello World");
// }
// greeting();

// function addnum(num1,num2){
//     const sum = num1+num2;
//     console.log(sum);
// }
// addnum(6,8);

// function greeting(){
//     console.log("Hello World");
//     return 10;
// }
// console.log(greeting());

// function addNum(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }
// addNum(6,7);
// addNum(6,9,8);
// addNum(6,6,9,7);

// //using rest operater we can add n num of values
// function addNUM(...num){ //...num is rest op
//     let sum = 0;
//     for(let n of num){
//         sum += n;
//     }
//     console.log(sum);
// }
// addNUM(1,2,6,6,1,3,6,49); //o/p 74

// //2nd method of function call
// //function:expression
// const addNumber = function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4));


//3rd method of function call
//arrow function
// const Addnum = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(Addnum(3,5));
// //if  i remove return keyword and curly bracket then there no error has been created
// const AddNum = (num1,num2) => num1+num2;
// console.log(AddNum(3,9));

// //Application of arrow fuction
// let arr = [100,23,65,98,12,1];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// //if i pass 1 parameter into the arrow function then we want to remove first bracket eg-
// //means if we have single parameter , no need of this ()
// const squnum = num => num*num;
// console.log(squnum(6));


// //4th method IIFE means Immediately Invoked Function Expression
// (function greeting(){  //using normalfunction
//     console.log("Hello ji");
// })();

// (()=>{ //using arrow funtion
//     console.log("hi");
// })();











