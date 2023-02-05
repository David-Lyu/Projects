import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import GameBoard from './components/gameboard/gameboard';
import Start from './components/start/start';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [gameBoardMap, setGameBoardMap] = useState<number[]>([]);

  return (
    <div className="container">
      {!isStarted ? (
        <div className="row">
          <Start
            setIsStarted={setIsStarted}
            setGameBoardMap={setGameBoardMap}
          />
        </div>
      ) : (
        <div className="row">
          <GameBoard gameBoardMap={gameBoardMap} />
        </div>
      )}
    </div>
  );
}

export default App;
