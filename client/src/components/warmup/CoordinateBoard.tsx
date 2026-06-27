import "./CoordinateBoard.css";

interface CoordinateBoardProps {
  targetSquare: string;
  onCorrect: () => void;
  onWrong: () => void;
}

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

function CoordinateBoard({
  targetSquare,
  onCorrect,
  onWrong,
}: CoordinateBoardProps) {
  function handleSquareClick(square: string) {
    if (square === targetSquare) {
      onCorrect();
    } else {
      onWrong();
    }
  }

  return (
    <div className="coordinate-board">
      {ranks.map((rank) =>
        files.map((file) => {
          const square = `${file}${rank}`;
          const isLight = (files.indexOf(file) + rank) % 2 === 0;

          return (
            <button
              key={square}
              className={`coordinate-board__square ${
                isLight
                  ? "coordinate-board__square--light"
                  : "coordinate-board__square--dark"
              }`}
              onClick={() => handleSquareClick(square)}
            >
              {square}
            </button>
          );
        }),
      )}
    </div>
  );
}

export default CoordinateBoard;
