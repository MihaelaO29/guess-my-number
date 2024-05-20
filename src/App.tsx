import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [gameNumber, setGameNumber] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [start, setStart] = useState('Start guessing');
  const [winner, setWinner] = useState('Guess My Number!');

  useEffect(() => {
    setRandomNumber(generateNewRandomNumber());
  }, []);

  const handleNumber = (event: any) => {
    setGameNumber(+event.target.value);
  }

  const generateNewRandomNumber = () => {
    return Math.floor(Math.random() * 19) + 1;
  }

  const checkNumber = () => {
    if (+gameNumber > +randomNumber) {
      setStart('Too Heigh');
      setScore(score - 1);
    } else if (+gameNumber < +randomNumber) {
      setStart('Too Low');
      setScore(score - 1);
    } else if (+gameNumber === +randomNumber) {
      setHighscore(score);
      setStart('Perfect');
      setWinner('Winner');
      document.body.style.backgroundColor = '#FF0000';
    }
  }

  const reset = () => {
    setRandomNumber(generateNewRandomNumber());
    setScore(20);
    document.body.style.backgroundColor = 'rgb(36, 33, 33)';
  }

  const handleFocus = () => {
    setGameNumber(0);
  }

  return (
    <>
      <div className='game'>
        <div className='tab'>
          <button onClick={reset} className='btn'>Again!</button>
          <div className='info_game'>(Between 1 and 20)</div>
        </div>
        <div className='details'>
          <div className='titleGame'>{winner}</div>
          <div className='bar'>
            <div className='questionMark'>
              {gameNumber === randomNumber ? randomNumber : '?'}
              </div>
          </div>
        </div>
        <div className='checkNumberTab'>
          <div className='checkNumber'>
            {/* @ts-ignore */}
            <div className='write_number'>
              <input type='number' value={gameNumber || ''} onClick={handleFocus}
               onChange={handleNumber}></input>
            </div>
            <div className='checkBtn'>
              <button onClick={checkNumber} className='btn'>Check!</button>
            </div>
          </div>
          <div className='infoScore'>
            <p>
              {start}
            </p>
            <p>Score: {score} </p>
            <p>Highscore: {highscore} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
