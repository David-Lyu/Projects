import GameBoard from './components/gameboard.js';

const startModal = document.getElementById('start-modal');
startModal.showModal();
const connectFour = new GameBoard();
connectFour.start();
