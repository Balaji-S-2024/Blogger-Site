import React, { useState } from 'react';
import './SignIn.css';
import Navbar from '../../page-layout/navbar/Navbar';
import Footer from '../../page-layout/footer/Footer';
import axios from 'axios';


function SignIn() {


  interface FormData {
      email: string;
      password: string;
    }
  
    interface FormErrors {
      email: string;
      password: string;
      commonError?: string;
    }
  
    const [formData, setFormData] = useState<FormData>({
      email: '',
      password: '',
    });
  
    const [formErrors, setFormErrors] = useState<FormErrors>({
      email: '',
      password: '',
      commonError: '',
    });
  
    const[isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
  
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setFormData( prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }))
      console.log(formData);
      
    }
  
    const validate = (): boolean => {
      let isEmailValid:boolean = true;
      let isPasswordValid:boolean = true;
      setFormErrors({
        email: '',
        password: '',
      });
      const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!(typeof formData.email === 'string' && (regexForEmail.test(formData.email)) && formData.email.length > 0 && formData.email.length < 50)){
        setFormErrors(prev => ({...prev, email: 'Email must be a valid email address.'}));
        isEmailValid = false;
      }
      const regexForPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if(!(typeof formData.password === 'string' && regexForPassword.test(formData.password))){
        setFormErrors(prev => ({...prev, password: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'}));
        isPasswordValid = false;
      }
  
      return isEmailValid && isPasswordValid;
    }
    const handleSubmit= (e: React.FormEvent) => {
      e.preventDefault();
      if(validate()){
        console.log(formData);

        try {

          const response = axios.post(`http://localhost:8080/user/login`, formData).then((response) => {
            console.log("response data - "+response.data);
            console.log(response.data);
            console.log(response);
            if(response.status = 202){

              setIsLoggedIn(true);
              console.log("Login successful!");

              
            }
          }).catch((error) => { 
            console.error('Error:', error);
            setFormErrors(prev => ({...prev, commonError: 'Invalid email or password.'}));
          }
          );
          
        } catch (error) {
          console.error('Error submitting form:', error);
          setFormErrors(prev => ({...prev, commonError: 'An error occurred while submitting the form.'}));
          
        }

        console.log('Form submitted successfully!');
        
      }
      
     }

  return (
    <>
      <Navbar />
        <div className='signin-container'>
            <form onSubmit={handleSubmit} className='signin-form signin-card'>
              <p>{formErrors.commonError}</p>
              <label htmlFor="Email">Email</label>
              <input 
                type="email" 
                className='input-text' 
                onChange={handleChange}
                value={formData.email} 
                name="email" id="email" 
                placeholder='Enter your E-mail' 
              />
              <p className='errors'>{formErrors.email}</p>
                
              <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  className='input-text' 
                  onChange={handleChange}
                  value={formData.password} 
                  name="password" 
                  id="pass_word" 
                  placeholder='Enter you Password' 
                />
                <p className='errors'>{formErrors.password}</p>
                
                <button type="submit" className='signin-btn'>Sign In</button>
                <p>Don't you have an account? <a href="/signup" className='goto'>Sign Up</a></p>
            </form>
        </div>
      <Footer />
    </>
  )
}

export default SignIn;
