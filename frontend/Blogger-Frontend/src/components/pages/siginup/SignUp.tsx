// import React from 'react';
import './SignUp.css';
import Navbar from '../../page-layout/navbar/Navbar';
import Footer from '../../page-layout/footer/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SignUp() {

  const navigate = useNavigate();

  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    userName?: string;
  }

  interface FormErrors {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    commonError?: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    commonError: ''
  });



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setFormData( prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // console.log(formData);
    
  }

  const validate = (): boolean => {
    let isFirsNameValid:boolean = true;
    let isLastNameValid:boolean = true;
    let isEmailValid:boolean = true;
    let isPasswordValid:boolean = true;
    let isConfirmPasswordValid:boolean = true;
    setFormErrors({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    if(!(typeof formData.firstName === 'string' && formData.firstName.length > 2 && formData.firstName.length < 20)){
      setFormErrors(prev => ({...prev, firstName: 'First name must be between 2 and 20 characters.'}));
      isFirsNameValid = false;
    }
    if(!(typeof formData.lastName === 'string' && formData.lastName.length > 0 && formData.lastName.length < 20)){
      setFormErrors(prev => ({...prev, lastName: 'Last name must be between 0 and 20 characters.'}));
      isLastNameValid = false;
    }
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
    if(!(typeof formData.confirmPassword === 'string' && formData.confirmPassword === formData.password)){
      setFormErrors(prev => ({...prev, confirmPassword: 'Passwords do not match.'}));
      isConfirmPasswordValid = false;
    }

    return isFirsNameValid && isLastNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
  }
  const handleSubmit= (e: React.FormEvent) => {
    e.preventDefault();
    if(validate()){
      console.log(formData);
      formData.userName = formData.email.split('@')[0];
      fetch('http://localhost:8080/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if(response.ok){
         navigate('/'); 
        }
        if(response.status === 409){
          setFormErrors(prev => ({...prev, commonError: 'User already exists! Please try again with a different email.'}));
          throw new Error('User already exists');
        }
        else if(response.status === 400){
          setFormErrors(prev => ({...prev, commonError: 'Bad Request! Please try again later.'}));
          throw new Error('Bad Request');
        }
        else if (!response.ok) {
          setFormErrors(prev => ({...prev, commonError: 'Server is Busy! Please try again later.'}));
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => { 
        console.log('Success:', data);
        // Handle success (e.g., redirect to another page)
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error (e.g., show an error message to the user)
      }
      );

      
    }
    
   }



  return (
    <>
      <Navbar />
        <div className='signup-container'>
            <form onSubmit={handleSubmit} className='sigup-form signup-card'>
              <p>{formErrors.commonError}</p>
                <h1 className='signup-header'>Create an account</h1>
                <label htmlFor="FirstName">First Name</label>
                <input 
                  type="text" 
                  className='input-text' 
                  name="firstName" 
                  onChange={handleChange}
                  value={formData.firstName}
                  id="first_name" 
                  placeholder='Enter your First Name' 
                />
                <p className='errors'>{formErrors.firstName}</p>

                <label htmlFor="Lastname">Last Name</label>
                <input 
                  type="text" 
                  className='input-text' 
                  onChange={handleChange}
                  value={formData.lastName} 
                  name="lastName" id="last_name" 
                  placeholder='Enter your last name' 
                />
                <p className='errors'>{formErrors.lastName}</p>
                
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

                <label htmlFor="confirm-password">Re-type Password</label>
                <input 
                  type="password" 
                  className='input-text' 
                  onChange={handleChange}
                  value={formData.confirmPassword} 
                  name="confirmPassword" 
                  id="confirm_pass_word" 
                  placeholder='Re-Type Password' 
                />
                <p className='errors'>{formErrors.confirmPassword}</p>

                <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>

                <button 
                  type="submit" 
                  className='signup-btn'>
                    Sign Up
                </button>
                <p>Already have an account? <a href="/signin" className='goto'>Sign In</a></p>
            </form>
        </div>
      <Footer />
    </>
  )
}

export default SignUp;
