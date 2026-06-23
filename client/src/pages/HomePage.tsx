import { useEffect, useState } from "react";
import { getThemes } from "../services/themeService";

function HomePage() {
  const [themes, setThemes] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    async function loadThemes() {
      try {
        const data = await getThemes();
        setThemes(data.themes);
      } catch (error) {
        console.error(error);
      }
    }

    loadThemes();
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
    </div>
  );
}

export default HomePage;
