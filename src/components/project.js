import React, { useEffect, useState } from "react";

import "../css/project.css";
import $, { speed } from "jquery";
import "tilt.js";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';

//import ScrollReveal from "../Animation/scrollreveal";
import Reveal from "../Animation/reveal";
//import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
//import { Parallax } from 'react-parallax';
//import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
//import { Fade, Roll, Bounce, Slide, Zoom } from 'react-reveal';
//import FadeOnScroll from '../Animation/fadescroll';
import Scroll from "../Animation/scroll";
import Demo from "../images/TheStarryNightBlack.jpeg";
import Travel1 from "../images/travel1.png"
import Travel2 from "../images/travel2.png"
import Travel3 from "../images/travel3.png"
import Inventory1 from "../images/Inventory1.png";
import Inventory2 from "../images/Inventory2.png";
import Inventory3 from "../images/Inventory3.png";




function Project() {
    return (
        <>
            <section id="project" className="projectsection">

                <div className="projectdiv">
                    <div className="projectTitle">
                        <h2>My Project</h2>
                    </div>
                    <br />
                    <div className="projectCarsoulDiv">
                        <Carousel className="projectCarousel col-12">
                            <Carousel.Item style={{borderRadius:'10px',}} >
                                <img src={Travel1} alt="First slide" className="d-block w-100" 
                                style={{borderRadius:'10px', filter:"blur(2px) brightness(0.5) grayscale(0%)" }}/>
                                <Carousel.Caption >
                                    <h3>Travel Management System</h3>
                                    <p>Its a Travel Management System made by Node, Express, React.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Travel3} alt="First slide" className="d-block w-100" 
                                style={{borderRadius:'10px',filter:"blur(2px) brightness(0.5) grayscale(30%)"}}/>
                                <Carousel.Caption>
                                    <h3>Authentication System</h3>
                                    <p>JWT add for user authentication.</p>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Travel2} alt="First slide" className="d-block w-100" 
                                style={{borderRadius:'10px',filter:"blur(2px) brightness(0.5) grayscale(30%)"}}/>
                                <Carousel.Caption>
                                    <h3>Mongodb</h3>
                                    <p>
                                        Mongodb use for Database
                                    </p>
                                    <a href="https://github.com/Sultanomar0013/Travel-Management" className="btn" style={{color:"white",textDecoration: "underline"}}>Github</a>
                                    <a href="https://travel-management-xi.vercel.app/" className="btn" style={{color:"white",textDecoration: "underline"}}>Live</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <Carousel className="projectCarousel col-12">
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Inventory1} alt="First slide" className="d-block w-100" 
                                style={{borderRadius:'10px',filter:"blur(2px) brightness(0.5) grayscale(30%)"}}/>
                                <Carousel.Caption>
                                    <h3>Inventory Management System</h3>
                                    <p>Its a Travel Management System made by Node, Express, React.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Inventory2} alt="First slide" className="d-block w-100" 
                                style={{borderRadius:'10px',filter:"blur(2px) brightness(0.5) grayscale(30%)"}}/>
                                <Carousel.Caption>
                                    <h3>User basis Home management</h3>
                                    <p>JWT Authentication for user account management</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Inventory3} alt="First slide" className="d-block w-100" 
                                style={{borderRadius:'10px',filter:"blur(2px) brightness(0.5) grayscale(30%)"}}/>
                                <Carousel.Caption>
                                    <h3>CRUD Operation</h3>
                                    <p>
                                        A Simple CRUD operation done here for managment.
                                    </p>
                                    <a href="https://github.com/Sultanomar0013/InventoryManagemenmtDeploy-" className="btn" style={{color:"white",textDecoration: "underline"}}>Github</a>
                                    <a href="https://inventorymanagementf.vercel.app/" className="btn" style={{color:"white",textDecoration: "underline"}}>Live</a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                    
                    </div>

                </div>


            </section>
        </>

    );
}
export default Project;