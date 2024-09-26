/*
    Comparisions

In JavaScript Comparision are written like this:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b,  note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

Equal to ==            Equal to & type ===
Not equal to !=        Not equal to & type !==

*/

//  == equal to

5 == 5  -> true
6 == 5  -> false
5 == '5' -> true

//  === equal value and equal type

5 === 5  -> true  // It shows true because value and type are same 
5 === 5  -> false
5 === '5' -> false  // It shows false because value is same but type is not same.

// != not equal

8 != 5 -> true
5 != 5 -> false

// !== not equal value or not equal type

5 !== 5    -> false
5 !== "5"  -> true   // this shows false because the type are not equal
5 !== 8    -> true

// > greater than

5 > 8  -> false


// < less than

5 < 8  -> true


// >= greater than or equal to

8 >= 8  -> true

// <= less than or equal to

8 <= 8  -> true


// LOGICAL OPERATOR

//  && and

(5 < 10 && 6 > 1 )   -> true
(5 > 10 && 6 > 1 )   -> false  // if both condition are true then it will show true otherwise it wil show false

//  || or 

(5 == 5 || 6 == 5)  -> true   // if one condition pass it will show true
(7 == 5 || 6 == 5)  -> false

// ! not

!(6 == 5) -> true  //not operator reverse the decision ....
// 6 in not equal to 5 but we used not operator thats why the output will be true