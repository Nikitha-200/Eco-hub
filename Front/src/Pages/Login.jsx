import React, { useState } from 'react';
import '../Pages/CSS/Login.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedError, setIsCheckedError] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsCheckedError(false);
  };

  const showAlert = () => {
    if (isCheckedError) {
      alert("Please agree to the terms");
    }
  };

  const login = async () => {
    if (!isChecked) {
      setIsCheckedError(true);
      showAlert();
      return;
    }

    console.log("Login function executed", formData);
    let responseData;
      await fetch('http://localhost:4000/login',{
        method:"POST",
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData), 
      }).then((response)=>response.json()).then((data)=>responseData=data)
  
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace('/');
      }
      else{
          alert(responseData.errors);
      }
  }

  const signup = async () => {
    if (!isChecked) {
      setIsCheckedError(true);
      showAlert();
      return;
    }

    console.log("Signup function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData), 
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
        alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup_new'>
      <div className="loginsignup_new-container">
        <h1>{state}</h1>
        <div className="loginsignup_new-fields">
          {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          <button onClick={() => { state === 'Login' ? login() : signup() }}>Continue</button>
        </div>
        <div className="loginsignup_new-agree">
          <input type="checkbox" name=" " id="mycheck" required="required" checked={isChecked} onChange={handleCheckboxChange} />
          <p>By continuing, I agree to the terms of the use & privacy policy.</p>
        </div>
        {state === "Sign Up"
          ? <p className="loginsignup_new-login">
            Already have an account? <span onClick={() => { setState("Login") }}>Login here</span>
          </p>
          : <p className="loginsignup_new-login">
            Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span>
          </p>}
      </div>
    </div>
  )
}

export default LoginSignup;
