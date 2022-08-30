// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
let parent={
    name: "Md Mobashir",
    age: 22,
    add: "bhagalpur,Bihar,812002",
    detailOfParent: function(){
        console.log(`parents name is  ${this.name} , age is${this.age} and address is ${this.add}`)
    }
}
let child = {
    name: "xyz",
    age: 000,
    detailOfChild: function(){
        console.log(`Child name is  ${this.name} , age is${this.age} and  and address is ${this.add}`);
    }
}
child.__proto__=parent;
child.detailOfChild();



// Write code to explain prototype chaining
console.log(child.__proto__);
console.log(child.__proto__.__proto__);
console.log(child.__proto__.__proto__.__proto__);



// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
let array = [12, 3, 4, 15];
function sumOfArray(array)
{
    let sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        sum = sum + array[i];
    }
    return sum;
}
console.log(sumOfArray(array));



// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let keys1 =Object.keys(parent);
console.log(keys1);
let value1 = Object.create(parent);
console.log(value1.name, value1.age ,value1.add, value1.detailOfParent());