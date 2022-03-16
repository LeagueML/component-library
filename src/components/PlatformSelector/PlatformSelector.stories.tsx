import React from 'react';

import { action } from '@storybook/addon-actions';

import PlatformSelector from './PlatformSelector';

export default {
  title: "Library/PlatformSelector",
  component: PlatformSelector,
}

export const Primary = () => (
  <PlatformSelector onChange={ (value) => action('onChange')({"value": value}) } />
)