// Create a WeakSet
let myWeakSet = new WeakSet();

// Create an object
let obj1 = {};

// Add object to WeakSet
myWeakSet.add(obj1);

// Check if object is in WeakSet
console.log(myWeakSet.has(obj1)); // true

// Delete object from WeakSet
myWeakSet.delete(obj1);

// Check if object is in WeakSet after deletion
console.log(myWeakSet.has(obj1)); // false