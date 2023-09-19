import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signin from "./component/Signin/Signin";
import Signup from "./component/Signup/Signup";
import Homepage from "./component/Home/Homepage";
import Plan from "./component/Plan/Plan";



function App() {
  return (
    <div className="container">
       
     <Router >
      <Routes>
      <Route path="/signup" element={<Signup/>} />
     
      <Route path="/" element={<Homepage/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/plan" element={<Plan/>}/>
        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
