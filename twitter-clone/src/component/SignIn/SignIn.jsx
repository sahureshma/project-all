import React, { useState } from 'react';
import './SignIn.css';
import {useNavigate} from 'react-router';

function SignIn(){
  const navigate = useNavigate();
  
  const[email,setEmail]=useState("");
  const[Password,setPassword]=useState("");
  const phoneRegex=/^[7-9]\d{9}$/;
  const PasswordRegex=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const handleEmailchange= (event)=>{
    setEmail(event.target.value);
  };
  const handlePasswordchange= (event)=>{
    setPassword(event.target.value);
  };
  const handleSumbit= (event)=>{
    event.preventDefault();
 
  // if(!phoneRegex.test(email)){
  //   alert("enter valid Email id")
  // } else
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
            navigate("/");
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
          <img src='./pngtree-twitter-social-media-round-icon-png-image_6315985.png' alt='logo'className='logo'/>
          <h2>Sign in to Twitter</h2>
          <button>
          <img src='./googlelogo.png' alt='logo'/>
          Sign in with Google
          </button>
          <button>
          <img src='./applelogo.png' alt='logo'/>
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
  
