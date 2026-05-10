//object
//CRUD operations : create Read Update Delete
//1...Create
const user = {
    //Key : Value
    name : "Mani",
    age : 20,
    emailID : "maniSankarpandit@43gmail.com",
    amount : 3400

}
// console.log(user);

// //2....Read
// //how to access single value in a object
// console.log(user.age);

// //3... Update
// user.aadhar = 9118 //insert
// user.age = 21;
// console.log(user);

// //4.... Delete any vale in object
// delete user.emailID;
// console.log(user);

// //function call execution
// const user2 = user;
// user2.age = 60;
// console.log(user);

// //** importent all keys into array
// console.log(Object.keys(user));
// //** importent all value into array
// console.log(Object.values(user));
// //** importent all keys and value together into array
// console.log(Object.entries(user));

//for in loop  in object
// for(let keys in user){
//     console.log(keys,user[keys]);
//     // console.log(keys); //only keys
//     // console.log(user[keys]);//only value
//     // console.log(user.keys);//all value are undefine
// }

// //object ka destructure korna
// const {name,age} = user;
// console.log(name,age);
// //key ar nam change kora jabe
// const {name:username,age:userage} = user;
// console.log(username,userage);

// //array ka destructure korna
// const arr = [10,20,30,40,50];
// const [first,second] = arr;
// console.log(first,second);

//For of loop it basically run in array
// const temparr = Object.keys(user);// only for keys
// console.log(temparr);//store the all value in array
// for(let keys of temparr){ 
//     console.log(keys); 
// }
// for(let values of Object.values(user)){ //only value 
//     console.log(values); 
// }

// for(let values of Object.entries(user)){ //all key and value together
//     console.log(values); 
// }

// distructure of for of array
// for(let[keys,values] of Object.entries(user)){
//     console.log(keys,values); //all key and value access hoga 
// }


  





