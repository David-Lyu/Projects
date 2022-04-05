import GameBoard from './components/gameboard.js';

const startModal = document.getElementById('start-modal');
const startForm = document.getElementById('start-form');
let keepPlaying = true;
const testing = true;

while (keepPlaying) {
  //for testing
  if (testing) {
    const data = new FormData(startForm).entries();
    let row = Number.parseInt(data.next().value[1]);
    let col = Number.parseFloat(data.next().value[1]);
    const connectFour = new GameBoard(row, col);
    connectFour.start();
    connectFour.drawBoard();
  }

  !testing && startModal.showModal();

  startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(event.target).entries();
    let row = Number.parseInt(data.next().value[1]);
    let col = Number.parseFloat(data.next().value[1]);
    if (col > 10 || row > 10) {
      //activate error modal to tell under 10
      return;
    }
    startModal.close();

    const connectFour = new GameBoard(row, col);
    connectFour.start();
    connectFour.drawBoard();
    //used to keep playing and leave this for memory leaks

    keepPlaying = connectFour.resetGame();
  });
  keepPlaying = false;
}
console.log('game ended');
