import { useEffect, useState } from "react";
import ThemeList from "../components/themes/ThemeList";
import PuzzleList from "../components/puzzles/PuzzleList";
import { getThemes } from "../services/themeService";
import { getPuzzles } from "../services/puzzleService";
import type { PuzzleTheme, Puzzle } from "../types/puzzle";

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
    <main>
      <h1>Chess Academy</h1>

      <ThemeList themes={themes} />
      <PuzzleList puzzles={puzzles} />
    </main>
  );
}

export default HomePage;
