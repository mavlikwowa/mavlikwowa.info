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
  StyledPositionRow,
  StyledCompanyBlock,
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
      <h3>{isEnglish ? EXP.header.en : EXP.header.ru}</h3>
      <h1>{getDuration(startCareerDt)}</h1>
      {/* Certainly, I could parse a both of companies in a one map-function.
      However, I didn't do it, because I'm lazy and also it`ll worsen reading of code :) */}
      <StyledCompanyBlock>
        <img alt="ITMH" src="/img/itmh.png" />
        <div>
          <img alt="ITMH" src="/img/itmh.png" />
          <h3>{isEnglish ? EXP.itmh.en : EXP.itmh.ru}</h3>
          {EXP.itmh.position
            .sort(sortPositions)
            .map((item: EmployeePositionProps) => {
              return (
                <StyledPositionRow key={item.en}>
                  <h4>{isEnglish ? item.en : item.ru}</h4>
                  <h4>
                    {getPeriodPosition(item.dateStart, item.dateEnd)}&nbsp;
                    {getDuration(item.dateStart, item.dateEnd)}
                  </h4>
                </StyledPositionRow>
              );
            })}
        </div>
      </StyledCompanyBlock>
      <StyledCompanyBlock>
        <img alt="ACS" src="/img/acs.png" />
        <div>
          <img alt="ACS" src="/img/acs.png" />
          <h3>{isEnglish ? EXP.acs.en : EXP.acs.ru}</h3>
          {EXP.acs.position
            .sort(sortPositions)
            .map((item: EmployeePositionProps) => {
              return (
                <StyledPositionRow key={item.en}>
                  <h4>{isEnglish ? item.en : item.ru}</h4>
                  <h4>
                    {getPeriodPosition(item.dateStart, item.dateEnd)}&nbsp;
                    {getDuration(item.dateStart, item.dateEnd)}
                  </h4>
                </StyledPositionRow>
              );
            })}
        </div>
      </StyledCompanyBlock>
    </StyledExperience>
  );
};

export default Experience;
