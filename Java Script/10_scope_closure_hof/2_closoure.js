////normal function
// function createCounter(){
//     function increment(){
//         console.log("Mani Sankar Pandit")
//     }
//     increment();
// }
// createCounter();

// function createCounter(){
//     function increment(){
//         console.log("Mani Sankar Pandit")
//     }
//     return increment;
// }
// const count = createCounter();
// console.log(count); //count access the referance of fn

//Actual use for closure
// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// //Application
// function createBankAccount(){
//     let balance = 500;
//     const user ={
//         deposite: function(amount){
//             if (typeof amount === "number" && amount>0){
//                 balance+=amount;
//                 return balance;
//             }
//         },
//         withdraw: function(amount){
//             if (typeof amount === "number" && amount>0 && balance>amount){
//                 balance-=amount;
//                 return balance;
//             }
//         },
//         getBalance:function(){
//             return balance;
//         }

//     }
//    return user;
// }
//  const customar = createBankAccount();
//  console.log(customar.deposite(200));



//Higher order function
// function double(){
//     function execute(){
//         console.log("Hello");
//     }
//     return execute;
// }
// const n = double();
// n();

function double(value){
    return function execute(num){
        return value*num;
    }
}
// const n = double(20);
// console.log(n(5));
//or
const n = double(20)(5);
console.log(n);








