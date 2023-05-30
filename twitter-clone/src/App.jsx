import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import SignIn from './component/SignIn/SignIn';
import Signup from './component/SignUp/signup';
import SignIn from './component/SignUp/SignIn/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<SignIn/>}/> */}
      </Routes>
    <div className="App">
      {/* <SignIn/> */}
      <Signup/>
    </div>
   </Router>
  );
}

export default App;
