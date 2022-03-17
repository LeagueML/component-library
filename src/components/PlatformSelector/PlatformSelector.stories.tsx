import React from 'react';

import { action } from '@storybook/addon-actions';

import PlatformSelector from './PlatformSelector';
import { Platform } from '../..';

export default {
  title: 'Library/PlatformSelector',
  component: PlatformSelector,
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
  <PlatformSelector
    {...args}
    onChange={(value) => action('onChange')({ value: value })}
  />
);
Primary.args = {
  platform: platforms[0],
  platforms: platforms,
};
