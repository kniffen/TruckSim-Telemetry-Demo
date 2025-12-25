import React, { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { Box } from './Box';
import { formatTime, formatTimestamp } from '../utils';

export const Game = function (): React.JSX.Element {
  const getValues = useCallback(() => {
    const telemetry = window.getTelemetry();
    return items.map(([key]) => {
      switch (key) {
        case 'game': {
          return gameNames[telemetry.game];
        }
        case 'version': {
          return `${telemetry.versionMajor}.${telemetry.versionMinor}`;
        }
        case 'telemetryVersion': {
          return `${telemetry.telemetryVersionGameMajor}.${telemetry.telemetryVersionGameMinor}`;
        }
        case 'sdkActive':
        case 'paused': {
          return telemetry[key] ? 'Yes' : 'No';
        }
        case 'time':
        case 'simulatedTime':
        case 'renderTime': {
          return formatTimestamp(telemetry[key]);
        }
        case 'timeAbs': {
          return formatTime(telemetry[key]);
        }
        case 'scale': {
          return `1:${telemetry[key]}`;
        }
        default: {
          return telemetry[key].toString();
        }
      }
    });
  }, []);

  const [values, setValues] = useState<string[]>(getValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(getValues());
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [getValues]);

  return (
    <Box title="Game information">
      <div className="list">
        {items.map(([key, text], i) => (
          <div key={key} className="list-item">
            <span>{text} </span>
            <span>{values[i]}</span>
          </div>
        ))}
      </div>
    </Box>
  );
};

const items = [
  ['game', 'Game'],
  ['version', 'Version'],
  ['telemetryVersion', 'Telemetry version'],
  ['telemetryPluginRevision', 'Telemetry plugin revision'],
  ['sdkActive', 'SDK active'],
  ['paused', 'Paused'],
  ['time', 'Time'],
  ['simulatedTime', 'Simulated time'],
  ['renderTime', 'Render time'],
  ['multiplayerTimeOffset', 'Multiplayer time offset'],
  ['timeAbs', 'Game time'],
  ['maxTrailerCount', 'Max trailers'],
  ['scale', 'Scale']
] as const;

const gameNames: Record<number, string> = {
  0: 'Unknown',
  1: 'Euro Truck Simulator 2',
  2: 'American Truck Simulator'
};
