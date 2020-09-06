import React from 'react';
import Header from "./Header";
import About from "./About";
import Projects from "./Projects"; 
import Contact from "./Contact";
import Footer from "./Footer";

const Wrapper = () => {
    return (
        <>
            <Header />
            <About />
            <Projects /> 
            <Contact />
        </>
    )
}

export default Wrapper;
