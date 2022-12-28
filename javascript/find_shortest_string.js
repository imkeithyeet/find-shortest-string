function findShortestString(arr) {
  // type your code here
 let shortLength = Infinity;
 let shortest = "";
 if (arr.length > 0){
  for (let i =0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length < shortLength){
      shortest = arr[i];
      shortLength = arr[i].length;
    }
 }
}
 return shortest;
}
  // short and non-iterate way
// return arr.sort((a,b)=>a.length - b.length)[0];

function findLongestString(arr) {}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// Declare shortLength as an infinity value  and make shortest variable as an empty string
// Use a for loop to check if the array is not empty and greater than zero. 
// Then checks if the string is shorter than ShortLength. If both are true, then assigns shortest variable to shortLength.Declare
// Then function returns the value of the shortest variable. If the array was empty or did not contain any Strings,the function will return the empty 
// string.
// And a written explanation of your solution


