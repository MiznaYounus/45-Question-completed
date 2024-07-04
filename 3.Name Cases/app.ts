// lower case
let personName: string ="Mizna"
console.log("lowercase:", personName.toLowerCase());

// Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());

// Title case
console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));
