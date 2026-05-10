// const obj1 = {
//     name:"Rohit",
//     age:30,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// const obj2 = {
//     name:"Mohit",
//     age:20,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }


// const obj3 = {
//     name:"Mohan",
//     age:10,
//     greet:function(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHi(){
//         console.log(`Hi ${this.name}`);
//     }
// }


// const person1 = new Person("Mani",20);
// console.log(person1.name);
// const person2 = new Person("Mohit",10);

// class Customer extends Person{
//   constructor(name,age,account,balance){
//     super(name,age);
//     this.account = account;
//     this.balance = balance;
//   }

//   checkBalance(){
//     return this.balance;
//   }
// }

// const c1 = new Customer("Mohan",20,12,540);

// console.log(c1);
// console.log(c1.sayHi());


const obj = {
    name:"Rohit",
    age:20
}


const obj2 = Object.create(obj);
obj2.account = 10;

console.log(obj2.name);



