let name="Harry";
// console.log(`${name} Is a Good boy`);
function greet(name, greettext) {
    
    console.log(greettext + " " + name);
    console.log(name + " is a Good boy");

    
}

let name1="Rahul";
let name2="pikku";
let name3="Susmita";
let greettext="Good Morning"

greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3, greettext);

function sum (a,b,c,e){
    let d=a+b+c+e;
    return d;
}
let returnval = sum(1,2,3,4)
console.log(returnval);

function checker (num1,num2){
    if (num1>num2){
        console.log(num1+" is greater");
    }else{
        console.log(num2+" is greater");
    }
}
checker (3,622);

