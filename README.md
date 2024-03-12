# Combining-Objects
![image](https://github.com/gitbiruk2010/Combining-Objects/assets/103274295/5cee772b-88a1-474a-8e7d-197e64c094ca)

## Overview
This guide provides an example of how to combine two JavaScript objects into one, with a focus on how overlapping properties are handled using spread syntax.

## Initial Objects
There are two initial objects, each with unique properties:

javascript
const object1 = { i: 1, j: 2 };
const object2 = { j: 3, c: 4 };
Here, object1 contains properties i and j, while object2 includes properties j and c.
Merging Objects

To merge these objects, I will use the spread syntax as follows:
const combinedObject = { ...object1, ...object2 };
The spread syntax (...) unfolds the properties of both objects into combinedObject. If there are overlapping properties, such as j in both objects, object2's 
property takes precedence due to its position in the merge.

Result Verification

To see the result of this combination:

javascript

console.log(combinedObject);

This line, when run, will output the combinedObject showing that it contains properties from both object1 and object2. For the property j, 
the value from object2 (which is 3) overrides the value from object1. The final output will be: { i: 1, j: 3, c: 4 }, which demonstrates the successful 
combination of the two objects into one with the desired property values.
