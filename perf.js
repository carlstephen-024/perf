///1. Differentiation of let, const, and var in JavaScript
    /// Variables is used to store data
    /// var creates a function-scoped variable and also works outside the block


    var fruits = ['banana', 'apple', 'mango'];
    var customer = ['pedro', 'merlita', 'pedring'];
          
        for (var item of fruits) {
            console.log(1, item);
            for (var item of customer) {
            
            }
            console.log(2, item);
        }
    /// let creates a block-scoped variable
    let fruits = ['banana', 'apple', 'mango'];
    let customer = ['pedro', 'merlita', 'pedring'];
          
        for (let item of fruits) {
            console.log(1, item);
            for (let item of customer) {
            
            }
            console.log(2, item);
        }
    
    /// const can be assinged only once, and its value or item cannot be change afterwards
    /// constant variable
    /// you can change it but you can't override it
    const food = 'fruit';
    
    console.log(food);
    
    /// error if uncommented
    /// let's use const for array
    /// uncomment the ff three lines and comment the "console.log(food);" in line 33
    ///const foods = ['fruit', 'vegetables', 'snacks'];
    ///foods.push('junkfoods');
    ///console.log(foods);
    ///references: JavaScript Interview - Q What are variables What is the difference between var, let, and const ?
    ///( https://youtu.be/T4QOc53qRp4?si=spyGezF0vqAcRaZC )
    ///JavaScript var, let, and const explained (https://youtu.be/pobWEaHNChY?si=Zgde1cUcBglCW-bZ)


///2. Concept of Falsy Values in JavaScript
    ///Falsy values is unlike truthy values, falsy values represents "nothingness", "emptiness", and "faliure".
    ///Falsy values helps to prevent common pitfalss in javascript.
    ///There are eight falsy values which is; false, 0, "" or '', null, undefined, NaN, etc.
    ///The 0 (zero) is considered falsy because it evaluates to false in a boolean context.
    ///The "" or empty string is considered falsy because it has nothing in it.
    ///And the null is considered falsy because it represents the intentional absence of any value.

    ///example in 0 or zero
    let studentNum = 0 ///try to change the 0 to any number and it will do what the if statement said.
if (studentNum) {
    console.log("the number of students is", studentNum)
} else {
    console.log("zero") /// this will execute because 0 is considered falsy
}

    ///example in "" or empty string
    let studentStatement = "" ///try adding 'hello' inside the double quotation
if (studentStatement) {
    console.log("the student's statement is", studentStatement) ///this will only execute if the "" contains a string
} else {
    console.log("the student has no statement") ///this will execute if its considered falsy
}


    ///example for null
    let studentstatement = null; ///already set the studentstatement as null, therefore

if (studentstatement) {
    console.log("the student's statement is", studentstatement); ///this will not be executed
} else {
    console.log("the student has no statement"); ///but this will be executed
}
