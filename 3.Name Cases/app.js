// lower case
var personName = "Mizna";
console.log("lowercase:", personName.toLowerCase());
// Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());
// Title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
