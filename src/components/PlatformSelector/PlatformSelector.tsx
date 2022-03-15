import React from 'react';

import { PlatformSelectorProps } from './PlatformSelector.types';
import './PlatformSelector.css';

function PlatformSelector({ initialPlatform = 'NA' }: PlatformSelectorProps) {
  return (
    <div className='platformSelector'>
      <span className='selected'>{ initialPlatform }</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" width='20px'>
        <g data-name="Layer 2">
          <path fill="#CFCFCF" d="M0 0l32 32L64 0z" data-name="Layer 1"></path>
        </g>
      </svg>
    </div>
  );
}

export default PlatformSelector;