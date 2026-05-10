const arr = [10,20,30,40,50];
// arr.forEach(
//     (number,index,arr)=>{
//         console.log(number,index,arr);
//     }
// )

//application
let sum = 0;
arr.forEach((number)=>{
    sum+=number;
})
console.log(sum);
