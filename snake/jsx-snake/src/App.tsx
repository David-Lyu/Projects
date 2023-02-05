import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import GameBoard from './components/gameboard/gameboard';
import Start from './components/start/start';
import { StoreContext, initialState, reducer } from './shared/store';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isStarted, setIsStarted] = useState(false);
  const [gameBoardMap, setGameBoardMap] = useState<number[]>([]);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
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
      s
    </StoreContext.Provider>
  );
}

export default App;
