import { Platform } from '../..';

export interface PlatformSelectorProps {
  /** The platforms to be displayed */
  platforms: Array<Platform>;
  /** Specifies the platform for the dropdown */
  platform: Platform;
  /** Called when the user selecets another platform */
  onChange: (value: Platform) => void;
}
