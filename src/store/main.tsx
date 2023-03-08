import React, { createContext, ReactNode, useState } from 'react';

import useTheme from '../hooks/theme';

type ContextProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  message: string;
  setMessage: Function;
};

type MainProviderProps = {
    children: ReactNode
}

export const MainContext = createContext<ContextProps>({
  theme: 'light',
  toggleTheme: () => {},
  message: '',
  setMessage: () => {}
});

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const [ message, setMessage ] = useState<string>('');

  return (
    <MainContext.Provider
      value={{
        theme: theme as 'light' | 'dark',
        toggleTheme,
        message,
        setMessage
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
