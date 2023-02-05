import { useState } from 'react';

interface Props {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setGameBoardMap: React.Dispatch<React.SetStateAction<number[]>>;
}
export default function Start({ setIsStarted, setGameBoardMap }: Props) {
  //don't need could just use top level state to hold onto this
  const [rowNum, setRowNum] = useState(9);
  const [colNum, setColNum] = useState(9);

  function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setGameBoardMap([rowNum, colNum]);
    setIsStarted(true);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e);
    switch (e.target.id) {
      case 'game-row':
        setRowNum(parseInt(e.target.value));
        break;
      case 'game-col':
        setColNum(parseInt(e.target.value));
        break;
      default:
        console.error('wrong input changed?');
        break;
    }
  }

  return (
    <form className="start-menu row" onSubmit={handleOnSubmit}>
      <label className="col-12" htmlFor="game-row">
        Please enter rows between 4-9
      </label>
      <input
        type="number"
        id="game-row"
        name="game-row"
        min={4}
        max={9}
        value={rowNum}
        required={true}
        className="col-12"
        onChange={onChange}
      />
      <label className="col-12" htmlFor="game-col">
        Please enter columns between 4-9
      </label>
      <input
        type="number"
        id="game-col"
        name="game-row"
        min={4}
        max={9}
        value={colNum}
        required={true}
        className="col-12"
        onChange={onChange}
      />

      <input type="submit" value="Start game" />
    </form>
  );
}
