import React from 'react';

import { Meta, Story } from '@storybook/react';

import LoadingCard from './LoadingCard';

export default {
  title: 'Library/Card/Loading',
  component: LoadingCard,
} as Meta;

export const Default: Story = () => (
  <div style={{ width: 200, height: 200 }}>
    <LoadingCard />
  </div>
);
