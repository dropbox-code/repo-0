// Initialize an array with elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// Access elements within the array
console.log(fruits[0]); // Output: "Banana"
console.log(fruits[1]); // Output: "Orange"

// Get the length of the array
console.log(fruits.length); // Output: 4

// Loop through the array using a for loop
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// Banana
// Orange
// Apple
// Mango

// Loop through the array using forEach()
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// Banana
// Orange
// Apple
// Mango

// Check if an element exists in the array
console.log(fruits.includes("Banana")); // Output: true
