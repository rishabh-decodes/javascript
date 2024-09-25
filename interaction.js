// In this code we will learn about Interaction.......

// Interaction: alert, prompt, confirm

//alert: alert is used to invoke a mini window with a message alert...for example...alert("Hello")

alert("Hi how are you?")

//prompt: prompt is used to take user input as string.....

alert("Enter the value of a")
let a = prompt("Enter value of a here")
document.write(a)     //document.write is basically used to print the values which we assigned in prompt

// Confirm: Shows a message and waits for the user to press Ok or Cancel...Returns True for Ok and False for Cancel

alert("Enter the value of a!")
let a = prompt(Enter a value Here, "567") //here 567 will show as default value in prompt...we can change it.
a = number.parseInt(a)    //parseInt in used to convert number into integer type.
alert("you entered a type of " + (typeof a))
let write = confirm("Do you want to write it to the page")
if (write){
      document.write(a)
}
else{
    document.write("Please allow me to write")
}