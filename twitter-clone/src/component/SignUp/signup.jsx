import * as React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from './SignUp.module.css'
import Button from '@mui/material/Button';

export default function Signup() {
  const regexPassword= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const regexPhone= /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
  const regexName=/^[a-zA-Z ]{2,30}$/;
  
// usestate --true or false --ternary op
  const navigate = useNavigate();
  const [input, setInput]=useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

//signupbutton     //not empty field
  const handleData=(e)=>{
    e.preventDefault();
    
      if(!regexName.test(input.name)){
        return alert("Please enter valid Name");
      }
      else if(!regexPhone.test(input.email)){
        return alert("Please enter valid email");
      }
      else if(!regexPassword.test(input.password)){
        console.log(input.password)
        return alert("Please enter valid Password");
      }


    // if((!input.name && !input.phone && !input.password)){
    //   return alert("Please Enter all fields");
    // }
    // else if(!input.name){
    //   return alert("Please Enter Name");
    // }
    // else if(!input.email){
    //   return alert("Please Enter Email id");
    // }
    // else if(!input.password){
    //   return alert("Please Enter Password");
    // }
    localStorage.setItem(input.email, JSON.stringify(input));
    alert("Sign-Up Successfully");
    navigate("/");                            // navigate to sign in page
  };
  return (
    <>
    <div className={style.body}>
    <Box className={style.signuppage}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      Validate
      autoComplete="off"
    >

      <h1>Create your account</h1>
      <div className={style.signup1}>

      <TextField 
          className={style.textfield}
          required
          id="filled-required"
          label="Name"
          variant="filled"
          name="name"
          value={input.name}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
            style={{
            width:'70%'
          }}
      />
        <TextField
          className={style.textfield}
          required
          id="filled-required"
          label="Email"
          variant="filled"
          name="email"
          value={input.email}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
          style={{
            width:'70%'
          }}
          />
        <h6>Use Phone instead</h6>
        {/* <TextField
          className={style.textfield}
          required
          id="filled-disabled"
          label="Phone"
          type='Number'
          name="phone"
          value={input.phone}
          // onChange={(e)=> 
          //   setInput({
          //     ...input,
          //     [e.target.name]: e.target.value,})
          //   }
          variant="filled"
          style={{
            width:'70%',
          }}
        /> */}
        
        <TextField
          className={style.textfield}
          required
          helperText="Atleast 8 characters."
          id="filled-password-input"
          label="password"
          type="password"
          name="password"
          value={input.password}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
         
          // ref={password}
          variant="filled"
          style={{
            width:'70%'
          }}
        />
        </div>
        <Button 
        className={style.btnSignup} 
        onClick={handleData}
        variant='contained'
        style={{
            borderRadius: 30
          }}>
            Sign Up</Button>
      
    </Box>
    </div>
    </>
  );
}