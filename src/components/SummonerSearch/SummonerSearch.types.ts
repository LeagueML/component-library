import { Platform } from '../..';

export interface SummonerSearchProps {
  /** The platforms to be displayed */
  platforms: Array<Platform>;
  /** Specifies the initial platform for the platform selector */
  initialPlatform: Platform;
  /** The event to call if the user submits his search */
  onSearch: (name: string, platform: Platform) => void;
}
