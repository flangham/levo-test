import React from 'react';
import './styles/global.css';
import { ArticlesGrid } from './components/ArticlesGrid/ArticlesGrid';
import HeroText from './components/HeroText/HeroText';

function App() {
  return (
    <>
      <HeroText />
      <ArticlesGrid />
    </>
  );
}

export default App;
