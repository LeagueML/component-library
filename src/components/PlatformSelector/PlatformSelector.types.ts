export interface PlatformSelectorProps {
  /** Specifies the initial platform for the dropdown */
  initialPlatform? : Platform;
  /** Called when the user selecets another platform */
  onChange: (value: Platform) => void
}

export type Platform = 'BR' | 'EUNE' | 'EUW' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'RU' | 'TR' | 'JP' | 'KR';