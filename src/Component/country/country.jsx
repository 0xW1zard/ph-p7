import React, { use, useState } from "react";
import "./country.css";

const Country = ({ single, visitedhandel }) => {

  const [visited, setVisited] = useState(false);

  function visitHandel() {
    setVisited(!visited);
    visitedhandel(single)
  }
  return (
    <div className={`box ${visited && "vi-state"}`}>
      <img src={single.flags.flags.png} alt={single.flags.flags.alt} />
      <h2>{single.name.common}</h2>
      <h3>Population: {single.population.population}</h3>
      <button className="btn" onClick={visitHandel}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
