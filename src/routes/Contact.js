import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
const Contact=()=>{
    return(<>
    <Navbar/>
    
    <Navbar/>
    <Hero cName="hero-mid" 
               heroImg="https://images.unsplash.com/photo-1496482475496-a91f31e0386c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbCUyMGRhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
               title="Contact"
             
               btnClass="hide"
              
               />
               <ContactForm/>
               <Footer/>
    </>)
}
export default Contact;