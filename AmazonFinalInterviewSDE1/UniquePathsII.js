/*
  A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

  The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

  Now consider if some obstacles are added to the grids. How many unique paths would there be?

  An obstacle and space is marked as 1 and 0 respectively in the grid.

  Example 1: 
    Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
    Output: 2
    Explanation: There is one obstacle in the middle of the 3x3 grid above.
    There are two ways to reach the bottom-right corner:
    1. Right -> Right -> Down -> Down
    2. Down -> Down -> Right -> Right
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  return dfs(obstacleGrid, 0, 0);
};

var dfs = (grid, row, col) => {
  if (row >= grid.length || col >= grid.length || grid[row][col] === 1)
    return 0;
  if (row === grid.length - 1 && col === grid[row].length - 1) {
    return 1;
  }
  return dfs(grid, row + 1, col) + dfs(grid, row, col + 1);
};

function main() {
  let matrix = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  console.log(uniquePathsWithObstacles(matrix));
}

main();
