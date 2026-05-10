const newEle = document.createElement("h2");
newEle.textContent = "Strick is coming";
newEle.id = "Sec";

const ele = document.getElementById("First");
ele.after(newEle);

const ele3 = document.createElement("h3");
ele3.textContent = "This  is monday";
ele3.id = "third";
//put the class name here using classlist keyword
ele3.classList.add("monday");
ele3.classList.add("sunday");
//we can also remove the extra class name
ele.classList.remove("sunday")
ele3.style.backgroundColor = "pink";
ele3.style.fontSize = "20px";

ele.after(ele3);
console.log(ele3);

// const list = document.createElement("li");
// list.textContent = "Milk";

// const list1 = document.createElement("li");
// list1.textContent = "Cake";
// const list2 = document.createElement("li");
// list2.textContent = "kurkura";
// const list3 = document.createElement("li");
// list3.textContent = "egg";

// const unorderele = document.getElementById("listing");
// // unorderele.append(list);
// // unorderele.append(list2);

// //we can use together while using append

// unorderele.append(list,list2);
// //we can push if at first using prepand
// unorderele.prepend(list3);
// //we cam push after milk
// unorderele.children[1].after(list1);

//** Real world how to work this 

// const arr = ["milk","cake","Egg","ponir","tufu"];
// const unorderEle = document.getElementById("l isting");
// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderEle.append(list);
// }//This is not optimized method

//for optimized this code we use fragment
const arr = ["milk","cake","Egg","ponir","tufu"];
const fragment = document.createDocumentFragment("li");

const unorderEle = document.getElementById("listing");
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderEle.append(fragment);


















 