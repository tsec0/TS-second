let age: number = 20;
if(age < 50){
    age += 10;
}
console.log(age);

// enums
const enum Size { Small = 1, Medium = 2, Large = 3 }; // more optimized code
let mySize: Size = Size.Medium;

