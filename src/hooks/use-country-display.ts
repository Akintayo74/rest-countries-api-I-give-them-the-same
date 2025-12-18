'use client';
import * as React from "react";
import useSWR from "swr";

async function fetcher(ENDPOINT: string) {
  const response = await fetch(ENDPOINT);
  const json = await response.json();

  return json;
}


function useCountryDisplay(countryName: string) {
    const ENDPOINT = `https://restcountries.com/v3.1/alpha/${countryName}`;
    const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);

    return { data, error, isLoading};
}

export default useCountryDisplay;

