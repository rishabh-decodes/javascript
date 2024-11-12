// Loops in JS
// Loops are used to execute a peice of code again and again.


//For loop

/*   The for loop is frequently used, usually where the loop will be traversed a fixed number of times.

syntax: 
         for( initialization; test condition; increment or decrement)
         {
              block of statements;
         }
 */


 for (i=0; i<5; i++)
 {
    document.write(i + "<br>");
 }

 // Another way to write for loop

 var i=0;
 for( ; i<5; i++)
    {
        document.write(i + "<br>");
    }
    

 //program to add first n natural numbers
 let sum = 0
 let n = prompt("Enter the value of n")
 n = Number.parseInt(n)
 for (let i = 0; i < n; i++){
     sum += (i+1)
     console.log((i+1), "+")
 }  
 console.log( " sum of first " + n + " natural number is " + sum );


 // While loop
 /* The While loop keeps repeating an acion util an associated condition returns false.
    syntax:  
            while (test condition)
            {
               body of the loop;
               increment/decrement;
            }
*/

let n = prompt("Enter the value of n")
n = Number.parseInt(n)
let i = 0;
while(i<n){
    console.log(i)
    i++;
}

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

//Do while
/* syntax:
         do{
          // loop body
         }  While (condition);

*/
// do while loop simply means if the condition is true or false it will execute atleast one time.


let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 10;
do{
    console.log(i)
    i++;
}while (i < n)


    