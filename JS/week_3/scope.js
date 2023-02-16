let globalVariable = 'I am a global variable';

function myFunction() {
  let localVariable = 'I am a local variable';
  console.log(globalVariable); // logs "I am a global variable"
  console.log(localVariable); // logs "I am a local variable"
}

console.log(globalVariable); // logs "I am a global variable"
console.log(localVariable); // ReferenceError: localVariable is not defined