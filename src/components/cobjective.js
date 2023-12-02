import React, { useEffect, useState } from "react";
import "../css/cobjective.css";
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


function Carear() {
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
            <section id="objective" className="cobjectSection">
                <div className="tiltcard cobjecttiltcard" data-tilt>
                    <div className="cobject">
                        <Left>
                            <h6>Carear Objective</h6>
                        </Left>
                    </div>
                    <div className="cobjectpara">
                        <Right>
                        <p>
                        Passionate Computer Engineer driven to take complex challenges, 
                        seeking roles for continuous learning and innovation, eager to contribute 
                        to innovative projects.
                        </p>
                        </Right>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Carear;