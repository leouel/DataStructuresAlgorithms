/**
 * You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally and/or vertically adjacent. The number of adjacent 1s forming a river determine its size.
 *
 * Note that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.
 *
 * Write a function that returns an array of river sizes.
 *
 * Example 1:
 * Input:
 * [
 * [0, 0, 0, 1, 1, 0, 0],
 * [0, 1, 0, 0, 1, 1, 0],
 * [1, 1, 0, 1, 0, 0, 1],
 * [0, 0, 0, 0, 0, 1, 0],
 * [1, 1, 0, 0, 0, 0, 0],
 * [0, 0, 0, 1, 0, 0, 0],
 * ]
 * Output: [4, 3, 1, 1, 1, 2, 1]
 *
 * Example 2:
 * Input:
 * [
 * [1, 0, 0, 1, 1, 0, 0],
 * [0, 1, 0, 0, 0, 1, 0],
 * [0, 0, 1, 0, 0, 0, 1],
 * [0, 0, 0, 1, 0, 0, 0],
 * [1, 1, 0, 0, 1, 0, 0],
 * [1, 0, 0, 0, 0, 1, 0],
 * ]
 * Output: [1, 2, 1, 1, 1, 1, 1, 3, 1, 1]
 */

function getBiggestRiver(matrix) {
  let riverSizes = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === 1) {
        const size = getRiverSize(matrix, row, column);
        riverSizes.push(size);
      }
    }
  }
  return riverSizes;
}

function getRiverSize(matrix, row, column) {
  if (
    row < 0 ||
    row >= matrix.length ||
    column < 0 ||
    column >= matrix[row].length
  )
    return 0;
  if (matrix[row][column] === 0) return 0;
  matrix[row][column] = 0;
  let size = 1;
  for (let r = row - 1; r <= row + 1; r++) {
    if (r !== row) {
      let c = column;
      size += getRiverSize(matrix, r, c);
    } else {
      for (let c = column - 1; c <= column + 1; c++) {
        if (c !== column) {
          size += getRiverSize(matrix, r, c);
        }
      }
    }
  }
  return size;
}

function main() {
  let matrix = [
    [0, 0, 0, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0],
    [1, 1, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
  ];
  // let matrix = [
  //   [1, 0, 0, 0, 0, 0, 0],
  //   [0, 1, 0, 0, 0, 0, 0],
  //   [1, 0, 1, 0, 1, 1, 1],
  //   [1, 0, 0, 1, 0, 0, 0],
  //   [1, 0, 0, 0, 1, 0, 0],
  //   [1, 0, 0, 0, 0, 1, 0],
  // ];
  // let matrix = [
  //   [1, 0, 0, 1, 1, 0, 0],
  //   [0, 1, 0, 0, 0, 1, 0],
  //   [0, 0, 1, 0, 0, 0, 1],
  //   [0, 0, 0, 1, 0, 0, 0],
  //   [1, 1, 0, 0, 1, 0, 0],
  //   [1, 0, 0, 0, 0, 1, 0],
  // ];
  console.log(getBiggestRiver(matrix));
}

main();
