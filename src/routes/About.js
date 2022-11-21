import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
const About=()=>{
    return(<>
    <Navbar/>
    <Hero cName="hero-mid" 
               heroImg="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
               title="About"
             
               btnClass="hide"
               />
               <AboutUs/>
               <Footer/>
    
    </>)
}
export default About;