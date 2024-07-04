let car: string = 'Subaru';
let age: number =25;
let numbers: number[] = [1,2,3,4];

//**String Tests**

//Test 1:Equality (True)
console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru'); //True (Case-insensitive)

//Test 2:Strict Equality (False)
console.log("Is car === 'Subaru'? I predict False.")
console.log(car === 'Subaru'); //False (Case-sensitive)

//Test 3:Inequality (True)
console.log("Is car != 'Toyota'? I predict True.")
console.log(car != 'Toyota'); //True 

//Test 4:Inequality (False)
console.log("Is car !== 'Subaru'? I predict False.")
console.log(car !== 'Subaru'); //False (Case-sensitive)

//**Lowercase Function Tests**

//Test 5:Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'Subaru'? I predict True.")
console.log(car.toLowerCase() == 'Subaru'); //True (Converted to lowercase)

//Test 6:Lowercase conversion (False)
console.log("Is car === car.tolowerCase()? I predict False.")
console.log(car === car.toLowerCase()); //False (Orignal value remains upperCase)

//**Numerical Tests**

//Test 7:Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True

//Test 8:Inequality (False)
console.log("Is age != 30 ? I predict True.");
console.log(age != 30); // True

//Test 9:Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False

//Test 10:Less than or equal (True)
console.log("Is age <= 25 ? I predict True.");
console.log(age <= 25); // True

//**Logical Operators**
//Test 11:AND (True)
console.log("Is age > 20 && age < 30 ? I predict True.");
console.log(age > 20 && age < 30); // True(both conditions met)

//Test 12:OR (False)
console.log("Is age >30 || age < 18 ? I predict False.");
console.log(age > 30 || age < 18); // False(neither conditions met)

//**Array Tests** 

//Test 13: In array 
const array1 :number[]=[1,2,3,4,5,6];
const itemToFind : number =3; 

console.log(array1.indexOf(itemToFind) !== -1 ); //True

//Test 14:Not in array
console.log(array1.indexOf(10) === -1); //True
















