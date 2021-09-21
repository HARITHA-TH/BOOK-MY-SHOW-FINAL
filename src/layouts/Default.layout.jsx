
import React from "react";
import Navbar from "../Components/Navbar/navbar.component";
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";


const DefaultLayout = () => {
    return 
    <>
        <Navbar/>
        <HeroCarousal/>
        {props.childtren}
    </>
    
};

export default DefaultLayout;