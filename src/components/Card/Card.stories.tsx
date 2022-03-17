import React from 'react';

import { Meta, Story } from '@storybook/react';

import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Library/Card',
  component: Card,
} as Meta;

const body =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque vitae metus et imperdiet. Aliquam ultricies egestas odio a posuere. Ut ornare euismod facilisis. Donec massa felis, aliquet a lacus id, pharetra rutrum turpis. Sed rutrum consequat imperdiet. Pellentesque vehicula eget magna a vulputate. Morbi ut libero auctor, laoreet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque vitae metus et imperdiet. Aliquam ultricies egestas odio a posuere. Ut ornare euismod facilisis. Donec massa felis, aliquet a lacus id, pharetra rutrum turpis. Sed rutrum consequat imperdiet. Pellentesque vehicula eget magna a vulputate. Morbi ut libero auctor, laoreet sem.';

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  title: 'Title',
  text: body,
};

export const Borderless = Template.bind({});
Borderless.args = {
  title: 'Title',
  text: body,
  border: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  title: 'Title',
  text: body,
  icon: 'https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg',
};

export const Custom = Template.bind({});
Custom.args = {
  title: 'Title',
  text: body,
  icon: 'https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg',
  color: 'lime',
  backgroundColor: '#0f0f0f',
  border: true,
  borderColor: 'darkgreen',
};
