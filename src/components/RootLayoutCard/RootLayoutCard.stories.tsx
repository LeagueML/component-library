import React from 'react';

import { Meta, Story } from '@storybook/react';

import RootLayoutCard, { RootLayoutCardProps } from './RootLayoutCard';

export default {
  title: 'Library/Root Layout Card',
  component: RootLayoutCard,
} as Meta;

const Template: Story<RootLayoutCardProps> = (args) => (
  <RootLayoutCard {...args} />
);

const Throw = () => {
  throw new Error('AAA');
};

export const Normal = Template.bind({});
Normal.args = {
  children: <>Simple!</>,
};

export const Errored = Template.bind({});
Errored.args = {
  children: (
    <>
      <Throw />
    </>
  ),
  border: false,
};
