import { contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { truckSimTelemetry } from 'trucksim-telemetry';
import tstPkg from 'trucksim-telemetry/package.json';

// Custom APIs for renderer
const api = {};
const telemetry = truckSimTelemetry();

const createTSTEvent = (value: string): CustomEvent => {
  const time = new Date();
  const event = new CustomEvent('tst-event', {
    detail: {
      timestamp: time.toJSON(),
      value
    }
  });

  return event;
};

telemetry.on('connected', () => {
  window.dispatchEvent(createTSTEvent('Game connected'));
});

telemetry.on('disconnected', () => {
  window.dispatchEvent(createTSTEvent('Game disconnected'));
});

telemetry.on('ferry', (data) => {
  window.dispatchEvent(createTSTEvent(`Ferry: ${data.ferrySourceName} -> ${data.ferryTargetName}`));
});

telemetry.on('train', (data) => {
  window.dispatchEvent(createTSTEvent(`Train: ${data.trainSourceName} -> ${data.trainTargetName}`));
});

telemetry.on('refuel-paid', (data) => {
  window.dispatchEvent(createTSTEvent(`Fueled ${data.refuelAmount} liters`));
});

telemetry.on('tollgate', (data) => {
  window.dispatchEvent(createTSTEvent(`Tollgate paid: ${data.tollgatePayAmount}€/$`));
});

telemetry.on('fine', (data) => {
  window.dispatchEvent(createTSTEvent(`Fined ${data.fineAmount}€/$ for ${data.fineOffence}`));
});

telemetry.on('speed-limit', (speed) => {
  window.dispatchEvent(createTSTEvent(`Speed limit changed to ${speed}m/s`));
});

telemetry.on('job-started', (data) => {
  window.dispatchEvent(createTSTEvent(`Job started: ${data.citySrc} -> ${data.cityDst}`));
});

telemetry.on('job-delivered', (data) => {
  window.dispatchEvent(createTSTEvent(`Job delivered: ${data.jobDeliveredEarnedXp}XP`));
});

telemetry.on('trailer-attached', (index) => {
  window.dispatchEvent(createTSTEvent(`Trailer ${index} attached`));
});

telemetry.on('trailer-detached', (index) => {
  window.dispatchEvent(createTSTEvent(`Trailer ${index} detached`));
});

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  console.log('Context Isolation is enabled');
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
    contextBridge.exposeInMainWorld('tstVersion', tstPkg.version);
    contextBridge.exposeInMainWorld('getTelemetry', () => telemetry.data.current);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
  // @ts-ignore (define in dts)
  window.getTelemetry = () => telemetry.data.current;
  // @ts-ignore (define in dts)
  window.tstVersion = tstPkg.version;
}
