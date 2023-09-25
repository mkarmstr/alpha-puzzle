import PropTypes from 'prop-types';

function PrevGuesses({ guesses }) {
  return (
    <div className="guess-results">
     {guesses.map((guess)=>{return <p key={Math.random()}>{guess}</p>})}
    </div>
  )
}

PrevGuesses.propTypes = {
  guesses: PropTypes.array.isRequired,
};

export default PrevGuesses;

