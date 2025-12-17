'use client'
import * as React from "react";
import styles from "./SelectRegion.module.css";

import useSearchRegion from "@/hooks/use-search-region";
import CountryCard from "../CountryCard";

function SelectRegion() {
  const [selectedOption, setSelectedOption] = React.useState("");

  const { data, error, isLoading } = useSearchRegion(selectedOption)

  return (
    <div className={styles.container}>
      <form>
        <select
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
        >
          <option value="">— Filter By Region —</option>

          <optgroup label='Regions'>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </optgroup>
        </select>
      </form>

      {isLoading && <p>Data is fetching....</p>}

      {data && data.map((country, index: number) => (
        <CountryCard key={index} country={country}/>
      ))}
    </div>
  );
}

export default SelectRegion;
