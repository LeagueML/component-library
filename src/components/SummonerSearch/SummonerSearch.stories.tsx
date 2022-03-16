import React from 'react';

import { action } from '@storybook/addon-actions';

import SummonerSearch from './SummonerSearch';
import { Platform } from '../..';

export default {
  title: 'Library/SummonerSearch',
  component: SummonerSearch,
};

const platforms: Array<Platform> = [
  { name: 'North America', short: 'NA', status: true },
  { name: 'Europe West', short: 'EUW', status: true },
  { name: 'Korea', short: 'KR', status: false },
  { name: 'Turkey', short: 'TR', status: true },
  { name: 'Oceania', short: 'OCE', status: false },
  { name: 'Japan', short: 'JP', status: false },
];

export const Primary = (args: any) => (
  <SummonerSearch
    {...args}
    onSearch={(name, platform) =>
      action('onSearch')({ name: name, platform: platform })
    }
  />
);
Primary.args = {
  initialPlatform: platforms[0],
  platforms: platforms,
};
