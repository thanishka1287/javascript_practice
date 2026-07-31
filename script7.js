// Reverse a string without using reverse()

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Test Cases
console.log(reverseString("hello"));       // olleh
console.log(reverseString("JavaScript"));  // tpircSavaJ
console.log(reverseString("12345"));       // 54321
console.log(reverseString(""));            // ""