/* Type conversion is simply conversion of one data type to another.

  Most of the time javascript first tries to convert data type Automatically.

*/
// example of automatic conversion


let type = 5 + null;
console.log(type);
console.log(typeof type);


//Type conversion:
   //1. String()
   //2. Number()
   //3. Boolean()

// Converting number into string

let type = 4;
console.log(typeof type);

let newType = string(type);
console.log(typeof newType);

// Converting Boolean into string

let type = false;
console.log(typeof type);

let newType = string(type);
console.log(typeof newType);

// Converting string into number

let type = "32";
console.log(typeof type);   //here it will show the output string because it is in double quote

let newType = number(type);
console.log(typeof newType);  // we changed the type to number so now its output will be number



let type = "32";
console.log(typeof type);   //here it will show the output string because it is in double quote

let newType = number(type);
//  console.log(newType);    // here the output will show NaN(not a number)
console.log(typeof newType);  // we changed the type to number so now its output will be number


// Converting Boolean into number

let type = true;
console.log(typeof type); 

let newType = number(type);
 console.log(newType);    
console.log(typeof newType);  

//for true output will be 1
//for false output will be 0


//Converting number into boolean


let type = 32;
console.log(typeof type); 

let newType = Boolean(type);
 console.log(newType);    
console.log(typeof newType);  

// If we keep the value 0 it will show false.
// Except 0 any number will be treated as True


//Converting string into boolean

let type = "";
console.log(typeof type); 

let newType = Boolean(type);
 console.log(newType);    
console.log(typeof newType); 

//Output

/*  string
    false
    boolean
*/
// If the value of string is empty the output will be false
// If there is any value in the string the output will be True    