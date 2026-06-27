import { useState } from "react";
import Button from "../common/Button/Button";
import CoordinateBoard from "./CoordinateBoard";

const squares = ["e4", "c6", "h1", "a8", "f7"];

function CoordinateExercise() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState("Найди указанное поле на доске");
  const [completed, setCompleted] = useState(false);

  const targetSquare = squares[currentIndex];

  function handleCorrect() {
    if (currentIndex === squares.length - 1) {
      setCompleted(true);
      setMessage("Разминка завершена! Отличная работа.");
      return;
    }

    setMessage("Верно! Следующее поле.");
    setCurrentIndex((prev) => prev + 1);
  }

  function handleWrong() {
    setMessage("Не совсем. Попробуй ещё раз.");
  }

  function restartExercise() {
    setCurrentIndex(0);
    setCompleted(false);
    setMessage("Найди указанное поле на доске");
  }

  return (
    <>
      {completed ? (
        <>
          <p>{message}</p>
          <p>
            Результат: {squares.length} / {squares.length}
          </p>
          <p>+10 XP</p>
          <Button onClick={restartExercise}>Пройти ещё раз</Button>
        </>
      ) : (
        <>
          <p>
            Упражнение {currentIndex + 1} из {squares.length}
          </p>
          <h2>Найди поле: {targetSquare}</h2>
          <p>{message}</p>

          <CoordinateBoard
            targetSquare={targetSquare}
            onCorrect={handleCorrect}
            onWrong={handleWrong}
          />
        </>
      )}
    </>
  );
}

export default CoordinateExercise;
