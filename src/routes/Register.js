import React from 'react'
import Hero from '../components/Hero'
import RegisterForm from '../components/RegisterForm'
import Navbar from '../components/Navbar'
function Register() {
  return (
    <div className='register'>
        <Navbar/>
        <Hero cName="hero"
        heroImg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" 
        
       />

       <RegisterForm/>
      
         </div>
  )
}

export default Register