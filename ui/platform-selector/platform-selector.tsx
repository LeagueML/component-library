import React, { useState } from 'react';

import styles from './platform-selector.module.css';

export type PlatformSelectorProps = {
  /** Specifies the initial platform for the dropdown */
  initialPlatform? : Platform;
};

export type Platform = 'BR' | 'EUNE' | 'EUW' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'RU' | 'TR' | 'JP' | 'KR';

export function PlatformSelector({ initialPlatform = 'NA' }: PlatformSelectorProps) {
  const [selected, setSelected] = useState(initialPlatform)

  return (
    <div className={ styles.platformSelector }>
      <span className={ styles.span }>{ selected }</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" width='20px'>
        <g data-name="Layer 2">
          <path fill="#CFCFCF" d="M0 0l32 32L64 0z" data-name="Layer 1"></path>
        </g>
      </svg>
    </div>
  );
}
