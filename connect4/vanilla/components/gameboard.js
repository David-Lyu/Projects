//should contain everything
// this is where the gameboard will be initiated.
//should contain methods such start, end. restart
// should attach to the div .board-game
export default class GameBoard {
  constructor(row = 7, column = 6) {
    this.row = row;
    this.column = column;
    this.board = null;
    this.round = 0;
  }

  start() {
    //creates the board here
    this.board = [];
    for (let index = 0; index < this.row; ++index) {
      this.board.push(new Array(this.column));
    }
    //cannot change this array size of the rows
    Object.freeze(this.board);
    this.board[1][3] = 5;

    //needs to draw the board
  }

  drawBoard() {
    const boardGame = document.getElementById('board-game');
    const gameBoard = document.createElement('div');
    boardGame.appendChild(gameBoard);
    for (let i = 0; i < this.row; ++i) {
      const row = document.createElement('div');
      row.id = 'row ' + i;
      row.classList.add('row');
      //this allows it to have
      row.onclick = (e) => {
        console.log('clicked' + e.currentTarget.id);
      };
      gameBoard.appendChild(row);
      for (let j = 0; j < this.column; ++j) {
        const col = document.createElement('div');
        col.id = 'col ' + j;
        col.classList.add('col');
        row.appendChild(col);
      }
    }
  }

  resetGame() {
    return false;
  }
}
