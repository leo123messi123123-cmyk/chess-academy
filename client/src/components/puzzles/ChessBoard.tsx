import { Chessboard } from "react-chessboard";

interface ChessBoardProps {
  fen: string;
}

function ChessBoard({ fen }: ChessBoardProps) {
  const chessboardOptions = {
    position: fen,
    allowDragging: false,
  };

  return (
    <div style={{ width: "100%", maxWidth: "280px", margin: "0 auto" }}>
      <Chessboard options={chessboardOptions} />
    </div>
  );
}

export default ChessBoard;
