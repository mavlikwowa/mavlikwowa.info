/* Interfaces */
import React from 'react';
import {
  MultiLanguagesInterface,
  ExperienceProps,
  AboutProps,
  ContactsProps,
} from './interfaces';

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

export const ABOUT: AboutProps = {
  ru: 'Обо мне',
  en: 'About me',
  SliderItem: [
    {
      backgroundUrl: '/img/footweight.png',
      ruChild: (
        <h3>
          Рост - 192 см. Размер ноги - 47.
          <br />
          Но минусов от этого больше чем плюсов.
        </h3>
      ),
      enChild: (
        <h3>
          Height: 6.3 feet. Foot size: 11.875 Inches.
          <br />
          However, it brings more limitations than benefits.
        </h3>
      ),
    },
    {
      backgroundUrl: '/img/hobby.png',
      color: 'ivory',
      boxShadow: 'inset 0px 0px 250px 40px #4c3f37',
      ruChild: (
        <h3>
          Люблю:<ol>Футбол</ol>
          <ol>Играть на музыкальных инструментах</ol>
          <ol>Путешествовать</ol>
        </h3>
      ),
      enChild: (
        <h3>
          I`m keen on:<ol>Football</ol>
          <ol>Playing on musical instruments</ol>
          <ol>Travelling</ol>
        </h3>
      ),
    },
    {
      backgroundUrl: '/img/dreams.png',
      color: 'ivory',
      ruChild: (
        <div>
          <h3>Учу английский</h3>
          <h3>Мечтаю построить футбольное поле</h3>
          <h3>Хочу поработать в иностранной компании</h3>
        </div>
      ),
      enChild: (
        <div>
          <h3>Learn English</h3>
          <h3>Dream to build a football field</h3>
          <h3>Want to work in a foreign company</h3>
        </div>
      ),
    },
  ],
};

export const CONTACTS: ContactsProps = {
  ru: 'Контакты',
  en: 'Contacts',
};
