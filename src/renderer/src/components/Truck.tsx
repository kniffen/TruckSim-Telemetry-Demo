import { JSX, useCallback, useEffect, useState } from 'react';
import { Box } from './Box';
import { formatDistance, formatFluid, formatSpeed } from '../utils';

export const Truck = function (): JSX.Element {
  const formatValues = useCallback(() => {
    const telemetry = window.getTelemetry();

    const truckValues = truck.map(([key]) => {
      switch (key) {
        case 'truckBrand': {
          return telemetry[key] || telemetry.truckBrandId;
        }
        case 'truckName': {
          return telemetry[key] || telemetry.truckId;
        }
        case 'truckLicensePlate': {
          return `${telemetry[key]} (${telemetry.truckLicensePlateCountry})`;
        }
        case 'truckOdometer': {
          return formatDistance(telemetry.game, telemetry[key]);
        }
        case 'speed':
        case 'cruiseControlSpeed': {
          return formatSpeed(telemetry.game, Math.abs(telemetry[key]));
        }
        case 'cruiseControl':
        case 'electricEnabled':
        case 'wipers': {
          return telemetry[key] ? 'Enabled' : 'Disabled';
        }
        case 'liftAxle': {
          return telemetry[key] ? 'Engaged' : 'Disengaged';
        }
        default: {
          return telemetry[key];
        }
      }
    });

    const fluidValues = fluids.map(([key]) => {
      switch (key) {
        case 'fuel':
        case 'adblue':
        case 'fuelCapacity':
        case 'adblueCapacity': {
          return formatFluid(telemetry.game, telemetry[key]);
        }
        case 'fuelAvgConsumption': {
          return (telemetry[key] * 100).toFixed(1) + ' l/100km';
        }
        case 'fuelWarningFactor':
        case 'adblueWarningFactor': {
          return telemetry[key].toFixed(2);
        }
        case 'fuelRange': {
          return formatDistance(telemetry.game, telemetry[key]);
        }
        case 'fuelWarning':
        case 'adblueWarning': {
          return telemetry[key] ? 'Active' : 'Inactive';
        }
        default: {
          return telemetry[key];
        }
      }
    });

    const engineValues = engine.map(([key]) => {
      switch (key) {
        case 'oilPressure': {
          return `${telemetry[key].toFixed(3)} PSI`;
        }
        case 'oilTemperature':
        case 'waterTemperature': {
          return `${telemetry[key].toFixed(1)} °C`;
        }
        case 'batteryVoltage': {
          return `${telemetry[key].toFixed(2)} V`;
        }
        case 'engineRpm':
        case 'engineRpmMax': {
          return telemetry[key].toFixed(0);
        }
        case 'engineEnabled': {
          return telemetry[key] ? 'Running' : 'Off';
        }
        case 'motorBrake': {
          return telemetry[key] ? 'Enabled' : 'Disabled';
        }
        case 'oilPressureWarning':
        case 'waterTemperatureWarning':
        case 'batteryVoltageWarning': {
          return telemetry[key] ? 'Active' : 'Inactive';
        }
        case 'oilPressureWarningFactor':
        case 'waterTemperatureWarningFactor':
        case 'batteryVoltageWarningFactor': {
          return telemetry[key].toFixed(2);
        }
        default: {
          return telemetry[key];
        }
      }
    });

    const transmissionValues = transmission.map(([key]) => {
      switch (key) {
        case 'gear':
        case 'gearDashboard': {
          if (telemetry[key] === 0) {
            return 'N';
          } else if (telemetry[key] < 0) {
            return `R${Math.abs(telemetry[key])}`;
          } else {
            return telemetry[key].toString();
          }
        }
        case 'gearDifferential': {
          return telemetry[key].toFixed(2);
        }
        case 'differentialLocked': {
          return telemetry[key] ? 'Engaged' : 'Disengaged';
        }
        default: {
          return telemetry[key];
        }
      }
    });

    const brakesValues = brakes.map(([key]) => {
      switch (key) {
        case 'airPressure': {
          return `${telemetry[key].toFixed(1)} PSI`;
        }
        case 'brakeTemperature': {
          return `${telemetry[key].toFixed(1)} °C`;
        }
        case 'parkBrake': {
          return telemetry[key] ? 'Engaged' : 'Disengaged';
        }
        case 'airPressureWarning':
        case 'airPressureEmergency': {
          return telemetry[key] ? 'Active' : 'Inactive';
        }
        case 'airPressureWarningFactor':
        case 'airPressureEmergencyFactor': {
          return telemetry[key].toFixed(2);
        }
        default: {
          return telemetry[key];
        }
      }
    });

    const lightValues = lights.map(([key]) => {
      switch (key) {
        case 'lightsAuxFront':
        case 'lightsAuxRoof': {
          switch (telemetry[key]) {
            case 1:
              return 'Dimmed';
            case 2:
              return 'On';
            default:
              return 'Off';
          }
        }
        case 'lightsDashboard': {
          return Math.round(telemetry[key] * 100).toString() + '%';
        }
        default: {
          return telemetry[key] ? 'On' : 'Off';
        }
      }
    });

    const wearValues = wear.map(([key]) => {
      return `${(telemetry[key] * 100).toFixed(0)}%`;
    });

    return [
      truckValues,
      fluidValues,
      engineValues,
      transmissionValues,
      brakesValues,
      lightValues,
      wearValues
    ];
  }, []);

  const [values, setValues] = useState<(string | number)[][]>(formatValues());

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(formatValues());
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [formatValues]);

  return (
    <div className="truck-container">
      <Box title="Truck">
        <div className="list">
          {truck.map(([key, text], i) => (
            <div key={key} className="list-item">
              <span>{text}</span>
              <span>{values[0][i]}</span>
            </div>
          ))}
        </div>
      </Box>

      <Box title="Fluids">
        <div className="list">
          {fluids.map(([key, text], i) => (
            <div key={key} className="list-item">
              <span>{text}</span>
              <span>{values[1][i]}</span>
            </div>
          ))}
        </div>
      </Box>

      <Box title="Engine">
        <div className="list">
          {engine.map(([key, text], i) => (
            <div key={key} className="list-item">
              <span>{text}</span>
              <span>{values[2][i]}</span>
            </div>
          ))}
        </div>
      </Box>

      <Box title="Transmission">
        <div className="list">
          {transmission.map(([key, text], i) => (
            <div key={key} className="list-item">
              <span>{text}</span>
              <span>{values[3][i]}</span>
            </div>
          ))}
        </div>
      </Box>

      <Box title="Brakes">
        <div className="list">
          {brakes.map(([key, text], i) => (
            <div key={key} className="list-item">
              <span>{text}</span>
              <span>{values[4][i]}</span>
            </div>
          ))}
        </div>
      </Box>

      <Box title="Lights">
        <div className="list">
          {lights.map(([key, text], i) => (
            <div key={key} className="list-item">
              <span>{text}</span>
              <span>{values[5][i]}</span>
            </div>
          ))}
        </div>
      </Box>

      <Box title="Wear">
        <div className="list">
          {wear.map(([key, text], i) => (
            <div key={key} className="list-item">
              <span>{text}</span>
              <span>{values[6][i]}</span>
            </div>
          ))}
        </div>
      </Box>
    </div>
  );
};

