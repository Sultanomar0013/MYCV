import React, { useEffect } from "react";
import '../css/home.css';
import $, { speed } from 'jquery';
import 'tilt.js';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "../images/profile.png"
import Typed from "typed.js";
//import ScrollReveal from "../Animation/scrollreveal";
import Reveal from "../Animation/reveal";
//import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
//import { Parallax } from 'react-parallax';
//import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from 'react-intersection-observer';
import { Fade, Roll, Bounce, Slide, Zoom } from 'react-reveal';
import FadeOnScroll from '../Animation/fadescroll';

function Home() {

    useEffect(() => {
        $('.tiltcard').tilt({
            max: 25,
            speed: 400,
            glare: false,
            "max-glare": 0.5
        });

        var typed = new Typed(".auto-type", {
            strings: [" Welcome to my portfolio!", "Have A Chill!!!"],
            startDelay: 2000,
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        });
        return () => {
            typed.destroy();
            $('.tiltcard').tilt('destroy');
        };

    }, []);



    return (
        <>
            <section>
                <div className=" textdiv " >
                    <div className="container content text-3d-shadow">
                        <Reveal>
                            <h1
                            >Hey There!!! My name is Omar Saleh Sultan,  <span className="auto-type" style={{ color: "chocolate" }}></span></h1>
                        </Reveal>


                    </div>

                    <div className="container imgdiv">
                        <motion.img initial={{ x: 0, scale: 0 }}
                            animate={{ x: 0, scale: 1 }}
                            transition={{ duration: "0.5", delay: "0.5", type: "spring" }} src={Profile} alt="Profile IMG" className="profile-image" />


                    </div>
                </div>
            </section>

            <section className="aboutmeSection">
                <div className=" tiltcard" data-tilt>
                    <div
                        className="aboutme">

                        <h6>About Me</h6>




                    </div>
                    <div className="aboutmepara">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                    </div>
                </div>



            </section>

            <section>
                <div className=" education">
                    <div className="edutitle">
                        <h1>Education Qualification</h1>
                    </div>

                    <div className="edumaindiv">
                        <Slide left>
                        <div className="edusubdiv">
                            <h1>SSC</h1>
                        </div>
                        <div className="edusubdiv">
                            <h1>HSC</h1>
                        </div>
                        </Slide>
                        <Bounce>
                        <div className="edusubdiv">
                            <h1>BSC</h1>
                        </div>
                        <div className="edusubdiv">
                            <h1>MSC</h1>
                        </div>
                        </Bounce>
                    </div>

                </div>

            </section>


        </>
    );
}

export default Home;