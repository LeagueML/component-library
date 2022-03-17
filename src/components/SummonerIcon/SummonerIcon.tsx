import React from 'react';

import { SummonerIconProps } from './SummonerIcon.types';
import './SummonerIcon.css';

function SummonerIcon({
  icon,
  border = 'https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-static-assets/global/default/images/uikit/themed-level-ring/theme-1-simplified-border.png',
  size = 100,
}: SummonerIconProps) {
  const style: React.CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <div className='summonerIcon' style={style}>
      <img className='icon' src={icon} />
      <img className='border' src={border} />
    </div>
  );
}

export default SummonerIcon;
