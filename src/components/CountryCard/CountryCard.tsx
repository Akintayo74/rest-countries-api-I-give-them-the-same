import * as React from "react";
import styles from "./CountryCard.module.css";

import type { Country } from "@/types/country";

interface CountryCardProps {
  country: Country,
}

function CountryCard( {country}: CountryCardProps ) {
  return (
    <div className={styles.container}>
      <div className={styles.country}>
        <img src={country.flags.png} alt={`The flag of ${country.name}`} />
      </div>
      <div className={styles.info}>
        <h2>{country.name.common}</h2>

        <p>
          <b>Population</b>: {country.population}
        </p>
        <p>
          <b>Region</b>: {country.region}
        </p>
        <p>
          <b>Capital</b>: {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
