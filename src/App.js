import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup/Signup";

import SignIn from "./components/signin/signin";
import Homepage from "./components/Homepage/Homepage";
function App() {
  return (
    
     
     <Router >
      <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Homepage/>} />
        <Route path="/signin" element={<SignIn/>} />
        
      </Routes>
    </Router>
     
   
  );
}

export default App;
