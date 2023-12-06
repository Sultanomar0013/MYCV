import React, { useEffect, useState } from "react";
import "../css/home.css";
import $, { speed } from "jquery";
import "tilt.js";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "../images/profile.png";
import Demo from "../images/TheStarryNightBlack.jpeg";
import Typed from "typed.js";
//import ScrollReveal from "../Animation/scrollreveal";
import Reveal from "../Animation/reveal";
//import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
//import { Parallax } from 'react-parallax';
//import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
//import { Fade, Roll, Bounce, Slide, Zoom } from 'react-reveal';
//import FadeOnScroll from '../Animation/fadescroll';
import Scroll from "../Animation/scroll";
function Home() {

    useEffect(() => {

        var typed = new Typed(".auto-type", {
            strings: [" Welcome to my portfolio!", "Have A Chill!!!"],
            startDelay: 2000,
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section id="home">
                <div className=" textdiv ">
                    <div className="container content text-3d-shadow">
                        <Reveal>
                            <h4 className="homeintro">
                                Hey There!!! My name is Omar Saleh Sultan,{" "}
                                <span
                                    className="auto-type"
                                    style={{ color: "chocolate" }}
                                ></span>
                            </h4>
                        </Reveal>
                    </div>

                    <div className="container imgdiv">
                        <motion.img
                            initial={{ x: 0, scale: 0 }}
                            animate={{ x: 0, scale: 1 }}
                            transition={{ duration: "0.5", delay: "0.5", type: "spring" }}
                            src={Profile}
                            alt="Profile IMG"
                            className="profile-image"
                        />
                    </div>
                </div>
            </section>

        

            
        </>
    );
}

export default Home;
