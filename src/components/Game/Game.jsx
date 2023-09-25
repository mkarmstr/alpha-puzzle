import { useState } from 'react';
import Guess from '../Guess/Guess';
// import PrevGuesses from '../PrevGuesses/PrevGuesses';
import GuessGrid from '../GuessGrid/GuessGrid';
import { checkGuess } from '../../game-helpers';
import Banners from '../Banners/Banners';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [numGuesses, setNumGuesses] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const isDisabled = hasWon || numGuesses === 6;

  function checkResult(result) {
    for (let char of result) {
      if (char.status === 'incorrect' || char.status === 'misplaced') {
        return;
      }
    }
    setHasWon(true);
    setNumGuesses(0);
  }

  function handleGuesses(guess) {
    const result = checkGuess(guess, answer);
    checkResult(result);
    setGuesses([...guesses, { guess, result }]);
    setNumGuesses(numGuesses + 1);
    console.log(guesses);
  }

  return (
    <>
      {/* <PrevGuesses/> */}
      {hasWon && (
        <Banners type={'happy'} answer={answer} numGuesses={numGuesses} />
      )}
      {numGuesses === 6 && !hasWon && (
        <Banners type={'sad'} answer={answer} numGuesses={numGuesses} />
      )}
      <GuessGrid guesses={guesses} />
      <Guess
        handleGuesses={handleGuesses}
        answer={answer}
        isDisabled={isDisabled}
      />
    </>
  );
}

export default Game;
