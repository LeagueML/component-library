export interface SummonerSearchProps {
  /** Specifies the initial platform for the platform selector */
  initialPlatform?: Platform;
  /** The event to call if the user submits his search */
  onSearch?: () => void;
}

export type Platform = 'BR' | 'EUNE' | 'EUW' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'RU' | 'TR' | 'JP' | 'KR';