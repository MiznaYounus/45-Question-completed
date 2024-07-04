let car: string = 'subaru';

//Test 1: Equality Comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

//Test 2: Strict Equality Comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

//Test 3:Inequality Comparison (False)
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); // False

//Test 4:Strict Inequality Comparison (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False

//Test 5:Less than Comparison (False)
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru'); // False (lexicographic comparison)

//Test 6:Greater than Comparison (False)
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru'); // False (lexicographic comparison)

//Test 7:Less than or Equal Comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // True

//Test 8:Greater than or Equal Comparison(True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // True

//Test 9:Checking Truthiness (True)
console.log("Is car? I predict True.");
console.log(car); //True (non-empty string is truthy)

//Test 10:Checking Falseness (False)
console.log("Is !car? I predict False.");
console.log(!car); //False (negation of a truthy value)







