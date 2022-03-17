import React, { Ref } from 'react';

import { CardProps } from './Card.types';
import './Card.css';

function Card({
  color = 'black',
  backgroundColor = '#C4C4C4',
  border = true,
  borderColor = '#7E7E7E',
  children
}: CardProps, ref : Ref<HTMLDivElement>) {
  const style: React.CSSProperties = {
    color: color,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  };

  return (
    <div ref={ref} className={`card ${border ? 'border' : ''}`} style={style}>
      {children}
    </div>
  );
}

export default Card;
