export interface PuzzleTheme {
  id: number;
  name: string;
}

export interface Puzzle {
  id: number;
  title: string;
  fen: string;
  solution: string;
  difficulty: number;
  themeId: number;
  theme: PuzzleTheme;
}
