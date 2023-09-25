import { useState } from 'react';
import Guess from '../Guess/Guess';
import PrevGuesses from '../PrevGuesses/PrevGuesses';
import GuessGrid from '../GuessGrid/GuessGrid';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleGuesses(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <PrevGuesses guesses={guesses}/>
      <GuessGrid guesses={guesses}/>
      <Guess handleGuesses={handleGuesses}/>
    </>
  );
}

export default Game;
