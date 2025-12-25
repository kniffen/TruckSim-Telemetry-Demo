import { useCallback, useEffect, useState } from 'react';
import { eventsContext, TSTEvent } from './eventsContext';

export const EventsProvider = function ({
  children
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [events, setEvents] = useState<TSTEvent[]>([]);

  const eventHandler = useCallback((event: Event) => {
    setEvents((prevEvents) => [(event as CustomEvent).detail, ...prevEvents]);
  }, []);

  useEffect(() => {
    window.addEventListener('tst-event', eventHandler);

    return () => {
      window.removeEventListener('tst-event', eventHandler);
    };
  }, [eventHandler]);

  return <eventsContext.Provider value={events}>{children}</eventsContext.Provider>;
};
