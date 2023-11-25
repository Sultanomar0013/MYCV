import React, { useEffect, useState } from "react";
import "../css/experience.css";
import $, { speed } from "jquery";
import "tilt.js";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
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



function Experience() {
    return (
        <>
            <section>
                <div className=" expdiv">
                    <div className="exptitle">
                        <h2>My Experience</h2>
                    </div>
                    <div className="expdivpart">

                        <div className="expSec">
                            <div className="card exppart" >
                                <div className="col-4 col-6 col-12 expimgdiv" >
                                    <img src={Demo} className="card-img-top img-fluid d-block expimg" alt="..." />
                                </div>
                                <div className="card-body expdes col-4 col-6 col-12">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className="expbut">
                                    <a href="#" className="btn btn-primary">Github Link</a>
                                    <a href="#" className="btn btn-primary">Live Link</a>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>




            </section>
        </>

    );
}
export default Experience;