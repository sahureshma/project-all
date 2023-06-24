import Header from './component/Header/Header';

import './App.css';
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Menu from './component/Menu/Menu';
import Clients from './component/Clients/Clients';
import Prices from './component/Prices/Prices';

function App() {
  return (
    <div className="App">  
    <Header/>
    <About/>
    <Shop/>
    <Menu/>
    <Clients/>
    <Prices/>
    </div>
  );
}

export default App;
