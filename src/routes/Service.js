import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service=()=>{
    return(<>
    <Navbar/>

    <Navbar/>
    <Hero cName="hero-mid" 
               heroImg="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
               title="Service"
             
               btnClass="hide"
              
               />
               <Trip/>
               <Footer/>
    </>)
}
export default Service;