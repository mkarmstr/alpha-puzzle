import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessGrid() {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p className="guess" key={row}>
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
