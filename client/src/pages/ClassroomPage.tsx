import Card from "../components/common/Card/Card";
import PageTitle from "../components/common/PageTitle/PageTitle";
import Section from "../components/common/Section/Section";

function ClassroomPage() {
  return (
    <div>
      <PageTitle
        title="Учебный класс"
        subtitle="Здесь будут проходить уроки, разборы партий и совместная работа у доски"
      />

      <Card>
        <Section title="Будущий учебный класс">
          <p>
            Позже здесь тренер сможет создавать уроки, добавлять этапы занятия,
            подключать задачи, партии, домашние задания и ссылку на
            видеовстречу.
          </p>

          <p>
            Урок будет состоять из этапов: разминка, теория, работа у доски,
            практика, работа в парах, мини-турнир и домашнее задание.
          </p>
        </Section>
      </Card>
    </div>
  );
}

export default ClassroomPage;
