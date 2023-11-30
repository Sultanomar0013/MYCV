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
        $(".cobjecttiltcard").tilt({
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
                <div className=" cobjecttiltcard" data-tilt>
                    <div className="cobject">
                        <Left>
                            <h6>Carear Objective</h6>
                        </Left>
                    </div>
                    <div className="cobjectpara">
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
export default Carear;