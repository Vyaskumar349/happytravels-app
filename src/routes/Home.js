import React from "react";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";


const Home=()=>{
    return(<div>
        <Navbar/>
     <Hero cName="hero" 
               heroImg="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
               title="Your Journey Your Story"
               text="Choose Your Favorite Destination"
               url="/"
               btnClass="show"
               buttonText="Travel Plan"
               />
               <Destination/>
               <Trip/>
               <Footer/>
    </div>);
}
export default Home;