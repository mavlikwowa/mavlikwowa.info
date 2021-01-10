/* Libraries */
import React, { useContext } from 'react';
/* Styled Components */
import { StyledContacts } from './styles';
/* Data */
import { CONTACTS } from '../../data/texts';
/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';

const Contacts: React.FC = () => {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <StyledContacts>
      <h1>{isEnglish ? CONTACTS.en : CONTACTS.ru}</h1>
    </StyledContacts>
  );
};

export default Contacts;
