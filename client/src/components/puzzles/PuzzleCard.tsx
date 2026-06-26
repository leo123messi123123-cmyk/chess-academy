import type { Puzzle } from "../../types/puzzle";

interface PuzzleCardProps {
  puzzle: Puzzle;
}

function PuzzleCard({ puzzle }: PuzzleCardProps) {
  return (
    <article>
      <h3>{puzzle.title}</h3>

      <p>Тема: {puzzle.theme.name}</p>
      <p>Сложность: {puzzle.difficulty}</p>
      <p>Решение: {puzzle.solution}</p>
      <p>FEN: {puzzle.fen}</p>
    </article>
  );
}

export default PuzzleCard;
