import React from 'react';

import { PlatformSelector, Platform } from '@league_ml/component-library.ui.platform-selector';
import { FiSearch } from 'react-icons/fi';

import styles from './summoner-search.module.css'

export type SummonerSearchProps = {
  /** Specifies the initial platform for the platform selector */
  initialPlatform? : Platform;
  /** The event to call if the user submits his search */
  onSearch?: () => void;
};

export function SummonerSearch({ initialPlatform = 'NA', onSearch }: SummonerSearchProps) {
  return (
    <div className={ styles.summonerSearch }>
      <PlatformSelector initialPlatform={ initialPlatform }/>
      <input className={ styles.input } placeholder='Type a summoner name' />
      <div className={ styles.button } onClick={ onSearch }>
        <FiSearch size='40' />
      </div>
    </div>
  );
}
