import { Platform } from '../..';

export interface PlatformSelectorProps {
  /** The platforms to be displayed */
  platforms: Array<Platform>;
  /** Specifies the initial platform for the dropdown */
  initialPlatform: Platform;
  /** Called when the user selecets another platform */
  onChange: (value: Platform) => void;
}
