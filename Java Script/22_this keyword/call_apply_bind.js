// function greet(){
//     console.log(`hi ${this.name}`)
// }

// function incrementAge(value,name){
//     this.age += value;
//     this.name = name;
//     console.log(this.age);
//     console.log(this.name);
// }

// const user = {
//     name : "Mani",
//     age : 21,
// }

// const user2 = {
//     name :"Sankar",
//     age:20,
// }

// // greet.call(user);
// // greet.call(user2);

// // incrementAge.call(user,10,"Pandit");
// // //apply => it store the value in array format
// // incrementAge.apply(user,[10,"KOchi"]);
// // //bind => store value in a function
// const incr = incrementAge.bind(user,10,"Rahul");
// console.log(incr);
// incr();




//arrow function
// const greet = ()=>{
//     console.log(this);
// }
// greet(); // it allways return empty object





function greet(){
    console.log(this);
}
greet(); 


