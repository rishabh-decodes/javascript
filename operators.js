/* The following math operations are supported in javascript:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder or Modulus %,
Exponentiation **.

*/

// Addition

let a = 5;
let b = 2;

console.log("a + b = ", a + b);


let a = 5;
let b = 2;
let c = a + b;  //we can also stote the value of a and b in a new variable  
 console.log(" a + b = ", c);

 //Subtraction

let a = 5;
let b = 2;
console.log("a - b = ", a - b);

 // Multiplication

let a = 5;
let b = 2;
console.log("a * b ", a * b);
 
//Division

let a = 5;
let b = 2;
console.log("a / b ", a / b);

// Remainder or Modulus

let a = 5;
let b = 2;
console.log("a % b ", a % b);


  /*  Unary operators 

  Increment operator (++)
  Decrement oprator (--)
  */

// Increment operator

let a = 5;
let b = 2;
a++;  //6
console.log("a = ", a); // output 6

//Decrement operator

let a = 5;
let b = 2;
a--;  //4
console.log("a = ", a); // output 4

/* The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter.
Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).
*/

//Example...

let counter = 1;
let a = ++counter; 

alert(a); // 2
//In the line the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.


//Example ...

let counter = 1;
let a = counter++; 

alert(a); // 1
//In the line the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.