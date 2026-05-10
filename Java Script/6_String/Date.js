const now = new Date();
console.log(now); //UTc  time means universal time se sare 5 ghanta age
// //indian standad time
console.log(now.toString());
 console.log(now.toISOString());
 console.log(now.getTime());
 console.log(now.getHours());
 console.log(now.getMinutes());
 console.log(now.getFullYear());

 //create date randomly method 1 by user

//  //days : Mon-Tue(1 based)
//  //Month : 0 1
//  //format : year month date hour minute second milisecond
//  const now = new Date(2025,8,20,8,25,16,125);
// console.log(now);
// console.log(now.toString());

 //create date randomly method 2 by user
//timestamp 
//  const  now = Date.now();
//  console.log(now);
//  const dates  = new Date(1760798226408)
//  console.log(dates);

