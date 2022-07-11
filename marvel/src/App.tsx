import './App.css';
import CharactersWrapper from './components/characters';
import Header from './components/header';
import { BrowserRouter  } from 'react-router-dom';
import AppRouting from './routing/routing';


function App() {
  
  return (
    
    <div className='wrapper main'>
    <BrowserRouter>
    <Header />
    <AppRouting />
  
    </BrowserRouter>
   
    </div>
  );
}

export default App;
