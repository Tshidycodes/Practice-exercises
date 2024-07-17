function diagonalDifference(arr) {
  let leftToRightDiagonal = 0;
  let RightToLeftDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    leftToRightDiagonal += arr[i][i];
    RightToLeftDiagonal += arr[i][arr.length - i - 1];
  }
  let result = Math.abs(leftToRightDiagonal - RightToLeftDiagonal);
  return result;
}
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
