import React from 'react';

import { Meta, Story } from '@storybook/react';

import LoadingCard from './LoadingCard';

export default {
  title: 'Library/Loading Card',
  component: LoadingCard,
} as Meta;

const Template: Story = (args) => <div style={{width: 100, height: 100}}><LoadingCard {...args} /></div>;

export const Default = Template.bind({});