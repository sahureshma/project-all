import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from './signup.module.css'
import Button from '@mui/material/Button';

export default function Signup() {
  const [input, setInput]=useState({
    name:"",
    email:"",
    phone:"",
    password:""
  })

  const handleData=(e)=>{
    e.preventDefault();
    localStorage.setItem(input.email, JSON.stringify(input));
  };
  return (
    <>
    
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
          // ref={name}
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
        <TextField
          className={style.textfield}
          required
          id="filled-disabled"
          label="Phone"
          type='Number'
          name="phone"
          value={input.phone}
          onChange={(e)=> 
            setInput({
              ...input,
              [e.target.name]: e.target.value,})
            }
          variant="filled"
          style={{
            width:'70%',
          }}
        />
        {/* <select name='month'>
            <option value='month'>Month</option>
            <option value='year'>Year</option>
            <option value='day'>Month</option>
        </select> */}
        <TextField
          className={style.textfield}
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
    </>
  );
}