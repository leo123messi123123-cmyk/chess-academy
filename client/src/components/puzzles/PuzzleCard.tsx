import type { Puzzle } from "../../types/puzzle";
import Button from "../common/Button/Button";
import Card from "../common/Card/Card";
import ChessBoard from "./ChessBoard";
import "./PuzzleCard.css";

interface PuzzleCardProps {
  puzzle: Puzzle;
}

function PuzzleCard({ puzzle }: PuzzleCardProps) {
  return (
    <Card>
      <article className="puzzle-card">
        <h3 className="puzzle-card__title">{puzzle.title}</h3>

        <div className="puzzle-card__board">
          <ChessBoard fen={puzzle.fen} />
        </div>

        <div className="puzzle-card__info">
          <span>Тема: {puzzle.theme.name}</span>
          <span>Сложность: {puzzle.difficulty}</span>
        </div>

        <Button>Решить</Button>
      </article>
    </Card>
  );
}

export default PuzzleCard;
