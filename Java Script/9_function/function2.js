//callback
function greet(){
    console.log("Hello ji ,kaise ho");
}
function dance(){
    console.log("I am dancing");
}
function meet(callback){
    console.log("I am going to meeting someone");
    callback();
    console.log("I have finish meeting");
}
meet(greet);
meet(dance);