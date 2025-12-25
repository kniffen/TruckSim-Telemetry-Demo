import { createContext } from 'react';

export type TSTEvent = {
  timestamp: number;
  value: string;
};

export const eventsContext = createContext<TSTEvent[]>([]);
