import { Dispatch, SetStateAction } from 'react';

export interface LanguageProviderProps {
  isEnglish: boolean;
  setIsEnglish: Dispatch<SetStateAction<boolean>>;
}
