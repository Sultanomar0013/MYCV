import React, { useEffect, useState } from "react";
import "../css/about.css";
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
import Left from "../Animation/transitionleft";
import Right from "../Animation/transitionright";


function About() {
    useEffect(() => {
        $(".tiltcard").tilt({
            max: 25,
            speed: 400,
            glare: false,
            "max-glare": 0.5,
        });
        return () => {
            $(".tiltcard").tilt("destroy");
        };
    }, []);
    return (
        <>
            <section id="about" className="aboutmeSection">
                <div className=" tiltcard" data-tilt>
                    <div className="aboutme">
                        <Left>
                            <h6>About Me</h6>
                        </Left>
                    </div>
                    <div className="aboutmepara">
                        <Right>
                        <p>
                            I am like those people who is enthusiast in tech related things, interested in 
                            learning new skills and find oppurtunaties to grab knowledge.
                        </p>
                        </Right>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;