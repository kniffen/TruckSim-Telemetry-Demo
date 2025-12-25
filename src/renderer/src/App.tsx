import { useEffect, useState } from 'react';
import { Game } from './components/Game';
import { Job } from './components/Job';
import { HashRouter, NavLink, Route, Routes } from 'react-router';
import { Truck } from './components/Truck';
import { Navigation } from './components/Navigation';
import { Versions } from './components/Versions';
import { Controls } from './components/Controls';
import { Trailer } from './components/Trailer';
import { Events } from './components/Events';
import { EventsProvider } from './events/EventsProvider';

function App(): React.JSX.Element {
  return (
    <EventsProvider>
      <h1>TruckSim Telemetry</h1>
      <Content />
    </EventsProvider>
  );
}

const Content = function (): React.JSX.Element {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const telemetry = window.getTelemetry();
      setConnected(telemetry.sdkActive);
    }, 1_000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!connected) {
    return <div>Waiting for game to connect...</div>;
  }

  return (
    <HashRouter>
      <nav className="nav">
        <NavLink to="/">Game</NavLink>
        <NavLink to="/truck">Truck</NavLink>
        <NavLink to="/trailer">Trailer</NavLink>
        <NavLink to="/job">Job</NavLink>
        <NavLink to="/navigation">Navigation</NavLink>
        <NavLink to="/controls">Controls</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/versions">Versions</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/truck" element={<Truck />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route path="/job" element={<Job />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Versions" element={<Versions />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
