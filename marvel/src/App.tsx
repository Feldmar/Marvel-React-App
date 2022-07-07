import React from 'react';
import './App.css';
import Header from './components/header';
import HeroCard from './components/hero-card';
import Render from './services/marvelAPI';

function App() {
  
  return (
    <>
    <Render/>
    <Header />
    <div className ="scroll-wrapper">
      <div className="card-area">
        <div className="card-area-column">
          <HeroCard/>
        </div>
      </div>
      <div className="card-area">
        <div className="card-area-column">
        <HeroCard/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
