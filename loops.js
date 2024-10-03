// Loops in JS
// Loops are used to execute a peice of code again and again.


// For Loop

//for (let i = 1; i <= 5; i++)
// here first i is to initialize, and second i tells us about the stoping condition and the third i is for updation.

 // for (let count = 1; count <=5; count ++) {
   // console.log("Hello World");
   //This code prints "Hello World" five times.


// While loop

let count = 1;

while(count <= 10){
   document.write("Rishabh");
   count++;
}


// code to print the sum of even numbers from 1 to 100

let counter = 1;
let sum = 0;

while(counter <=100){
   if(counter % 2 == 0){
       sum = sum + counter;
     }
     counter++;
}

document.write(sum);


// Do-while Loop
