import React, { use } from "react";

const Countries = ({ allData }) => {
  const useData = use(allData);
  const raw = useData.countries
  console.log(useData);
  return (
    <div>
      <h1>Total Countries: {raw.length}</h1>
    </div>
  );
};

export default Countries;
