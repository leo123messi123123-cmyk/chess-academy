import type { Puzzle } from "../../types/puzzle";
import PuzzleCard from "./PuzzleCard";

interface PuzzleListProps {
  puzzles: Puzzle[];
}

function PuzzleList({ puzzles }: PuzzleListProps) {
  return (
    <section>
      <h2>Задачи</h2>

      {puzzles.length === 0 ? (
        <p>Задач пока нет</p>
      ) : (
        <div>
          {puzzles.map((puzzle) => (
            <PuzzleCard key={puzzle.id} puzzle={puzzle} />
          ))}
        </div>
      )}
    </section>
  );
}

export default PuzzleList;
