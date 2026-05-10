// //Number 
// let a = 10;
// let b = 65.6874586;
// let c = b.toFixed(1);
// console.log(c);
// console.log(typeof c);
// console.log(b.toPrecision(4)); 

// console.log("\n");

// //if number being object
// let d = new Number(20);
// console.log(d);
// console.log(typeof d);

// console.log("\n");

//  //Math
// console.log(Math.abs(-4));
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);
// console.log(Math.floor(6.3));
// console.log(Math.ceil(6.3));
// console.log(Math.max(25,65,975,66));
// console.log(Math.random()); //lt will generate value between 0 and 1,where 0 is include but 1 is not include

//print random number between  0 to 9
console.log(Math.floor(Math.random()*10))
//print random number between  0 to 6
console.log(Math.floor(Math.random()*6))

//equation is Math.floor(Math.random()*totalNumberOfOutcome)+shift
//15-25
console.log(Math.floor(Math.random()*11)+15)

//OTP generaten 1000 to 9999
// formula : Math.floor(Math.random()*(max-min+1)+min)
console.log(Math.floor(Math.random()*(9999-1000+1))+1000)


