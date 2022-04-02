//should contain everything
// this is where the gameboard will be initiated.
//should contain methods such start, end. restart
// should attach to the div .board-game
export default class GameBoard {
  constructor(row = 7, column = 6) {
    this.row = row;
    this.column = column;
    this.board = [];
  }

  start() {
    //creates the board here
    for (let index = 0; index < this.row; ++index) {
      this.board.push(new Array(this.column));
    }
    //cannot change this array size of the rows
    Object.freeze(this.board);
    this.board[1][3] = 5;
    console.log(this.board);

    //needs to draw the board
    const gameBoard = document.getElementById('board-game');
    console.log(gameBoard);
  }
}
