/*
Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.
*/

function destroyer(arr, ...args) {
  return arr.filter((item) => !args.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//manual answer
function destroy() {
  let result = [];
  let arr = arguments[0];

  for (let i = 0; i < arr.length; i++) {
    let shouldKeep = true; //flag to check if element should be kept

    for (let j = 1; j < arguments.length; j++) {
      if (arr[i] === arguments[j]) {
        shouldKeep = false;
        break; //if a match is found, no need to keep checking
      }
    }
    if (shouldKeep) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(destroy([1, 2, 3, 1, 2, 3], 2, 3));
