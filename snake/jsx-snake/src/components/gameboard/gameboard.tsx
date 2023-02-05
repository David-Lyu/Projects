import { useEffect, useState } from 'react';

interface Prop {
  gameBoardMap: number[];
}

export default function GameBoard({ gameBoardMap, ...props }: Prop) {
  const [gameboard, setGameBoard] = useState<number[][]>([]);
  useEffect(() => {
    const board: number[][] = [];
    for (let i = 0; i < gameBoardMap[0]; ++i) {
      const row = [];
      for (let j = 0; j < gameBoardMap[1]; ++j) {
        if (
          i === Math.ceil(gameBoardMap[0] / 2) &&
          j === Math.ceil(gameBoardMap[1] / 2)
        ) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      board.push(row);
    }
    setGameBoard(board);
  }, []);
  function drawGameBoard() {}
  //need to hook into HTML5 canvas ( prolly use useRef();) (Might need to initialize in html element before hand?)
  return <div>Gameboard;</div>;
}
