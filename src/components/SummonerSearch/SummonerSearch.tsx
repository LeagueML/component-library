import React, { useState } from 'react';

import { SummonerSearchProps, Platform } from './SummonerSearch.types';
import './SummonerSearch.css';

import PlatformSelector from '../PlatformSelector';
import { FiSearch } from 'react-icons/fi';

function SummonerSearch({ initialPlatform = 'NA', onSearch }: SummonerSearchProps) {
  const [input, setInput] = useState<string>('');
  const [platform, setPlatform] = useState<Platform>(initialPlatform)
  
  function handleSubmit() {
    if (input !== '')
      onSearch(input, platform)
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter')
      handleSubmit()
  }
  
  return (
    <div className='summonerSearch'>
      <PlatformSelector 
        initialPlatform={ platform }
        onChange={ value => setPlatform(value) }
      />
      <input 
        value={ input } 
        onInput={ e => setInput(e.target.value) }
        onKeyDown={ e => handleKeyDown(e) }
        className='nameInput'
        placeholder='Type a summoner name'
      />
      <div 
        className='searchButton'
        onClick={ () => handleSubmit() }
       >
        <FiSearch size='40' />
      </div>
    </div>
  );
}

export default SummonerSearch;