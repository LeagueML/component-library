import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Library/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  label: 'Badge'
}

export const WithImage = Template.bind({})
WithImage.args = {
  label: 'Badge',
  image: 'HAHAHA'
}