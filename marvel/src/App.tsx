import 'antd/dist/antd.css';
import './App.css';
import Header from './components/header/header';
import AppRouting from './routing/routing';

function App() {
    return (
      	<div className="wrapper main">
        <Header />
      	<AppRouting />
    	</div>
  	);
}
export default App;
