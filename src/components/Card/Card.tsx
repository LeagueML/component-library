import React from 'react';

import { CardProps } from './Card.types';
import './Card.css';

function Card({
  color = 'black',
  backgroundColor = '#C4C4C4',
  border = true,
  borderColor = '#7E7E7E',
  icon,
  title,
  text,
}: CardProps) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  };

  return (
    <div className={`card ${border ? 'border' : ''}`} style={style}>
      <div className='title-wrapper'>
        {icon !== undefined ? <img src={icon}></img> : <></>}
        <span className='title'>{title}</span>
      </div>
      <hr />
      <span className='body'>{text}</span>
    </div>
  );
}

export default Card;
