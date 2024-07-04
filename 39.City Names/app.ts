function city_country(city: string,country: string): string{
    return `${city},${country}`;
}

//Calling the function with three city-country paris
let city1:string =city_country('Lahore','Pakistan');
let city2:string =city_country('New York','USA');
let city3:string =city_country('Paris','France');

//Printing the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);