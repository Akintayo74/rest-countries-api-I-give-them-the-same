import * as React from "react";
import countriesData from '@/../data/countries.json'

async function countryCode({ params }) {
  const { countryName } = await params;

  const country = countriesData.find(c => c.cca3 === countryName)

  console.log(countriesData)
  return (
    <div>
      <h1>{country.capital}</h1>
    </div>
  );
}

export default countryCode;