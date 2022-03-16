import React, { useState } from 'react';

import { PlatformSelectorProps, Platform } from './PlatformSelector.types';
import './PlatformSelector.css';

function PlatformSelector({ initialPlatform = 'NA', onChange }: PlatformSelectorProps) {
  const [extended, setExtended] = useState<Boolean>(false);
  const [platform, setPlatform] = useState<Platform>(initialPlatform);
  
  function handleChange(value: Platform) {
    setPlatform(value);
    onChange(value);
  }

  return (
    <div className='platformSelector'>
      <div className="preview" onClick={ () => setExtended(!extended) }>
        <span className='selected'>{ platform }</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" width='20px'>
          <g data-name="Layer 2">
            <path fill="#CFCFCF" d="M0 0l32 32L64 0z" data-name="Layer 1"></path>
          </g>
        </svg>
      </div>
      <div className={`list ${extended ? "extended" : ""}`}>
        <span className="item" onClick={ () => handleChange('EUW') }>EUW</span>
        <span className="item" onClick={ () => handleChange('NA') }>NA</span>
        <span className="item" onClick={ () => handleChange('KR') }>KR</span>
      </div>
    </div>
  );
}

export default PlatformSelector;