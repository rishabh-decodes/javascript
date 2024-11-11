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

 