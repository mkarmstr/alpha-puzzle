import { useState } from 'react';
import Guess from '../Guess/Guess';
import GuessGrid from '../GuessGrid/GuessGrid';
import { checkGuess } from '../../game-helpers';
import Banners from '../Banners/Banners';
import { sample } from '../../utils';
import { WORDS } from '../../data';

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function checkResult(result) {
    for (let char of result) {
      if (char.status === 'incorrect' || char.status === 'misplaced') {
        return;
      }
    }
    setGameOver(true);
    console.log('congrats');
  }

  function handleGuesses(guess) {
    const result = checkGuess(guess, answer);
    checkResult(result);
    setGuesses([...guesses, { guess, result }]);
    const newNum = numGuesses + 1;
    setNumGuesses(newNum);
    if (newNum === 6) setGameOver(true);
  }

  return (
    <>
      {gameOver ? (
        numGuesses === 6 ? (
          <Banners type={'sad'} answer={answer} numGuesses={numGuesses} />
        ) : (
          <Banners type={'happy'} answer={answer} numGuesses={numGuesses} />
        )
      ) : null}
      <GuessGrid guesses={guesses} />
      <Guess
        handleGuesses={handleGuesses}
        answer={answer}
        gameOver={gameOver}
      />
    </>
  );
}

export default Game;
