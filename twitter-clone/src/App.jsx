import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';
import Home from './component/Home';

function App() {

  return (    
      <Router>
        <Routes>
          <Route path="/SignUp" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/"  element={<SignIn/>}/>
        </Routes>
       
      
      </Router>
    
      // <SignIn/>
   
  );
}

export default App;