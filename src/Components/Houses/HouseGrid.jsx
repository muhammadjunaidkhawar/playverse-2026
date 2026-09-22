import HouseCard from "./HouseCard";

function HouseGrid({ houses, campusName }) {
  if (!houses.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
        <div className="text-3xl">🏠</div>

        <h3 className="mt-4 text-lg font-black text-white">
          House details coming soon
        </h3>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          Official {campusName} house names have not been
          provided in the current championship proposal.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {houses.map((house, index) => (
        <HouseCard
          key={house.id}
          house={house}
          index={index}
        />
      ))}
    </div>
  );
}

export default HouseGrid;