const API_URL = "http://localhost:3000/api";

export async function getThemes() {
  const response = await fetch(`${API_URL}/puzzle-themes`);

  if (!response.ok) {
    throw new Error("Ошибка получения тем");
  }

  return response.json();
}
