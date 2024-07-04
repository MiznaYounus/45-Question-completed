function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
//Calling the function with three city-country paris
var city1 = city_country('Lahore', 'Pakistan');
var city2 = city_country('New York', 'USA');
var city3 = city_country('Paris', 'France');
//Printing the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);
