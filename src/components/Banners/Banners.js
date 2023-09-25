import PropTypes from 'prop-types';

function Banners({ type, answer, numGuesses, resetGame }) {
  return (
    <div className={`banner ${type}`}>
      {(type === 'happy') ? <span>
        <strong>Congratulations!</strong> Got it in
        {numGuesses} guess(es).
      </span> : <span>Sorry, the correct answer is <strong>{answer}</strong>.</span>}{'  '}
      <span><button onClick={resetGame}><strong>RESTART</strong></button></span>
    </div>
  );
}

Banners.propTypes = {
  type: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  numGuesses: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default Banners;
