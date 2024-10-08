import React, { createContext, useContext, ReactNode } from 'react';
import LoggingService from './LoggingService';

interface LoggingContextType {
  log: (message: string) => void;
  error: (error: Error) => void;
}

const LoggingContext = createContext<LoggingContextType>({
  log: (message: string) => {},
  error: (error: Error) => {},
});

export const useLogging = () => useContext(LoggingContext);

export const LoggingProvider = ({ children }: { children: ReactNode }) => {
  const log = (message: string) => LoggingService.log(message);
  const error = (error: Error) => LoggingService.error(error);

  return (
    <LoggingContext.Provider value={{ log, error }}>
      {children}
    </LoggingContext.Provider>
  );
};
