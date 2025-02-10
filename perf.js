
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