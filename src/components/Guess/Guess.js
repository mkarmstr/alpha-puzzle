import { useState } from 'react';

import PropTypes from 'prop-types';

function Guess({ handleGuesses, gameOver }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    handleGuesses(guess);
    setGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess: </label>
      <input
        type="text"
        id="guess-input"
        pattern="[A-Z]{5}"
        value={guess}
        disabled={gameOver}
        onChange={(event) => {
          const newGuess = event.target.value.toUpperCase();
          if (newGuess.length <= 5) {
            setGuess(newGuess);
          }
        }}
      />
    </form>
  );
}


Guess.propTypes = {
  handleGuesses: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired
};

export default Guess;

