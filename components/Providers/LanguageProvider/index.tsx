/* Libraries */
import React, { createContext, useState } from 'react';

/* Interfaces */
import { LanguageProviderProps } from './interfaces';

export const LanguageContext = createContext<LanguageProviderProps>({
  isEnglish: false,
  setIsEnglish: () => {
    /* init */
  },
});

const { Provider } = LanguageContext;

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // A state of switcher`s toggle
  const [isEnglish, setIsEnglish] = useState<boolean>(false);
  return (
    <Provider
      value={{
        isEnglish,
        setIsEnglish,
      }}
    >
      {children}
    </Provider>
  );
};

export default LanguageProvider;
