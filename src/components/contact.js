import React, { useEffect, useState } from "react";
import "../css/contact.css";
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
import Scroll from "../Animation/scroll"
import Popup from "../Animation/popup";
import Scrolldown from "../Animation/scrolldown";

import Facebook from "../logoImages/facebook.png";
import Instagram from "../logoImages/instagram.png";
import Github from "../logoImages/github-sign.png";
import Gmail from "../logoImages/gmail.png";
import Linkedin from "../logoImages/linkedin.png"
import Twitter from "../logoImages/twitter.png"
import Leetcode from "../logoImages/leetcode.png"
import HackerRank from "../logoImages/Hackerrank.png"

function Contact() {
    return (
        <>
            <section>
                <div className="contactmaindiv">
                    <div className="contacttitle">
                        <h3>Contact and Social Connection</h3>
                    </div>
                    <div className="contactimgdiv">
                        <div className="contactimgsix">

                            <div className="contactthreeimg">
                                <img src={Linkedin} className="img-fluid contactImg" />
                                <img src={Gmail} className="img-fluid contactImg" />
                                <img src={Github} className="img-fluid contactImg" />
                            </div>

                            <div className="contactthreeimg" >
                                <img src={Twitter} className="img-fluid contactImg" />
                                <img src={Facebook} className="img-fluid contactImg" />
                                <img src={Instagram} className="img-fluid contactImg" />
                            </div>

                        </div>
                        <div className="contacttwoimg">
                            <img src={Leetcode} className="img-fluid contactImg twoimg" style={{marginRight:'2%'}} />
                            <img src={HackerRank} className="img-fluid contactImg twoimg" style={{marginLeft:'2%',width:'10%'}} />
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;