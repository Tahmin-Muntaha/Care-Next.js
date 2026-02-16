import React from "react";
import CareCard from "@/components/CareCard";
const caresf = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/cares`);
  const data = await res.json();
  return data;
};
const CaresPage = async () => {
  const cares = await caresf();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-10 my-20">
      {cares.map((care) => (
        <CareCard key={care._id} care={care}></CareCard>
      ))}
    </div>
  );
};

export default CaresPage;
