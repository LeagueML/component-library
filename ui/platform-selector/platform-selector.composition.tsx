import React from 'react';
import { PlatformSelector } from './platform-selector';

export const BasicPlatformSelector = () => {
  return (
    <PlatformSelector />
  );
}

export const SpecifiedPlatformSelector = () => {
  return (
    <PlatformSelector initialPlatform='EUW' />
  )
}