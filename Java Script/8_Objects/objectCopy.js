 const user ={
    name : "Mani",
    age : "20",
    address:{     //nested object
        city : "kolkata",
        state:"WB",
    }
}
/*Shallow copy */
//** make indepedent copy in between two object
// user4.address.city= "Medinipur"
// console.log(user4);
/*o/p{
  name: 'Uma', using ...(spread operater) this is called shallow copy
// const user4 = {...user}; //nested object mai kam nahi korega
// user4.name = "Uma";
  age: 20,
  emailID: 'maniSankarpandit@43gmail.com',
  amount: 3400,
  greeting: [Function: greeting]
}*/
// console.log(user);
/* o/p{
  name: 'Mani',
  age: 20,
  emailID: 'maniSankarpandit@43gmail.com',
  amount: 3400,
  greeting: [Function: greeting]
} */

/*Deep copy */
//using structureClone we can conduct deep copy
// const user2=structuredClone(user);
// user2.address.city= "Medinipur";
// console.log(user);
// console.log(user2);


// //** we can consider number as a key eg:
// const obj={
//   name:"Mani",
//   age :"20",
//   0:"200",
//   3 :"mohan"
// } 
// //how to access number :-
// console.log(obj[3]); //o/p mohan

// // **key are treat as a string or symbol eg:
// const sym = Symbol("id");
// const obj={
//   name:"Mani",
//   age :"20",
//   0:"200",
//   3 :"mohan",
//   [sym]:"hello",
// } 
// console.log(obj[sym]);