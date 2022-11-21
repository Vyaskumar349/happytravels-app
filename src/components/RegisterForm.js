import React from 'react'
import "./RegisterFormStyle.css"
function RegisterForm() {
  return (
    <div className='registerForm'>
         <form>
        <h1>Sign Up</h1>      
       <input placeholder='First Name'/>
       <input placeholder='Last Name'/>
        <input placeholder='Email'/>
        <input placeholder='mobile'/>
       
       
        
       
        
        <button>Register</button>

       </form>
      
      <a href="/">Already have an account?login</a>
      
      
       
    </div>
  )
}

export default RegisterForm;