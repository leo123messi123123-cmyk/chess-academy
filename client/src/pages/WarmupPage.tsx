import Card from "../components/common/Card/Card";
import PageTitle from "../components/common/PageTitle/PageTitle";
import Section from "../components/common/Section/Section";
import WarmupEngine from "../components/warmup/WarmupEngine";

function WarmupPage() {
  return (
    <div>
      <PageTitle
        title="Разминка"
        subtitle="Подготовь внимание и шахматное мышление перед тренировкой"
      />

      <Card>
        <Section title="Координаты">
          <WarmupEngine />
        </Section>
      </Card>
    </div>
  );
}

export default WarmupPage;
