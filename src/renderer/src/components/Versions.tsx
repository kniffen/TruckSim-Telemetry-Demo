import { useState } from 'react';
import { Box } from './Box';

export const Versions = function (): React.JSX.Element {
  const [versions] = useState(window.electron.process.versions);

  return (
    <Box title="Versions">
      <div className="list">
        <div className="list-item">
          <span>Electron</span>
          <span>v{versions.electron}</span>
        </div>
        <div className="list-item">
          <span>Chromium</span>
          <span>v{versions.chrome}</span>
        </div>
        <div className="list-item">
          <span>Node</span>
          <span>v{versions.node}</span>
        </div>
        <div className="list-item">
          <span>TruckSim Telemetry</span>
          <span>v{window.tstVersion}</span>
        </div>
      </div>
    </Box>
  );
};
