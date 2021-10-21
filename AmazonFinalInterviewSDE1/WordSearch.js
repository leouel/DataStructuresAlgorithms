/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
], 
word = "ABCCED"
Output: true

Example 2:
Input: board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
],
word = "SEE"
Output: true

Example 3:
Input: board = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
],
word = "ABCB"
Output: false

Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// O(w*h) Time | O(w*h) Space
function wordSearch(board, word) {
  let pos = 0;
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (
        board[row][column] === word[pos] &&
        depthFirstSearch(board, row, column, 0, word)
      ) {
        return true;
      }
    }
  }
  return false;
}

function depthFirstSearch(board, row, column, pos, word) {
  if (pos === word.length) {
    return true;
  }
  if (
    row < 0 ||
    row >= board.length ||
    column < 0 ||
    column >= board[row].length ||
    board[row][column] !== word[pos]
  ) {
    return false;
  }
  const temp = board[row][column];
  board[row][column] = " ";
  let found =
    depthFirstSearch(board, row + 1, column, pos + 1, word) ||
    depthFirstSearch(board, row - 1, column, pos + 1, word) ||
    depthFirstSearch(board, row, column + 1, pos + 1, word) ||
    depthFirstSearch(board, row, column - 1, pos + 1, word);
  board[row][column] = temp;
  return found;
}

function main() {
  let board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ];
  let word = "ABCCED";
  console.log(wordSearch(board, word));
}

main();
