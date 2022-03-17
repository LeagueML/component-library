import React from 'react';

import { Meta, Story } from '@storybook/react';

import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Library/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: <>Simple!</>
};

export const Borderless = Template.bind({});
Borderless.args = {
  children: <>No Border!</>,
  border: false,
};

export const Custom = Template.bind({});
Custom.args = {
  children:<>Lots of stuff going on</>,
  color: 'lime',
  backgroundColor: '#0f0f0f',
  border: true,
  borderColor: 'darkgreen',
};
