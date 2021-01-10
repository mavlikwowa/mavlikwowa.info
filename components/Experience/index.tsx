/* Libraries */
import React, { useContext } from 'react';
import differenceInYears from 'date-fns/differenceInYears';
import addYears from 'date-fns/addYears';
import differenceInMonths from 'date-fns/differenceInMonths';
import format from 'date-fns/format';
import { ru, enUS } from 'date-fns/locale';
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
import { EmployeePositionProps, CompanyProps } from '../../data/interfaces';
/* Data */
import { EXP, BLOCKIDS } from '../../data/texts';
/* Utils */
import { capitalizeFirstLetter } from '../../utils/utils';

const Experience: React.FC = () => {
  const { isEnglish } = useContext(LanguageContext);
  // Finds start of my career (June 2012)
  const startCareerDt = Object.values(EXP)
    .filter((item: CompanyProps) => item.position)
    .map(
      (company: CompanyProps) =>
        company.position
          .map((position: EmployeePositionProps) => position.dateStart)
          .sort()[0]
    )
    .sort()[0];
  // sorts a position array
  const sortPositions = (
    prev: EmployeePositionProps,
    next: EmployeePositionProps
  ): number => {
    if (isAfter(prev.dateStart, next.dateStart)) return -1;
    if (!isAfter(prev.dateStart, next.dateStart)) return 1;
    return 0;
  };
  // returns periods of work (string)
  const getPeriodPosition = (dateStart: Date, dateEnd?: Date): string => {
    return `${capitalizeFirstLetter(
      format(dateStart, 'LLLL yyyy', { locale: isEnglish ? enUS : ru })
    )} - ${
      dateEnd
        ? capitalizeFirstLetter(
            format(dateEnd, 'LLLL yyyy', { locale: isEnglish ? enUS : ru })
          )
        : `${isEnglish ? 'cur.time' : 'наст. время'}`
    }`;
  };
  // returns duration of position (amount of years and months)
  const getDuration = (dateStart: Date, dateEnd?: Date): string => {
    const currentDate = new Date();
    const endDate = dateEnd || currentDate;
    // Amount of years
    const years = differenceInYears(endDate, dateStart);
    // Amount of month
    const month =
      years > 0
        ? differenceInMonths(endDate, addYears(dateStart, years))
        : differenceInMonths(endDate, dateStart);
    const ruYearsName = years > 3 ? ' л. ' : ' г. ';
    return `(${years > 0 ? `${years}${isEnglish ? ' y. ' : ruYearsName}` : ''}${
      month > 0 ? `${month}${isEnglish ? ' m.' : ' м.'}` : ''
    })`;
  };

  return (
    <StyledExperience id={BLOCKIDS.ExpId}>
      <h1>{isEnglish ? EXP.header.en : EXP.header.ru}</h1>
      <h3>{getDuration(startCareerDt)}</h3>
      <StyledCompanyName>
        <img alt="ITMH" src="/img/itmh.png" />
        <h2>{isEnglish ? EXP.itmh.en : EXP.itmh.ru}</h2>
      </StyledCompanyName>
      {/* Certainly, I could parse a both of companies in a one map function. However, I'm lazy and also it`ll worsen reading of code :) */}
      {EXP.itmh.position
        .sort(sortPositions)
        .map((item: EmployeePositionProps) => {
          return (
            <StyledPositionRow key={item.en}>
              <h2>{isEnglish ? item.en : item.ru}</h2>
              <h4>
                {getPeriodPosition(item.dateStart, item.dateEnd)}
                <br />
                {getDuration(item.dateStart, item.dateEnd)}
              </h4>
            </StyledPositionRow>
          );
        })}
      <StyledCompanyName>
        <img alt="ACS" src="/img/acs.png" />
        <h2>{isEnglish ? EXP.acs.en : EXP.acs.ru}</h2>
      </StyledCompanyName>
      {EXP.acs.position
        .sort(sortPositions)
        .map((item: EmployeePositionProps) => {
          return (
            <StyledPositionRow key={item.en}>
              <h2>{isEnglish ? item.en : item.ru}</h2>
              <h4>
                {getPeriodPosition(item.dateStart, item.dateEnd)}
                <br />
                {getDuration(item.dateStart, item.dateEnd)}
              </h4>
            </StyledPositionRow>
          );
        })}
    </StyledExperience>
  );
};

export default Experience;
