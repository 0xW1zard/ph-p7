import { Suspense } from "react";
import "./App.css";
import Countries from "./Component/countries";
import Country from "./Component/country/country";

function App() {
  const allData = fetch("https://openapi.programming-hero.com/api/all").then(
    (res) => res.json(),
  );

  return (
    <>
      <Suspense fallback={<p>Data Is Loading...</p>}>
        <Countries allData={allData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
