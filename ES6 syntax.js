// let       (declaring block-scoped variables using the let keyword)

/* we all know that (var) keyword is a global scope, because of its global accessible,
it can be acess inside or outside of a function. 
To overcome this problem ES6 introduced (let) keyword which is a blocked scoped keyword.
*/

// for example:
let x = 10;
if (x == 10){
    let x = 20;    // output: 20
    console.log(x);
}
console.log(x);  // output: 10
/* here at first we declared a variable x with a value 10
and in second case a new variable x is declared with value 20
* the output of first console is 20 because the variable x 
  is declared inside block scope.

second, the output of second console is 10, because it is out of scope.
*/



