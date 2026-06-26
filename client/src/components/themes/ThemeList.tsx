import type { PuzzleTheme } from "../../types/puzzle";

interface ThemeListProps {
  themes: PuzzleTheme[];
}

function ThemeList({ themes }: ThemeListProps) {
  return (
    <section>
      <h2>Темы задач</h2>

      {themes.length === 0 ? (
        <p>Тем пока нет</p>
      ) : (
        <ul>
          {themes.map((theme) => (
            <li key={theme.id}>{theme.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ThemeList;
