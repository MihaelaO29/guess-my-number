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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setRandomNumber(generateNewRandomNumber());
  }, []);

  const handleNumber = (event: any) => {
    const value = +event.target.value;
    if (value >= 1 && value <= 20) {
      setGameNumber(value);
      setError(null);
    } else {
      setError('Please enter a number between 1 and 20');
    }
  }

  const generateNewRandomNumber = () => {
    return Math.floor(Math.random() * 19) + 1;
  }

  const checkNumber = () => {
    if (gameNumber < 1 || gameNumber > 20) {
      setError('Please enter a number between 1 and 20');
    } else {
      if (gameNumber === 0) {
        setError('Please enter a number between 1 and 20');
      } else {
        if (gameNumber > randomNumber) {
          setStart('Too High');
          setScore(score - 1);
        } else if (gameNumber < randomNumber) {
          setStart('Too Low');
          setScore(score - 1);
        } else {
          setHighscore(score);
          setStart('Perfect');
          setWinner('Winner');
          document.body.style.backgroundColor = '#FF0000';
        }
        setGameNumber(0)
      }
    }
  }

  const reset = () => {
    setRandomNumber(generateNewRandomNumber());
    setScore(20);
    document.body.style.backgroundColor = 'rgb(36, 33, 33)';
    setGameNumber(0);
    setStart('Guess My Number!');
    setWinner('Guess My Number!');
    setError(null);
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

            {error && <div className='error'>{error}</div>}
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
