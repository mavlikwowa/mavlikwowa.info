/* Interfaces */
import React from 'react';
import {
  MultiLanguagesInterface,
  ExperienceProps,
  AboutProps,
  ContactsProps,
  MenuProps,
  SkillProps,
} from './interfaces';

// My professional skills
export const SKILLS: SkillProps[] = [
  { img: '/img/react.svg', name: 'React' },
  { img: '/img/vue.svg', name: 'Vue' },
  { img: '/img/typescript.svg', name: 'TypeScript' },
  { img: '/img/javascript.svg', name: 'JavaScript' },
  { img: '/img/webpack.svg', name: 'Webpack' },
  { img: '/img/tsql.svg', name: 'T-SQL' },
  { img: '/img/mysql.svg', name: 'MySQL' },
  { img: '/img/nextjs.svg', name: 'NextJS' },
  { img: '/img/stylus.svg', name: 'Stylus' },
  { img: '/img/cssinjs.svg', name: 'CSS-in-JS' },
];

// The First|Second name
export const FAMILYNAME: MultiLanguagesInterface = {
  ru: 'Владимир Маликов',
  en: 'Vladimir Malikov',
};

// The First|Second name
export const HEADERSKILLS: MultiLanguagesInterface = {
  ru: 'Мои компетенции:',
  en: 'My skills:',
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
          Рост - 192 см.
          <br />
          Размер ноги - 47.
          <br />
          Но минусов от этого больше чем плюсов.
        </h3>
      ),
      enChild: (
        <h3>
          Height: 6.3 feet.
          <br />
          Foot size: 11.875 Inches.
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              marginRight: '50px',
              fontSize: '64px',
              lineHeight: '81px',
              color: 'white',
            }}
          >
            Люблю
          </h1>
          <div>
            <h3>
              Футбол
              <br />
              Играть на музыкальных инструментах
              <br />
              Путешествовать
            </h3>
          </div>
        </div>
      ),
      enChild: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              marginRight: '50px',
              fontSize: '64px',
              lineHeight: '81px',
              color: 'white',
            }}
          >
            I`m keen on:
          </h1>
          <div>
            <h3>
              Football
              <br />
              Playing on musical instruments
              <br />
              Travelling
            </h3>
          </div>
        </div>
      ),
    },
    {
      backgroundUrl: '/img/dreams.png',
      color: 'ivory',
      ruChild: (
        <div style={{ textAlign: 'center' }}>
          <h3>
            Учу английский.
            <br />
            Мечтаю построить футбольное поле.
            <br />
            Хочу поработать в иностранной компании.
          </h3>
        </div>
      ),
      enChild: (
        <div style={{ textAlign: 'center' }}>
          <h3>
            Learn English.
            <br />
            Dream to build a football field.
            <br />
            Want to work in a foreign company.
          </h3>
        </div>
      ),
    },
  ],
};

export const CONTACTS: ContactsProps = {
  ru: 'Контакты',
  en: 'Contacts',
  contactLink: [
    {
      href: 'https://t.me/mavlikwowa',
      title: 'telegram',
      alt: 'telegram',
      src: '/img/telegram.png',
      name: 'Telegram',
    },
    {
      href: 'https://github.com/mavlikwowa',
      title: 'github',
      alt: 'github',
      src: '/img/github.png',
      name: 'GitHub',
    },
    {
      href: 'https://ru.stackoverflow.com/users/423219/vladimir-malikov',
      title: 'stackoverflow',
      alt: 'stackoverflow',
      src: '/img/stackoverflow.png',
      name: 'Stack Overflow',
    },
    {
      href: 'https://career.habr.com/mavlikwowa',
      title: 'habr',
      alt: 'habr',
      src: '/img/habr.png',
      name: 'Habr',
    },
    {
      href: 'https://www.linkedin.com/in/vladimir-malikov-7159a6193/',
      title: 'linkedin',
      alt: 'linkedin',
      src: '/img/linkedin.png',
      name: 'LinkedIn',
    },
  ],
};

export const BLOCKIDS = {
  ExpId: '#exp',
  AboutId: '#about',
  ContactsId: '#contacts',
};

export const MENU: MenuProps = {
  exp: {
    ru: 'Опыт',
    en: 'Experience',
  },
  about: {
    ru: 'Обо мне',
    en: 'About me',
  },
  contacts: {
    ru: 'Контакты',
    en: 'Contacts',
  },
  email: {
    ru: 'Моя почта',
    en: 'My mail',
  },
};
