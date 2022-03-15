export interface PlatformSelectorProps {
  /** Specifies the initial platform for the dropdown */
  initialPlatform? : Platform;
}

export type Platform = 'BR' | 'EUNE' | 'EUW' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'RU' | 'TR' | 'JP' | 'KR';