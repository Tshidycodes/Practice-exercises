/*Multi-dimensional array that stores a matrix of data in rows and columns
usefull for games, spreadsheets or representing images
[[X,O,X]
[O,X,X]     //BASICALLY , rows are stored in an array
[X,X,O]]
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//To access row 1
matrix[0][0] = "X";
matrix[0][1] = "O";
matrix[0][2] = "X";

//To access row 2
matrix[1][0] = "0";
matrix[1][1] = "X";
matrix[1][2] = "0";

//To access row 3
matrix[2][0] = "X";
matrix[2][1] = "O";
matrix[2][2] = "X";
for (let row of matrix) {
  console.log(row);
}
//if you want to access individial elements within a 2D array you need to use 2 indices
