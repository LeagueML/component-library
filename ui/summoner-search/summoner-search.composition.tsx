import React from 'react';

import { SummonerSearch } from './summoner-search';

export const BasicSummonerSearch = () => {
  return (
    <SummonerSearch />
  );
}

export const SpecifiedSummonerSearch = () => {
  return (
    <SummonerSearch initialPlatform='EUW' />
  )
}

export const FunctionalSummonerSearch = () => {
  return (
    <SummonerSearch onSearch={() => alert('Search!')} />
  )
}