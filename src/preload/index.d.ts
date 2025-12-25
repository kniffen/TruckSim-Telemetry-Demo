import { ElectronAPI } from '@electron-toolkit/preload';
import type { SCSSDKTelemetry } from 'trucksim-telemetry';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    getTelemetry: () => SCSSDKTelemetry;
    tstVersion: string;
  }
}
