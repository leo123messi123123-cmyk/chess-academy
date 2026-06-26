const API_URL = "http://localhost:3000/api";

export async function getPuzzles() {
  const response = await fetch(`${API_URL}/puzzles`);

  if (!response.ok) {
    throw new Error("Ошибка получения задач");
  }

  return response.json();
}
