/* Libraries */
import React, { useContext } from 'react';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';
/* Styled Components */
import { StyledContacts } from './styles';
/* Data */
import { CONTACTS } from '../../data/texts';
/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';
/* Inteface */
import { ContactLinkProps } from '../../data/interfaces';

const Contacts: React.FC = () => {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <StyledContacts>
      <h1>{isEnglish ? CONTACTS.en : CONTACTS.ru}</h1>
      <div>
        {CONTACTS.contactLink.map((item: ContactLinkProps) => {
          return (
            <Link key={uuid()} href={item.href} passHref>
              <a target="_blank" rel="noreferrer">
                <img alt={item.alt} title={item.title} src={item.src} />
              </a>
            </Link>
          );
        })}
      </div>
    </StyledContacts>
  );
};

export default Contacts;
