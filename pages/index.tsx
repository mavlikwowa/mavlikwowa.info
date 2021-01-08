/* Libraries */
import React from 'react';
/* Components */
import Header from '../components/Header';
import Menu from '../components/Menu';
import Experience from '../components/Experience';
/* Contexts */

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Header />
      <Experience />
    </>
  );
};

export default App;
