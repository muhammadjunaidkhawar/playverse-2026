import SportCard from "./SportCard";

function SportsGrid({ sports }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sports.map((sport, index) => (
        <SportCard
          key={sport.id}
          sport={sport}
          index={index}
        />
      ))}
    </div>
  );
}

export default SportsGrid;