// The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

//for example

let age = 18;

if(age>=18){
    alert("You can vote!");
}

// else statement

let age = 15;

if(age>=18){
    alert("You can vote!");
} else{
    alert("you cannot vote!")  // else will be executed only when the first statement is false
}

// else if statement


let age = 15;
let hasVoterCard = 'No';

if(age>=14 && hasVoterCard == 'yes'){    

    alert("you can vote!"); 

}else if(age>=14 && hasVoterCard != 'yes'){

    alert("Get your voter id card !");

}else{

    alert("You cannot vote!");
}    //here the first statement is true (age) but the second statement is wrong (hasVoterCard = 'No') thats why its output will be( "Get your voter id card!")


// nested if
    // if there is another if....else statement inside an if statement it is called nested if


let age = 15;
let hasVoterCard = "yes";

if(age>=14){

   if( hasVoterCard == "yes"){
     alert("you can vote!");
   }else{
     alert("Get your voter id card!");
   }

}else{
    alert("You cannot vote!");
}


// Boolean conversion
/* The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
if (0) { // 0 is false
    ...
  }

if (1) { // 1 is true
  ...
}
*/

let isLoggedin = 1;   //if 0 logged out...if 1 login 

if(isLoggedin == 0){
    document.write('Login');
}else{
    document.write('Logut')
}


//Conditional operator ‘?’
/*The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:

let result = condition ? value1 : value2;

The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
*/

let isLoggedin = 0; 

let option = isLoggedin == 1 ? "Logout" : "Login";
         //  condition           true       false

document.write(option);



// for multi line statements
// copied from javascript.info for learning purpose

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

//The first question mark checks whether age < 3.
//If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
//If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
//If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.


//Here’s how this looks using if..else:

if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }


// Nullish coalescing operator(??)

  let user;

  // user = "Rishabh";

  alert(user ?? "Guest user");
  //When we dont assign anything to variable the output shows(undefiend)....to escape from this we use (??) double question mark
  // Here the output will show (Guest user)