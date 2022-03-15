import React from 'react';

import { SummonerSearchProps } from './SummonerSearch.types';
import './SummonerSearch.css';

import PlatformSelector from '../PlatformSelector';
import { FiSearch } from 'react-icons/fi';

function SummonerSearch({ initialPlatform = 'NA', onSearch }: SummonerSearchProps) {
  return (
    <div className='summonerSearch'>
      <PlatformSelector initialPlatform={ initialPlatform }/>
      <input className='nameInput' placeholder='Type a summoner name' />
      <div className='searchButton' onClick={ onSearch }>
        <FiSearch size='40' />
      </div>
    </div>
  );
}

export default SummonerSearch;