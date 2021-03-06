/*
Design a Tic-tac-toe game that is played between two players on anxngrid.

You may assume the following rules:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves is allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
Example:

Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

TicTacToe toe = new TicTacToe(3);

toe.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

toe.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

toe.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

toe.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

toe.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

toe.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
Follow up:
Could you do better than O(n2) permove()operation?
*/

/*
Initialize your data structure here.
@param {number} n
*/
class TicTacToe {
  constructor(n) {
    this.row = new Array(n).fill(0);
    this.col = new Array(n).fill(0);
    this.diagLeft = 0;
    this.diagRight = 0;
  }

  // class TicTacToe {
  //   constructor(n) {
  //     this.count = {
  //       row: new Array(n).fill(0).map((_) => [0, 0]),
  //       col: new Array(n).fill(0).map((_) => [0, 0]),
  //       diagonal: [
  //         [0, 0],
  //         [0, 0],
  //       ],
  //     };
  //     this.target = n;
  //   }

  /*
Player {player} makes a move at ({row}, {col})
    @param row The row of the board.
    @param col The column of the board.
    @param player The player, can be either 1 or 2.
    @return The current winning condition, can be either:
        0: No one wins.     
        1: Player 1 wins.
        2: Player 2 wins.
@param {number} row
@param {number} col
@param {number} player
@return {number}
*/

  move(row, col, player) {
    const size = this.row.length;
    let move = player === 1 ? 1 : -1;
    this.row[row] += move;
    this.col[col] += move;
    if (row === col) this.diagLeft += move;
    if (row === size - col - 1) this.diagRight += move;
    if (
      Math.abs(this.row[row]) === size ||
      Math.abs(this.col[col]) === size ||
      Math.abs(this.diagLeft) === size ||
      Math.abs(this.diagRight) === size
    ) {
      return player;
    }

    return 0;
  }

  // move(row, col, player) {
  //   const rowCount = this.count.row[row];
  //   rowCount[player - 1] += 1;
  //   if (rowCount[player - 1] === this.target) return player;

  //   const colCount = this.count.col[col];
  //   colCount[player - 1] += 1;
  //   if (colCount[player - 1] === this.target) return player;
  //   // console.log(this.count.col);

  //   if (row === col) {
  //     const diagonal = this.count.diagonal[0];
  //     diagonal[player - 1] += 1;
  //     if (diagonal[player - 1] === this.target) return player;
  //   }

  //   if (row + col === this.target - 1) {
  //     const diagonal = this.count.diagonal[1];
  //     diagonal[player - 1] += 1;
  //     if (diagonal[player - 1] === this.target) return player;
  //   }

  //   return 0;
  // }
}
/*
Your TicTacToe object will be instantiated and called as such:
var obj = new TicTacToe(n)
var param_1 = obj.move(row, col, player)
*/

function main() {
  let toe = new TicTacToe(3);
  // toe.move(0, 0, 1);
  // toe.move(0, 1, 2);
  // toe.move(1, 0, 1);
  // toe.move(1, 1, 2);
  // toe.move(2, 0, 1);
  toe.move(0, 0, 1); //-> Returns 0 (no one wins)
  /*
  |X| | |
  | | | |    // Player 1 makes a move at (0, 0).
  | | | |
  */

  toe.move(0, 2, 2); //-> Returns 0 (no one wins)
  /*
  |X| |O|
  | | | |    // Player 2 makes a move at (0, 2).
  | | | |
  */

  toe.move(2, 2, 1); //-> Returns 0 (no one wins)
  /*
  |X| |O|
  | | | |    // Player 1 makes a move at (2, 2).
  | | |X|
  */

  toe.move(1, 1, 2); //-> Returns 0 (no one wins)
  /*
  |X| |O|
  | |O| |    // Player 2 makes a move at (1, 1).
  | | |X|
  */

  toe.move(2, 0, 1); //-> Returns 0 (no one wins)
  /*
  |X| |O|
  | |O| |    // Player 1 makes a move at (2, 0).
  |X| |X|
  */

  console.log(toe.move(1, 0, 2)); //-> Returns 0 (no one wins)
  /*
  |X| |O|
  |O|O| |    // Player 2 makes a move at (1, 0).
  |X| |X|
  */

  console.log(toe.move(2, 1, 1)); //-> Returns 1 (player 1 wins)
  /*
  |X| |O|
  |O|O| |    // Player 1 makes a move at (2, 1).
  |X|X|X|
  */
}

main();
