// console.log("This is Tutorial 55");
// let i=0;
// for (i=0; i<5;i++){
//     console.log(i);
// }

let friends = ["Rahul", "Chikki", "Yugal", "Sanjay", "Deb"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello Frands "+ friends[index]);

// }

// friends.forEach(function f(element) { // This is new Version of for loop
//     console.log("Hello friend, "+ element + "to modern JS");

// })

// for (element of friends){  //This is new For of loop/ New Version of for loop
//     console.log("Hello friend, "+ element + "to modern JS again"); 
// }

let employee = {
    name: "Rahul",
    salary: 10,
    channel: "6t9mag",
}

for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`);//For in Loop This is new loop use in place of for loop
}

//While Loop
// let i=0;
// while (i<450) {
//     console.log(`${i} is less than 450`);
//     i++;

// }

//Do while loop
let j=34;
do {
console.log(`${j} is less than 4 it runs one time to execute do`);
j++;
} while (j<4);