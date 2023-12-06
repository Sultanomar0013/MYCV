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
import Exper from "../images/experience.png";



function Experience() {
    return (
        <>
            <section id="experience" className="experience">
               
                    <div className="exptitle">
                        <h2>My Experience</h2>
                    </div>
                    <div>
                    &emsp;
                </div>
                    <div className="expdivpart">
                        <div className="expSec">
                            <div className="card exppart" >
                                <div className="col-4 col-6 col-12 expimgdiv" >
                                    <img src={Exper} className="card-img-top img-fluid d-block expimg" alt="..." />
                                </div>
                                <div className="card-body expdes col-4 col-6 col-12">
                                    <h5 className="card-title">Working as a JR. Software Engineer at erp.com.bd</h5>
                                    <p className="card-text"></p>
                                </div>
                                <div className="expbut">
                                    <a href="https://erp.com.bd/web/" className="btn btn-primary">Website Link</a>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div>
                    &emsp;
                </div>
                <div>
                    &emsp;
                </div>
                <div>
                    &emsp;
                </div>

            </section>
        </>

    );
}
export default Experience;