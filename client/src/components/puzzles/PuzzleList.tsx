import type { Puzzle } from "../../types/puzzle";
import PuzzleCard from "./PuzzleCard";
import "./PuzzleList.css";

interface PuzzleListProps {
  puzzles: Puzzle[];
}

function PuzzleList({ puzzles }: PuzzleListProps) {
  return (
    <section className="puzzle-list">
      <h2>Задачи</h2>

      {puzzles.length === 0 ? (
        <p>Задач пока нет</p>
      ) : (
        <div className="puzzle-list__grid">
          {puzzles.map((puzzle) => (
            <PuzzleCard key={puzzle.id} puzzle={puzzle} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PuzzleList;
