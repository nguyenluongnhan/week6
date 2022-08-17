import '../src/css/Register.css';
import React from 'react';
import {useState} from 'react'

function Register() {

  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    email:""
  });

  const [submited,setSubmited] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({...values, firstName: e.target.value})
  }

  const handleLastNameInputChange = (e) => {
    setValues({...values, lastName: e.target.value})
  }

  const handleEmailNameInputChange = (e) => {
    setValues({...values, email: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmited(true);
  }

  return (
    <div className="App">
      <div className='container'>
        <form 
          onClick={handleSubmit}
          className='form-register'>
          {submited && valid ? <div className='success-message'>Success! Thank you for registering</div> : null}
          <input
            onChange={handleFirstNameInputChange} 
            value={values.firstName}
            className='form-input' 
            name='firstName' 
            placeholder='First Name' />
            {submited && !values.firstName ? <span>Please enter a first name</span> : null}
          <input 
            onChange={handleLastNameInputChange}
            value={values.lastName}
            className='form-input' 
            name='lastName' 
            placeholder='Last Name' />
            {submited && !values.lastName ? <span>Please enter a last name</span> : null}
          <input 
            onChange={handleEmailNameInputChange}
            value={values.email}
            className='form-input' 
            name='email' 
            placeholder='Email' />
            {submited && !values.email ? <span>Please enter a email address</span> : null}
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
