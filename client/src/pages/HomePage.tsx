import { useEffect, useState } from "react";
import { getThemes } from "../services/themeService";
import { getPuzzles } from "../services/puzzleService";
import type { PuzzleTheme } from "../types/puzzle";
import type { Puzzle } from "../types/puzzle";

function HomePage() {
  const [themes, setThemes] = useState<PuzzleTheme[]>([]);
  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const themesData = await getThemes();
        const puzzlesData = await getPuzzles();

        setThemes(themesData.themes);
        setPuzzles(puzzlesData.puzzles);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  return (
    <div>
      <h1>Chess Academy</h1>

      <h2>Темы задач</h2>

      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>{theme.name}</li>
        ))}
      </ul>

      <h2>Задачи</h2>

      <ul>
        {puzzles.map((puzzle) => (
          <li key={puzzle.id}>
            <strong>{puzzle.title}</strong>
            <div>Тема: {puzzle.theme.name}</div>
            <div>Сложность: {puzzle.difficulty}</div>
            <div>Решение: {puzzle.solution}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
