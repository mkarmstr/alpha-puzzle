import { useState } from 'react';
import Guess from '../Guess/Guess';
import GuessGrid from '../GuessGrid/GuessGrid';
import { checkGuess } from '../../game-helpers';
import Banners from '../Banners/Banners';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [answer, setAnswer] = useState(() => {
    const newAnswer = sample(WORDS);
    console.log(newAnswer);
    return newAnswer;
  });

  function resetGame() {
    setGuesses([]);
    setNumGuesses(0);
    setGameOver(false);
    const newAnswer = sample(WORDS);
    console.log(newAnswer);
    setAnswer(newAnswer);
  }

  function checkResult(result) {
    for (let char of result) {
      if (char.status === 'incorrect' || char.status === 'misplaced') {
        return;
      }
    }
    setGameOver(true);
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
          <Banners type={'sad'} answer={answer} numGuesses={numGuesses} resetGame={resetGame} />
        ) : (
          <Banners type={'happy'} answer={answer} numGuesses={numGuesses} resetGame={resetGame} />
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
