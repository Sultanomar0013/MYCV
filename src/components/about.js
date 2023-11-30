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
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </p>
                        </Right>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;