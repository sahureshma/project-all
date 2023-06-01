import React, { useState } from 'react';
import './SignIn.css';
import {useNavigate} from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

function SignIn(){
  const navigate = useNavigate();
  
  const[email,setEmail]=useState("");
  const[Password,setPassword]=useState("");
  const emailRegex=/(\<|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(\>|$)/;
  const PasswordRegex=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const handleEmailchange= (event)=>{
    setEmail(event.target.value);
  };
  const handlePasswordchange= (event)=>{
    setPassword(event.target.value);
  };
  const handleSumbit= (event)=>{
    event.preventDefault();
 
  if(!emailRegex.test(email)){
  alert("enter valid Email id")
 } else
   if (!PasswordRegex.test(Password)){
    alert("enter valid password");
  } else{
    const userRegistrationdata=JSON.parse(
      localStorage.getItem(email)
    );
    console.log(userRegistrationdata);
    if(userRegistrationdata && userRegistrationdata.email===email){
           if(userRegistrationdata.password===Password){
            alert("Login Successfully")    
            navigate("/home");
        } else {
          alert("Please Enter Correct Password");
        }
      }else {
        alert("user not registered")
      }
  }

//   const userRegistrationdata=JSON.parse(
//     localStorage.getItem(email)
//   );
//   console.log(userRegistrationdata);
//   if(userRegistrationdata && userRegistrationdata.email===email){
//      if(userRegistrationdata.password===Password){
//       alert("Login Successfully")    
//       navigate("/home");
//   } else {
//     alert("Please Enter Correct Password");
//   }
// }else {
//   alert("user not registered")
// }
};
    return(
        <div className="App">
        <div className='logo-box'>
           <BsTwitter />
          <h2>Sign in to Twitter</h2>
          <button>
          <FcGoogle />
          Sign in with Google
          </button>
          <button>
          <AiFillApple />
          Sign in with Apple
          </button>
  
          <hr></hr>
          <span>Or</span>
          <form>
            <input
             type="text"
             name="email"
              placeholder=" email id"
              value={email}
            onChange={handleEmailchange}
            />
            <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={Password}
            onChange={handlePasswordchange}
            />
            <button onClick={handleSumbit}>Next</button>
            </form>
         
          <button> Forget Password</button>
          <p>
            Don't Have an account
            <a onClick={()=>navigate("/signup")} href='#'>SignUp</a>
            </p>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  
