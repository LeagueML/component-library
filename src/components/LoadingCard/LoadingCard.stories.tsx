import React from 'react';

import { Meta, Story } from '@storybook/react';

import LoadingCard from './LoadingCard';

export default {
  title: 'Library/Loading Card',
  component: LoadingCard,
} as Meta;

const Template: Story = (args) => <LoadingCard {...args} />;

export const Default = Template.bind({});