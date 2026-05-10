// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Mani Sankar Pandit "
// }

// const element = document.getElementById("first");
// element.addEventListener('click' , ()=>{
//     element.textContent = "Strick is comming";

// })
// element.addEventListener('click' , ()=>{
//     element.style.backgroundColor = "brown";
    
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I AM CLICKED";
//     child1.style.color = "black";
// })


//How to create this in one line using for of loop

// const parent = document.getElementById("parent");

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//     child.textContent = "I AM CLICKED";
//     child.style.color = "black";
// })
// }

const Grandparent = document.getElementById("grandparent");
Grandparent.addEventListener('click',()=>{
    console.log("grandparent is clicked");
},true)

const Parent = document.getElementById("parent");
Parent.addEventListener('click',()=>{
    console.log("parent is clicked");
},true)

const child = document.getElementById("child");
child.addEventListener('click',()=>{
    console.log("child is clicked");
},true)



  