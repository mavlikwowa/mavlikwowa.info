/* Libraries */
import React from 'react';
/* Components */
import Header from '../components/Header';
import Menu from '../components/Menu';
import Experience from '../components/Experience';
import About from '../components/About';
import Contacts from '../components/Contacts';

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Header />
      <Experience />
      <About />
      <Contacts />
    </>
  );
};

export default App;
