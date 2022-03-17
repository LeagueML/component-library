import React from 'react';

import { Meta, Story } from '@storybook/react';

import RootLayoutCard, { RootLayoutCardProps } from './RootLayoutCard';

export default {
  title: 'Library/Root Layout Card',
  component: RootLayoutCard,
} as Meta;

const Template: Story<RootLayoutCardProps> = (args) => <RootLayoutCard {...args} />;

const ErrorButton = () => <button onClick={() => {throw new Error("AAA!");}}>Click me</button>

export const Simple = Template.bind({});
Simple.args = {
  children: <>Simple! <ErrorButton /></>
};

export const Borderless = Template.bind({});
Borderless.args = {
  children: <>No Border! <ErrorButton /></>,
  border: false,
};

export const Custom = Template.bind({});
Custom.args = {
  children:<>Lots of stuff going on <ErrorButton /></>,
  color: 'lime',
  backgroundColor: '#0f0f0f',
  border: true,
  borderColor: 'darkgreen',
};