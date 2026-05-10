//Array
let marks = [100,50,89,54,32,98];
console.log(marks);

//length of array
console.log(marks.length);

// ak array k ander multiple type data ruck saktu hun jaise
let arr  = [100,3.5,"Mani",true];
console.log(arr);

//type of array
console.log(typeof arr); //object is mutable data type and primitive data type immutable 

//change array element -> array ka  1st index ko 90 korna hai
arr[1] = 90;
console.log(arr);

//array ke last mai data add kor sakta hun using push operation insert element
arr.push(66);
arr.push("Sankar");
console.log(arr);

//using pop operation we can delete the data from array end
arr.pop();
console.log(arr);

//Starting add kar sakta hu, deletethe at first place
arr.unshift(99);
console.log(arr);

//Delete kar sakta hun starting ele
arr.shift();
console.log(arr);


















