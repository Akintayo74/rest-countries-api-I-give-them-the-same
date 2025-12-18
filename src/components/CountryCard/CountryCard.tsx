import * as React from "react";
import styles from "./CountryCard.module.css";
import Link from "next/link";

import type { Country } from "@/types/country";

interface CountryCardProps {
  country: Country,
}

function CountryCard( {country}: CountryCardProps ) {
  return (
    <Link href={`country/${country.cca3}`} className={styles.container}>
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
    </Link>
  );
}

export default CountryCard;
