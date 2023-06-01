import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Signup from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';

import SignUp from './component/SignUp/signup'

import Home from './component/HomePage/Home';


function App() {

  return (
     
      <Router >
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route  path="/home" element={<Home/>}/>
          <Route path="/"  element={<SignIn/>}/>
    


        </Routes>
       
      
      </Router>
    
     
   
  );
} 

export default App;