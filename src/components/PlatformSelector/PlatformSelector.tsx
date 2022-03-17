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
  initialPlatform,
  onChange,
}: PlatformSelectorProps) {
  const [extended, setExtended] = useState<Boolean>(false);
  const [selected, setSelected] = useState<Platform>(initialPlatform);

  function handleChange(value: Platform) {
    setSelected(value);
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
        <span className='selected'>{selected.short}</span>
        <AiFillCaretDown color='#CFCFCF' size={25} />
      </div>
      <div className={`list ${extended ? 'extended' : ''}`}>
        {platformItems}
      </div>
    </div>
  );
}

export default PlatformSelector;
