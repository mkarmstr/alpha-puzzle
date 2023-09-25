import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import PropTypes from 'prop-types';

function GuessGrid({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        (guesses[row]) ?
          <p className="guess" key={row}>
            {range(5).map((col) => (
              <span
                className={`cell ${guesses[row]['result'][col]['status']}`}
                key={col}
              >{guesses[row]['guess'][col]}</span>
            ))}
          </p> : <p className="guess" key={row}>
            {range(5).map((col) => (
              <span
                className="cell"
                key={col}
              ></span>
            ))}
          </p>
      ))}
    </div>
  );
}

GuessGrid.propTypes = {
  guesses: PropTypes.array.isRequired,
};

export default GuessGrid;