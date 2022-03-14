import React, { ReactNode, useState } from 'react';

import { Platform } from '../Platform';

import './platform-selector.css';

export type PlatformSelectorProps = {
  /** Specifies the initial platform for the dropdown */
  initialPlatform? : Platform;
};

export function PlatformSelector({ initialPlatform = 'NA' }: PlatformSelectorProps) {
  const [selected, setSelected]: Platform = useState(initialPlatform)

  return (
    <div className='platform-selector'>
      <span>{ selected }</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" width='20px'>
        <g data-name="Layer 2">
          <path fill="#CFCFCF" d="M0 0l32 32L64 0z" data-name="Layer 1"></path>
        </g>
      </svg>
    </div>
  );
}
