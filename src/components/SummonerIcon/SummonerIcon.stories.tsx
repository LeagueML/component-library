import React from 'react';

import { Meta, Story } from '@storybook/react';

import SummonerIcon from './SummonerIcon';
import { SummonerIconProps } from './SummonerIcon.types';

const rankBorders = {
  Iron: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/01_iron/images/iron_base.png',
  Bronze:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/02_bronze/images/bronze_base.png',
  Silver:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/03_silver/images/silver_base.png',
  Gold: 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/04_gold/images/gold_base.png',
  Platinum:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/05_platinum/images/platinum_base.png',
  Diamond:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/06_diamond/images/diamond_base.png',
  Master:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/07_master/images/master_base.png',
  Grandmaster:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/08_grandmaster/images/grandmaster_base.png',
  Challenger:
    'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/09_challenger/images/challenger_base.png',
};

export default {
  title: 'Profile/SummonerIcon',
  component: SummonerIcon,
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 500,
        step: 1,
      },
    },
    border: {
      options: Object.keys(rankBorders),
      mapping: rankBorders,
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: Story<SummonerIconProps> = ({ icon, ...args }) => (
  <SummonerIcon
    icon={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${icon}.png`}
    {...args}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  icon: 29,
};

export const Custom = Template.bind({});
Custom.args = {
  border: 'Master',
  icon: 3899,
  size: 350,
};
