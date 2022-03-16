import React from 'react';

import { action } from '@storybook/addon-actions';

import SummonerSearch from './SummonerSearch';

export default {
  title: 'Library/SummonerSearch',
  component: SummonerSearch,
}

export const Primary = () => (
  <SummonerSearch 
    initialPlatform='EUW' 
    onSearch={ (name, platform) => action('onSearch')({ "name": name, "platform": platform }) } 
  />
)