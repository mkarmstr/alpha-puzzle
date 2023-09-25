import PropTypes from 'prop-types';

function Banners({ type, answer, numGuesses }) {
  return (
    <div className={`banner ${type}`}>
      {(type === 'happy') ? <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numGuesses} guess(es)</strong>.
      </p> : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
    </div>
  );
}

Banners.propTypes = {
  type: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  numGuesses: PropTypes.number.isRequired,
};

export default Banners;
