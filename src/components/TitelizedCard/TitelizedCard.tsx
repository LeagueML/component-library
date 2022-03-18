import React from 'react';

import { TitelizedCardProps } from './TitelizedCard.types';
import './TitelizedCard.css';
import Card from '../Card';

function TitlizedCard({
  color = 'black',
  backgroundColor = '#C4C4C4',
  border = true,
  borderColor = '#7E7E7E',
  icon,
  title,
  text,
}: TitelizedCardProps) {
  return (
    <Card
      color={color}
      backgroundColor={backgroundColor}
      border={border}
      borderColor={borderColor}
    >
      <div className='title-wrapper'>
        {icon !== undefined ? <img src={icon}></img> : <></>}
        <span className='title'>{title}</span>
      </div>
      <hr />
      <span className='content'>{text}</span>
    </Card>
  );
}

export default TitlizedCard;
