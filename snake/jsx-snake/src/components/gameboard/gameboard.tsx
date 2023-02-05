import { useEffect, useState } from 'react';

interface Prop {
  gameBoardMap: number[];
}

export default function GameBoard({ gameBoardMap, ...props }: Prop) {
  const [gameboard, setGameBoard] = useState<number[][]>([]);
  useEffect(() => {
    console.log(gameBoardMap);
    const board: number[][] = [];
    for (let i = 0; i < gameBoardMap[0]; ++i) {
      const row = [];
      for (let j = 0; j < gameBoardMap[1]; ++j) {
        row.push(0);
      }
      board.push(row);
    }
    console.log(board);
    setGameBoard(board);
  }, []);
  function drawGameBoard() {}
  return <div>Gameboard;</div>;
}
