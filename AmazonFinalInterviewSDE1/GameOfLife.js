/*
According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

    - Any live cell with fewer than two live neighbors dies as if caused by under-population.
    - Any live cell with two or three live neighbors lives on to the next generation.
    - Any live cell with more than three live neighbors dies, as if by over-population.
    - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

Example 1:
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Example 2:
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// O(nm) Time | O(nm) Space
function gameOfLife(board) {
  let nextGeneration = new Array(board.length)
    .fill(0)
    .map(() => new Array(board[0].length).fill(0));
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      const liveNeighbors = lookAtNeighbors(board, row, column);
      if (board[row][column] === 1) {
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          nextGeneration[row][column] = 1;
        }
      } else {
        if (liveNeighbors === 3) {
          nextGeneration[row][column] = 1;
        }
      }
    }
  }
  for (let row = 0; row < nextGeneration.length; row++) {
    for (let column = 0; column < nextGeneration[row].length; column++) {
      board[row][column] = nextGeneration[row][column];
    }
  }
  return board;
}

function lookAtNeighbors(board, row, column) {
  let liveNeighbors = 0;
  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = column - 1; c <= column + 1; c++) {
      if (
        r < 0 ||
        r >= board.length ||
        c < 0 ||
        c >= board[row].length ||
        (r === row && c === column)
      ) {
        continue;
      }
      if (board[r][c] === 1) {
        liveNeighbors++;
      }
    }
  }
  return liveNeighbors;
}

function main() {
  let board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ];
  console.log(gameOfLife(board));
}

main();
