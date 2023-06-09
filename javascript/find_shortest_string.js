function findShortestString(arr) {
  // type your code here
  // console.log('arr', arr);

  const arrLength = arr.length;
  // console.log('arrLength', arrLength);

  let shortestStr = arr[0];
  let shortestIndex = arr[0].length;
  for(i = 0; i < arr.length; i++) {
  //   // console.log('string', arr[i]);
  //   // console.log('string length', arr[i].length);
    if(arr[i].length < shortestIndex) {
      shortestStr = arr[i];
      shortestIndex = arr[i].length;
    }
  }

  // console.log('Final shortestStr', shortestStr);
  // console.log('Final shortestIndex', shortestIndex);

  // ALTERNATE SOLUTION:
  // arr.forEach(element => shortestStr = (element.length < shortestStr.length ? element : shortestStr))
  // ---------------------------------------

  return shortestStr;
}

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
// And a written explanation of your solution

// Loop through each string within array
// Set a variable for the shortest string
// Set a variable for the index of shortest string
// Return the shortest string