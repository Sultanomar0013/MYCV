import React, { useEffect, useState } from "react";
import "../css/skill.css";
import $, { speed } from "jquery";
import "tilt.js";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';



//import ScrollReveal from "../Animation/scrollreveal";
import Reveal from "../Animation/reveal";
//import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
//import { Parallax } from 'react-parallax';
//import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from "react-intersection-observer";
//import { Fade, Roll, Bounce, Slide, Zoom } from 'react-reveal';
//import FadeOnScroll from '../Animation/fadescroll';
import Scroll from "../Animation/scroll";

function Skill() {
    return (
        <>
            <section id="skillsection" className="skillsection">
                <div className="skilltitle">
                    <h5>My Skills</h5>
                </div>
                <br />
                <div className="skillmaindiv">
                    <div className="subdiv Frontend">
                        <p className="skilltitleall">Frontend</p>
                        <div className="subskilltitle1div">
                            <p className="subskilltitle1"> React</p>
                            <p className="subskilltitle2"> Bootstrap</p>
                        </div>
                    </div>
                    <div className="subdiv Backend">
                        <p className="skilltitleall">Backend</p>
                        <div className="subskilltitle1div">
                            <p className="subskilltitle1"> Node</p>
                            <p className="subskilltitle2"> Express</p>
                        </div>
                    </div>
                    <div className="subdiv Database">
                        <p className="skilltitleall">Database</p>
                        <div className="subskilltitle1div">
                            <p className="subskilltitle1"> MySQL</p>
                            <p className="subskilltitle2"> Mongodb</p>
                        </div>
                    </div>
                    <div className="subdiv VersionControl">
                        <p className="skilltitleall1">Version Control</p>
                        <div className="subskilltitle1div">
                            <p className="subskilltitle1"> Github</p>
                        </div>
                    </div>
                    <div className="subdiv OtherSoft">
                        <p className="skilltitleall1">Other Software</p>
                        <div className="subskilltitle1div">
                            <p className="subskilltitle2"> Postman </p>
                        </div>
                    </div>
                    <div className="subdiv devOPs">
                        <p className="skilltitleall">Dev-Ops</p>
                        <div className="subskilltitle1div">
                            <p className="subskilltitle1">Docker</p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    &emsp;
                </div>
            </section>
        </>

    );
}
export default Skill;