import './App.css';
import SignIn from './component/SignIn/SignIn';
// import HomePage from './component/HomePage/HomePage';
import SignUp from './component/SignUp';
import HomePage from './component/HomePage/HomePage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {

  return (
     
      <Router >
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route  path="/" element={<HomePage/>}/>
          <Route path="/signin"  element={<SignIn/>}/>
        </Routes>
       
      
      </Router>
    
     
   
  );
}

export default App;