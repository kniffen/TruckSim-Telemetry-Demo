import { JSX, useCallback, useEffect, useState } from 'react';
import { Box } from './Box';

export const Controls = function (): JSX.Element {
  const formatValues = useCallback(() => {
    const telemetry = window.getTelemetry();
    return items.map(([key]) => {
      switch (key) {
        case 'userSteer':
        case 'gameSteer': {
          return -(telemetry[key] * 450).toFixed(0) + '°';
        }
        case 'userThrottle':
        case 'gameThrottle':
        case 'userBrake':
        case 'gameBrake':
        case 'userClutch':
        case 'gameClutch': {
          return `${(telemetry[key] * 100).toFixed(0)}%`;
        }
        case 'hshifterPosition':
        case 'hshifterBitmask':
        case 'hshifterResulting': {
          return telemetry.hshifterPosition[telemetry.shifterSlot];
        }
        default: {
          return telemetry[key];
        }
      }
    });
  }, []);

  const [values, setValues] = useState<(string | number)[]>(formatValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(formatValues());
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [formatValues]);

  return (
    <Box title="Controls">
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
  ['userSteer', 'Steering wheel position'],
  ['gameSteer', 'Steering wheel position (simulated)'],
  ['userThrottle', 'Throttle position'],
  ['gameThrottle', 'Throttle position (simulated)'],
  ['userBrake', 'Brake position'],
  ['gameBrake', 'Brake position (simulated)'],
  ['userClutch', 'Clutch position'],
  ['gameClutch', 'Clutch position (simulated)'],
  ['shifterType', 'Shifter type'],
  ['shifterSlot', 'Shifter slot position'],
  ['hshifterPosition', 'H-shifter position'],
  ['hshifterBitmask', 'H-shifter bitmask'],
  ['hshifterResulting', 'H-shifter resulting gear']
] as const;