const truck = [
  ['truckBrand', 'Brand'],
  ['truckName', 'Name'],
  ['truckLicensePlate', 'License plate'],
  ['speed', 'Speed'],
  ['cruiseControl', 'Cruise control'],
  ['cruiseControlSpeed', 'Cruise control speed'],
  ['truckOdometer', 'Odometer'],
  ['liftAxle', 'Lift axle'],
  ['truckWheelCount', 'Wheels'],
  ['electricEnabled', 'Electric'],
  ['wipers', 'Wipers']
] as const;

const fluids = [
  ['fuel', 'Fuel'],
  ['fuelCapacity', 'Fuel capacity'],
  ['fuelAvgConsumption', 'Average fuel consumption'],
  ['fuelRange', 'Fuel range'],
  ['fuelWarning', 'Fuel warning'],
  ['fuelWarningFactor', 'Fuel warning factor'],
  ['adblue', 'AdBlue'],
  ['adblueCapacity', 'AdBlue capacity'],
  ['adblueWarning', 'AdBlue warning'],
  ['adblueWarningFactor', 'AdBlue warning factor']
] as const;

const engine = [
  ['engineEnabled', 'Engine state'],
  ['oilPressure', 'Oil pressure'],
  ['oilTemperature', 'Oil temperature'],
  ['oilPressureWarning', 'Oil pressure warning'],
  ['oilPressureWarningFactor', 'Oil pressure warning factor'],
  ['waterTemperature', 'Water temperature'],
  ['waterTemperatureWarning', 'Water temperature warning'],
  ['waterTemperatureWarningFactor', 'Water temperature warning factor'],
  ['batteryVoltage', 'Battery voltage'],
  ['batteryVoltageWarning', 'Battery voltage warning'],
  ['batteryVoltageWarningFactor', 'Battery voltage warning factor'],
  ['engineRpm', 'Engine RPM'],
  ['engineRpmMax', 'Max engine RPM'],
  ['motorBrake', 'Engine brake']
] as const;

const transmission = [
  ['gears', 'Forward gears'],
  ['gearsReverse', 'Reverse gears'],
  ['gear', 'Gear'],
  ['gearDashboard', 'Gear (displayed)'],
  ['selectorCount', 'Selectors'],
  ['retarderStepCount', 'Retarder steps'],
  ['retarderBrake', 'Retarder level'],
  ['gearDifferential', 'Gear differential ratio'],
  ['differentialLocked', 'Differential lock']
] as const;

const brakes = [
  ['airPressure', 'Air pressure (brakes)'],
  ['airPressureWarning', 'Air pressure warning'],
  ['airPressureWarningFactor', 'Air pressure warning factor'],
  ['airPressureEmergency', 'Air pressure emergency'],
  ['airPressureEmergencyFactor', 'Air pressure emergency factor'],
  ['brakeTemperature', 'Brake temperature'],
  ['parkBrake', 'Park brake engaged']
] as const;

const lights = [
  ['lightsParking', 'Parking'],
  ['lightsBeamLow', 'Low beams'],
  ['lightsBeamHigh', 'High beams'],
  ['lightsReverse', 'Reverse'],
  ['blinkerLeftActive', 'Left blinker active'],
  ['blinkerLeftOn', 'Left blinker'],
  ['blinkerRightActive', 'Right blinker active'],
  ['blinkerRightOn', 'Right blinker'],
  ['lightsBeacon', 'Beacon'],
  ['lightsBrake', 'Brake'],
  ['lightsHazard', 'Hazards'],
  ['lightsDashboard', 'Dashboard backlight'],
  ['lightsAuxFront', 'Front aux lights'],
  ['lightsAuxRoof', 'Roof aux lights'],
  ['liftAxleIndicator', 'Lift axle indicator']
] as const;

const wear = [
  ['wearEngine', 'Engine'],
  ['wearTransmission', 'Transmission'],
  ['wearChassis', 'Chassis'],
  ['wearCabin', 'Cabin'],
  ['wearWheels', 'Wheels']
];
