import { JSX, useContext } from 'react';
import { Box } from './Box';
import { eventsContext } from '@renderer/events/eventsContext';

export const Events = function (): JSX.Element {
  const events = useContext(eventsContext);

  return (
    <Box title="Events">
      <div className="list">
        {events.map(({ timestamp, value }) => (
          <div key={timestamp} className="list-item">
            <span>{timestamp}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </Box>
  );
};
