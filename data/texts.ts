/* Interfaces */
import { MultiLanguagesInterface, ExperienceProps } from './interfaces';

// My professional skills
export const SKILLS: string[] = [
  'React',
  'Vue',
  'TypeScript',
  'JavaScript',
  'Webpack',
  'T-SQL',
  'MySQL',
  'NextJS',
  'Stylus',
  'CSS-in-JS',
];

// The First|Second name
export const FAMILYNAME: MultiLanguagesInterface = {
  ru: 'Владимир Маликов',
  en: 'Vladimir Malikov',
};

// Experience texts
export const EXP: ExperienceProps = {
  header: {
    ru: 'Опыт работы',
    en: 'Experience',
  },
  itmh: {
    ru: 'ITM Холдинг',
    en: 'ITM Holding',
    position: [
      {
        ru: 'Frontend разработчик',
        en: 'Frontend Developer',
        dateStart: new Date(2020, 0),
      },
      {
        ru: 'Менеджер проектов',
        en: 'Project Manager',
        dateStart: new Date(2017, 9),
        dateEnd: new Date(2020, 0),
      },
      {
        ru: 'Ведущий инженер по эксплуатации ПО',
        en: 'Senior software maintenance engineer',
        dateStart: new Date(2015, 11),
        dateEnd: new Date(2017, 9),
      },
      {
        ru: 'Инженер по эксплуатации ПО',
        en: 'Software maintenance engineer',
        dateStart: new Date(2015, 1),
        dateEnd: new Date(2015, 11),
      },
    ],
  },
  acs: {
    ru: 'Эй-Си-Эс',
    en: 'ACS',
    position: [
      {
        ru: 'Руководитель проекта',
        en: 'Project Lead',
        dateStart: new Date(2014, 5),
        dateEnd: new Date(2015, 1),
      },
      {
        ru: 'Системный аналитик',
        en: 'Systems Analyst',
        dateStart: new Date(2012, 8),
        dateEnd: new Date(2014, 5),
      },
      {
        ru: 'Младший системный аналитик',
        en: 'Junior Systems Analyst',
        dateStart: new Date(2012, 5),
        dateEnd: new Date(2012, 8),
      },
    ],
  },
};
