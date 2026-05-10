// console.log("Hello World Start");

// const p1 = fetch("https://api.github.com/users"); 

// // fullfilled , reject

// const p2 = p1.then((response)=>{
//    return response.json();
// })


// p2.then((data)=>{
//     console.log(data);
// })


// const parent = document.getElementById("first");
// fetch("https://api.github.com/uers")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("Data is not present in server");
//     }
    
//    return response.json();
// })
// .then((data)=>{
    
//     // const parent = document.getElementById("first");
//     for(let i = 0;i<data.length;i++){
//     const image = document.createElement('img');
//     image.src = data[i]. avatar_url;
//     image.style.height = "100px";
//     image.style.width = "100px";
//     parent.append(image);
//     }
// })

// .catch((error)=>{
//     parent.textContent = error.message;
// })


// //js to json convertion
// const j1 ={
//     name : "mani",
//     age : 21,
//     address:"Kolkata",
//     c:undefined,
// }

// const jsonformat = JSON.stringify(j1);
// console.log(jsonformat);

// //json to js obj convertion

//  const jsonformat1 = `{
//  "name":"mani",
//  "age":21,
//  "address":"Kolkata"
//  }` 

//  const jsObj = JSON.parse(jsonformat1);
//  console.log(jsObj);


//creating new promises 
//promises has two condition one resolve and another reject

const p2 = new Promise((resolve,reject)=>{
    reject("Hello");
    //  resolve("Hello");

})
p2.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})









