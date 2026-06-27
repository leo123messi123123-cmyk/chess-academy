import Button from "../components/common/Button/Button";
import Card from "../components/common/Card/Card";
import PageTitle from "../components/common/PageTitle/PageTitle";
import Section from "../components/common/Section/Section";
import HomePage from "./HomePage";
import "./PracticePage.css";

function PracticePage() {
  return (
    <div className="practice-page">
      <PageTitle
        title="Тренировки"
        subtitle="Добро пожаловать в тренировочный центр Chess Academy"
      />

      <div className="practice-page__hero">
        <Card>
          <Section title="Продолжить тренировку">
            <p>
              Продолжи решать задачи по теме «Мат в 1 ход» и укрепи навык
              быстрого поиска решающего хода.
            </p>

            <Button>Продолжить</Button>
          </Section>
        </Card>

        <Card>
          <Section title="Разминка дня">
            <p>
              5 коротких заданий на координаты, внимание и видение доски перед
              основной тренировкой.
            </p>

            <Button>Начать разминку</Button>
          </Section>
        </Card>
      </div>

      <Section title="Виды тренировок">
        <div className="practice-page__training-types">
          <Card>
            <div className="practice-page__training-card">
              <h3>Тактика</h3>
              <p>Маты, вилки, связки и комбинации.</p>
              <Button>Открыть</Button>
            </div>
          </Card>

          <Card>
            <div className="practice-page__training-card">
              <h3>Координаты</h3>
              <p>Быстро находи поля и лучше ориентируйся на доске.</p>
              <Button>Открыть</Button>
            </div>
          </Card>

          <Card>
            <div className="practice-page__training-card">
              <h3>Ходы фигур</h3>
              <p>Тренируй путь коня, ладьи, слона и ферзя.</p>
              <Button>Открыть</Button>
            </div>
          </Card>

          <Card>
            <div className="practice-page__training-card">
              <h3>Память</h3>
              <p>Запоминай позиции и восстанавливай расположение фигур.</p>
              <Button>Открыть</Button>
            </div>
          </Card>
        </div>
      </Section>

      <Card>
        <Section title="Мои навыки">
          <div className="practice-page__skills">
            <div className="practice-page__skill">
              <span>Тактика</span>
              <span>███████░░░</span>
            </div>

            <div className="practice-page__skill">
              <span>Координаты</span>
              <span>█████░░░░░</span>
            </div>

            <div className="practice-page__skill">
              <span>Эндшпиль</span>
              <span>███░░░░░░░</span>
            </div>

            <div className="practice-page__skill">
              <span>Дебюты</span>
              <span>████░░░░░░</span>
            </div>

            <div className="practice-page__skill">
              <span>Память</span>
              <span>██████░░░░</span>
            </div>

            <div className="practice-page__skill">
              <span>Видение доски</span>
              <span>████████░░</span>
            </div>
          </div>
        </Section>
      </Card>

      <HomePage />
    </div>
  );
}

export default PracticePage;
