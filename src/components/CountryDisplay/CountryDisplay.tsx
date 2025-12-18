'use client';
import * as React from 'react';
import styles from './CountryDisplay.module.css';

import useCountryDisplay from '@/hooks/use-country-display';

function CountryDisplay({ countryName }) {
  const { data, error, isLoading } = useCountryDisplay(countryName)

  return (
    <div>
      {data && data.map((country, index) => (
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

export default CountryDisplay;