import { JSX, useCallback, useEffect, useState } from 'react';
import { Box } from './Box';
import { formatTime, formatCurrency, formatMass, formatDistance } from '../utils';

export const Job = function (): JSX.Element {
  const getValues = useCallback(() => {
    const telemetry = window.getTelemetry();
    return items.map(([key]) => {
      switch (key) {
        case 'source': {
          return `${telemetry.citySrc || telemetry.citySrcId} - ${telemetry.compSrc || telemetry.compSrcId}`;
        }
        case 'destination': {
          return `${telemetry.cityDst || telemetry.cityDstId} - ${telemetry.compDst || telemetry.compDstId}`;
        }
        case 'plannedDistanceKm': {
          return formatDistance(telemetry.game, telemetry[key]);
        }
        case 'jobMarket': {
          return telemetry[key].replaceAll('_', ' ');
        }
        case 'specialJob':
        case 'isCargoLoaded': {
          return telemetry[key] ? 'Yes' : 'No';
        }
        case 'timeAbsDelivery': {
          return formatTime(telemetry[key]);
        }
        case 'jobIncome': {
          return formatCurrency(telemetry.game, telemetry[key]);
        }
        case 'cargoMass': {
          return formatMass(telemetry.game, telemetry[key]);
        }
        case 'cargoDamage': {
          return `${Math.round(telemetry[key] * 100)}%`;
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
    }, 1_000);

    return () => {
      clearInterval(interval);
    };
  }, [getValues]);

  return (
    <Box title="Job">
      <div className="list">
        {items.map(([key, text], i) => (
          <div key={key} className="list-item">
            <span>{text}</span>
            <span>{values[i]}</span>
          </div>
        ))}
      </div>
    </Box>
  );
};

const items = [
  ['source', 'Source'],
  ['destination', 'Destination'],
  ['jobMarket', 'Market'],
  ['timeAbsDelivery', 'Deliver by'],
  ['plannedDistanceKm', 'Planned distance'],
  ['jobIncome', 'Estimated income'],
  ['specialJob', 'Special transport'],
  ['cargo', 'Cargo'],
  ['cargoMass', 'Cargo mass'],
  ['unitCount', 'Units'],
  ['unitMass', 'Unit mass'],
  ['cargoDamage', 'Cargo damage'],
  ['isCargoLoaded', 'Cargo loaded']
] as const;
