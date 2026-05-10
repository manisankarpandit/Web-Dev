// zomato application

const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    
    //create new promises 
    return  new Promise((resolve,reject)=>{
      setTimeout(()=>{
      if(Math.random()>0.1){
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
      resolve(orderDetail);
       }
      else{
        reject("Payment is failed");
      }
    },3000)
    })
}



function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);

     //create new promises 
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(Math.random()>0.05){ 
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
        }
        else{
            reject("Food item is not persent at restaurant");
        }
    },3000);
    })
 
}


function pickupOrder(orderDetail ){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

     //create new promises 
    return  new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(Math.random()>0.05){   
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
        }
        else{
           reject("Delivery boy Unable to reach restaurant")
        }
    },3000);
    })
    
}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

     //create new promises 
    return  new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
        resolve(orderDetail);
    },3000)
    })
   
}





// using callback function ... you can see code in callback folder
// placedOrder(orderDetail, (orderDetail)=>{
//     preparingOrder(orderDetail ,(orderDetail)=>{
//         pickupOrder(orderDetail, (orderDetail)=>{
//             deliverOrder(orderDetail);
//         });
//     });
// });


//using promisec we solve this problem
placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
}).catch((error)=>{
    console.log("Error",error);
}).finally(()=>{ //it will run allways if code is resolve or reject
    console.log("I am doing cleanup");
})





