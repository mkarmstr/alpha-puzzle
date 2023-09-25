import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessGrid({ guesses }) {
  return (
    <div className="guess-results">
      {/* each row is a guess */}
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        (guesses[row]) ? 
        <p className="guess" key={row}>
          {/* if the guesses array has a guess at that index */}
          {range(5).map((col) => (
            <span
              className="cell"
              key={col}
            >{guesses[row][col]}</span>
          ))}
        </p> : <p className="guess" key={row}>
          {/* if the guesses array has a guess at that index */}
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

export default GuessGrid;
