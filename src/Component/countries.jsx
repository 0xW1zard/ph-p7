import React, { use, useState } from "react";
import Country from "./country/country";
import "./countries.css";

const Countries = ({ allData }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const visitedhandel = (single) => {
    console.log("clicked", single);
    const all = [...visitedCountry, single];
    setVisitedCountry(all);
  };

  const useData = use(allData);
  const raw = useData.countries;
  return (
    <div>
      <h1>Total Countries: {raw.length}</h1>
      <h2>Visited County: {visitedCountry.length} </h2>
      <div className="gridBox">
        {raw.map((single) => (
          <Country
            key={single.ccn3.ccn3}
            single={single}
            visitedhandel={visitedhandel}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
