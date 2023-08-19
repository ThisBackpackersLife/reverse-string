function reverseString(str) {
  // Init empty string to store reversed string
  let reverse = ''
  // Iterate through characters of input string in reverse order
  for ( let i = str.length - 1; i >= 0; i-- ) {
    reverse += str[ i ]
  }
  // Return reversed string
  return reverse
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// The reverseString function is taking in a string, then initializing an empty string to hold the value of the reversed string, 
// The function continues on to iterate through each character of the input string in reverse order, then returns the reversed string.