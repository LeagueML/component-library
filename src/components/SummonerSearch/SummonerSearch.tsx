import React, { useState } from 'react';

import { SummonerSearchProps } from './SummonerSearch.types';
import './SummonerSearch.css';
import { Platform } from '../..';

import PlatformSelector from '../PlatformSelector';
import { FiSearch } from 'react-icons/fi';

function SummonerSearch({
  platforms,
  initialPlatform,
  onSearch,
}: SummonerSearchProps) {
  const [input, setInput] = useState<string>('');
  const [platform, setPlatform] = useState<Platform>(initialPlatform);

  function handleSubmit() {
    if (input !== '') onSearch(input, platform);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') handleSubmit();
  }

  return (
    <div className='summonerSearch'>
      <PlatformSelector
        platforms={platforms}
        platform={platform}
        onChange={(value) => setPlatform(value)}
      />
      <input
        value={input}
        onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        onKeyDown={(e) => handleKeyDown(e)}
        className='nameInput'
        placeholder='Type a summoner name'
      />
      <div className='searchButton' onClick={() => handleSubmit()}>
        <FiSearch size='40' />
      </div>
    </div>
  );
}

export default SummonerSearch;
