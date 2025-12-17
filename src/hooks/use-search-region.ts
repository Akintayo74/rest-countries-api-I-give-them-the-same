'use client';
import * as React from "react";
import useSWR from "swr";
import type { Country } from "@/types/country";


async function fetcher(ENDPOINT: string) {
    const response = await fetch(ENDPOINT);
    const json = await response.json();
    
    return json;
}

function useSearchRegion(region: string) {
    const ENDPOINT = region ? `https://restcountries.com/v3.1/region/${region}` : null;
    const { data, error, isLoading } = useSWR<Country[]>(ENDPOINT, fetcher);

    return { data, error, isLoading };
}

export default useSearchRegion;