//Write a function square. It takes in an integer and then prints out a square using the hash character.

/*For example, square(2) should print:

##
##
For example, square(4) should print:

####
####
####
#### 

///////
*/
function square(n) {
  //create a line string with hash characters, Initialize line as empty string
  //Use a for loop FROM 0 TO n-1, APPEND "#" to line
  //Print the line string n times
  //Use for loop to print from 0 TO n-1: PRINT LINE

  let line = "";
  for (let i = 0; i < n; i++) {
    line += "#";
  }
  //Print the line n times
  for (let i = 0; i < n; i++) {
    console.log(line); //0 & 1 means two iterations so this code is run two times
  }
}
square(2);
