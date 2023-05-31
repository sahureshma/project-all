import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Signup from './component/SignUp/SignUp';
import SignIn from './component/SignIn/SignIn';
import HomePage from './component/HomePage/HomePage';
import SignUp from './component/SignUp/signup'


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