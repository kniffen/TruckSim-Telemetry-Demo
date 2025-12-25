import { JSX, useCallback, useEffect, useState } from 'react';
import { Box } from './Box';
import { formatDistance, formatSpeed, formatTime } from '../utils';

export const Navigation = function (): JSX.Element {
  const getValues = useCallback(() => {
    const telemetry = window.getTelemetry();

    return items.map(([key]) => {
      switch (key) {
        case 'routeDistance': {
          return formatDistance(telemetry.game, telemetry[key] / 1_000);
        }
        case 'restStop': {
          const value = telemetry[key] < 0 ? 0 : telemetry[key];
          const hours = Math.floor(value / 60) % 24;
          const min = value % 60;

          return `${hours}h ${min}min`;
        }
        case 'speedLimit': {
          return formatSpeed(telemetry.game, telemetry[key]);
        }
        case 'routeTime': {
          const estTime = Math.floor(telemetry.timeAbs + telemetry[key] / 60);
          const hrs = Math.floor(telemetry[key] / 3600);
          const min = Math.floor((telemetry[key] % 3600) / 60);
          return `${hrs}h ${min}m (${formatTime(estTime)})`;
        }
        case 'routeTimeReal': {
          const scale = telemetry.game === 2 ? 20 : 19;
          const real = Math.round(telemetry.routeTime / scale);
          const estTime = new Date(Date.now() + real * 1_000);
          const hrs = Math.floor(real / 3600);
          const min = Math.floor((real % 3600) / 60);
          const estTimeStr = `${estTime.getHours().toString().padStart(2, '0')}:${estTime
            .getMinutes()
            .toString()
            .padStart(2, '0')}`;

          return `${hrs}h ${min}m (${estTimeStr})`;
        }
      }
    });
  }, []);

  const [values, setValues] = useState<string[]>(getValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(getValues());
    }, 1_000);

    return () => {
      clearInterval(interval);
    };
  }, [getValues]);

  return (
    <Box title="Navigation">
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
  ['routeDistance', 'Route distance'],
  ['restStop', 'Next rest stop in'],
  ['speedLimit', 'Speed limit'],
  ['routeTime', 'ETA (game)'],
  ['routeTimeReal', 'ETA (real)']
] as const;
