//sorting

// const names = ["Allic","Mani","Rohit","Bob","kalu"];
// names.sort();
// console.log(names);
// names.reverse();
// console.log(names);

// //sort number but JS number of array treat as a string so it sorting basis if ASCII value
// const num = [101,32,90,82,95];
// num.sort();
// console.log(num);

// const arr = [10,"mani","bakti",true];
// arr.sort();
// console.log(arr);


const arr = [10,50,36,96,2,15];
//sorting in assending order
arr.sort((a,b)=>a-b);
console.log(arr);
//sorting in Desending order
arr.sort((a,b)=>b-a);
console.log(arr);
/*suppose
 a = 10;
 b = 50;
 if a-b = -ve : pehale a aayega then b aayaga
 if a-b = +ve : pehale b aayega then a aayaga
*/











