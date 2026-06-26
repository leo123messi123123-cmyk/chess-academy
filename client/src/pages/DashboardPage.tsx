import Button from "../components/common/Button/Button";
import Card from "../components/common/Card/Card";
import PageTitle from "../components/common/PageTitle/PageTitle";
import Section from "../components/common/Section/Section";
import "./DashboardPage.css";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <PageTitle
        title="Академия"
        subtitle="Сегодня отличный день, чтобы стать сильнее в шахматах"
      />

      <div className="dashboard__grid">
        <Card>
          <Section title="План занятий">
            <ul className="dashboard__task-list">
              <li>Разминка: решить 3 лёгкие задачи</li>
              <li>Практика: пройти тему «Мат в 1 ход»</li>
              <li>Повторение: разобрать одну позицию</li>
            </ul>
          </Section>
        </Card>

        <Card>
          <Section title="Миссия недели">
            <strong>Тактический рывок</strong>
            <p>Решить 25 задач по тактике</p>

            <div className="dashboard__mission-progress">
              <div className="dashboard__mission-progress-fill" />
            </div>

            <p>15 / 25 задач</p>
          </Section>
        </Card>
      </div>

      <Section title="Быстрые действия">
        <div className="dashboard__actions">
          <Card>
            <div className="dashboard__action">
              <h3>Практика</h3>
              <p>Перейти к шахматным задачам.</p>
              <Button onClick={() => navigate("/practice")}>Начать</Button>
            </div>
          </Card>

          <Card>
            <div className="dashboard__action">
              <h3>Учебный класс</h3>
              <p>Позже здесь будут уроки и материалы тренера.</p>
              <Button onClick={() => navigate("/classroom")}>Открыть</Button>
            </div>
          </Card>

          <Card>
            <div className="dashboard__action">
              <h3>Профиль</h3>
              <p>Посмотреть шахматный путь и достижения.</p>
              <Button onClick={() => navigate("/profile")}>Перейти</Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

export default DashboardPage;
