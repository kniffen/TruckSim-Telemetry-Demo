import { JSX, useCallback, useEffect, useState } from 'react';
import { Box } from './Box';

export const Trailer = function (): JSX.Element {
  const formatValues = useCallback(() => {
    const telemetry = window.getTelemetry();
    const trailerTelemetry = telemetry.trailers[0];

    return items.map(([key]) => {
      switch (key) {
        case 'licensePlate': {
          return `${trailerTelemetry[key]} (${trailerTelemetry.licensePlateCountry})`;
        }
        case 'attached': {
          return trailerTelemetry[key] ? 'Attached' : 'Detached';
        }
        case 'cargoDamage':
        case 'wearChassis':
        case 'wearWheels':
        case 'wearBody': {
          return `${(trailerTelemetry[key] * 100).toFixed(0)}%`;
        }
        case 'trailerLiftAxle': {
          return trailerTelemetry[key] ? 'Engaged' : 'Disengaged';
        }
        case 'trailerLiftAxleIndicator': {
          return trailerTelemetry[key] ? 'On' : 'Off';
        }
        case 'brand': {
          return trailerTelemetry[key] || trailerTelemetry.brandId;
        }
        case 'name': {
          return trailerTelemetry[key] || trailerTelemetry.id;
        }
        default: {
          return trailerTelemetry[key].toString();
        }
      }
    });
  }, []);

  const [values, setValues] = useState<string[]>(formatValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(formatValues());
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [formatValues]);

  return (
    <Box title="Trailer">
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
  ['brand', 'Brand'],
  ['name', 'Name'],
  ['licensePlate', 'License plate'],
  ['bodyType', 'Body type'],
  ['chainType', 'Chain type'],
  ['attached', 'Attached'],
  ['wheelCount', 'Wheels'],
  ['cargoAcessoryId', 'Cargo accessory'],
  ['cargoDamage', 'Cargo damage'],
  ['wearChassis', 'Chassis wear'],
  ['wearWheels', 'Wheels wear'],
  ['wearBody', 'Body wear'],
  ['trailerLiftAxle', 'Lift axle'],
  ['trailerLiftAxleIndicator', 'Lift axle indicator']
] as const;
