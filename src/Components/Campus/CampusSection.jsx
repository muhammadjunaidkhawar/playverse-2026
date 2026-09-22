import SectionHeading from "../SectionHeading";
import CampusCard from "./CampusCard";

function CampusSection({ campuses }) {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="The Championship"
          title="Two campuses. One sporting platform."
          description="Each campus conducts its own championship before qualified champions progress toward the Grand Inter-Campus Championship."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {campuses.map((campus, index) => (
            <CampusCard
              key={campus.id}
              campus={campus}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CampusSection;