import './App.css';
import CharactersWrapper from './components/characters';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
    {/* <CharactersWrapper /> */}
    </BrowserRouter>
   
    </>
  );
}

export default App;
