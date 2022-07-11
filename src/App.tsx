import 'antd/dist/antd.css';
import './App.css';
import CharactersWrapper from './components/characters';
import Header from './components/header';
import AppRouting from './routing/routing';


function App() {

  return (
    <div className='wrapper main'>
      <Header />
      <AppRouting />
    </div>
  );
}

export default App;
