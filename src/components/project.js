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




function Project() {
    return (
        <>
            <section className="projectsection">

                <div className="projectdiv">
                    <div className="projectTitle">
                        <h2>My Project</h2>
                    </div>
                    <div>
                        
                    </div>
                    <div className="projectCarsoulDiv">
                        <Carousel className="projectCarousel">
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Demo} alt="First slide" className="d-block w-100" style={{borderRadius:'10px'}}/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Demo} alt="First slide" className="d-block w-100" style={{borderRadius:'10px'}}/>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Demo} alt="First slide" className="d-block w-100" style={{borderRadius:'10px'}}/>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <Carousel className="projectCarousel">
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Demo} alt="First slide" className="d-block w-100" style={{borderRadius:'10px'}}/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Demo} alt="First slide" className="d-block w-100" style={{borderRadius:'10px'}}/>
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{borderRadius:'10px'}}>
                                <img src={Demo} alt="First slide" className="d-block w-100" style={{borderRadius:'10px'}}/>
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>


            </section>
        </>

    );
}
export default Project;