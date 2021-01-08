/* Libraries */
import React, { useContext } from 'react';
import differenceInYears from 'date-fns/differenceInYears';
import addYears from 'date-fns/addYears';
import differenceInMonths from 'date-fns/differenceInMonths';
import format from 'date-fns/format';
import isAfter from 'date-fns/isAfter';
/* Styled Components */
import {
  StyledExperience,
  StyledCompanyName,
  StyledPositionRow,
} from './styles';
/* Contexts */
import { LanguageContext } from '../Providers/LanguageProvider';
/* Interfaces */
import { EmployeePositionProps } from '../../data/interfaces';
/* Data */
import { EXP } from '../../data/texts';

const Experience: React.FC = () => {
  const { isEnglish } = useContext(LanguageContext);
  // June 2012
  const startCareerDt = new Date(2012, 7, 1);
  const currentDate = new Date();
  // Amount of years
  const currentExpYears = differenceInYears(currentDate, startCareerDt);
  // Amount of month
  const currentExpMonth = differenceInMonths(
    currentDate,
    addYears(startCareerDt, currentExpYears)
  );
  // sorts a position array
  const sortPositions = (
    prev: EmployeePositionProps,
    next: EmployeePositionProps
  ) => {
    if (isAfter(prev.dateStart, next.dateStart)) return 1;
    if (!isAfter(prev.dateStart, next.dateStart)) return -1;
    return 0;
  };
  return (
    <StyledExperience>
      <h1>{isEnglish ? EXP.header.en : EXP.header.ru}</h1>
      <h2>{`Общий опыт работы: ${currentExpYears} лет ${
        currentExpMonth ? `${currentExpMonth} месяцев` : ''
      }`}</h2>
      <StyledCompanyName>
        <img alt="ITMH" src="/img/itmh.png" />
        <h2>{isEnglish ? EXP.itmh.en : EXP.itmh.ru}</h2>
      </StyledCompanyName>
      {EXP.itmh.position
        .sort(sortPositions)
        .map((item: EmployeePositionProps) => {
          return (
            <StyledPositionRow>
              <h2>{isEnglish ? item.en : item.ru}</h2>
              <h4>{`${format(item.dateStart, 'MMMM yyyy')} - ${
                item.dateEnd ? format(item.dateEnd, 'MMMM yyyy') : 'cur.time'
              }`}</h4>
            </StyledPositionRow>
          );
        })}
      {/* <StyledPositionRow> */}
      {/*  <h2>Frontend Developer</h2> */}
      {/*  <h4>Январь 2020 - наст. время<br />(1 год)</h4> */}
      {/* </StyledPositionRow> */}
      {/* <StyledPositionRow> */}
      {/*  <h2>Project Manager</h2> */}
      {/*  <h4>Октябрь 2017 — Январь 2020<br />(2 года 4 месяца)</h4> */}
      {/* </StyledPositionRow> */}
    </StyledExperience>
  );
};

export default Experience;
