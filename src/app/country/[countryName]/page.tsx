import * as React from "react";

async function countryCode({ params }) {
  const { countryName } = await params;

  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryName}`
  );
  const json = await response.json();

  console.log(json)
  return (
    <div>
      {json.map((country, index) => (
        <div>

        <p key={index}>
        <b>Capital</b>: {country.capital}
        </p>
        <h1>
            {country.population}
        </h1>
        </div>
      ))}
    </div>
  );
}

export default countryCode;
