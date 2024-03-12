// I've got two objects here, each with its own set of properties.
const object1 = { i: 1, j: 2 };
const object2 = { j: 3, c: 4 };

/* Let's blend them together. If they have overlapping properties, 
the ones from object2 will take precedence.*/
const combinedObject = { ...object1, ...object2 };

/* I'll print out the result to see how my properties combined.
This will show me the merged object with object2's properties 
overwriting any conflicts from object1.*/
console.log(combinedObject);
