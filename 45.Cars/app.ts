type Car={
  manufacturer:string;
  modelName:string;
  [key:string]:any; //Allow my additional properties
}

function carInfo(manufacturer: string,modelName: string,options: Partial<Car>): Car {
  return{
    manufacturer:manufacturer,
    modelName:modelName,
    ...options
  };
}

//Call the function with required information and additional name-value pairs
let car =carInfo('Toyota','5858',{color:'blue',year:2022})

//Print the returned object
console.log(car);