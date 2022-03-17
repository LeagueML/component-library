import React, { useState } from 'react';

import { PlatformSelectorProps } from './PlatformSelector.types';
import './PlatformSelector.css';
import { Platform } from '../..';

import {
  AiFillCheckCircle,
  AiFillMinusCircle,
  AiFillCaretDown,
} from 'react-icons/ai';

function PlatformSelector({
  platforms,
  platform,
  onChange,
}: PlatformSelectorProps) {
  const [extended, setExtended] = useState<Boolean>(false);

  function handleChange(value: Platform) {
    setExtended(false);

    onChange(value);
  }

  const platformItems = platforms.map((platform) => {
    return (
      <span className='item' onClick={() => handleChange(platform)}>
        {platform.status ? (
          <AiFillCheckCircle color='lightgreen' />
        ) : (
          <AiFillMinusCircle color='lightcoral' />
        )}
        {platform.name}
      </span>
    );
  });

  return (
    <div className='platformSelector'>
      <div className='preview' onClick={() => setExtended(!extended)}>
        <span className='selected'>{platform.short}</span>
        <AiFillCaretDown color='#CFCFCF' size={25} />
      </div>
      <div className={`list ${extended ? 'extended' : ''}`}>
        {platformItems}
      </div>
    </div>
  );
}

export default PlatformSelector;
