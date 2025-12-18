import CountryDisplay from "@/components/CountryDisplay";
import * as React from "react";

async function countryCode({ params }) {
  const { countryName } = await params;

  // const {data, error, isLoading} = useCountryDisplay(countryName);
  return <CountryDisplay countryName={countryName} />

  
}

export default countryCode;
