function describe_city(city:string,country:string ='unknown'):void {
    console.log(`${city} is in ${country}.`);
}

//Calling the function for three different cities
describe_city('Karachi','Pakistan');
describe_city('New York','USA');
describe_city('Paris');