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
import Right2 from "../Animation/transitionright2";
import Facebook from "../logoImages/facebook.png";
import Instagram from "../logoImages/instagram.png";
import Github from "../logoImages/github-sign.png";
import Gmail from "../logoImages/gmail.png";
import Linkedin from "../logoImages/linkedin.png"
import Twitter from "../logoImages/twitter.png"
import Leetcode from "../logoImages/leetcode.png"
import HackerRank from "../logoImages/Hackerrank.png"



function Contact() {


    const redirectToLinkedin = () => {
        const linkedinProfileUrl = "https://www.linkedin.com/in/sultan-omar/";
        window.open(linkedinProfileUrl, '_blank');
    };
    const redirectToGmail = () => {
        const GmailProfileUrl = "https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act";
        window.open(GmailProfileUrl, '_blank');
    };
    const redirectToGithub = () => {
        const GithubProfileUrl = "https://github.com/Sultanomar0013";
        window.open(GithubProfileUrl, '_blank');
    };
    const redirectToTwitter = () => {
        const TwitterProfileUrl = "";
        window.open(TwitterProfileUrl, '_blank');
    };
    const redirectToFacebook = () => {
        const FacebookProfileUrl = "https://www.facebook.com/darkholmes0013/"
        window.open(FacebookProfileUrl, '_blank');
    };
    const redirectToInstagram = () => {
        const InstagramProfileUrl = "https://www.instagram.com/sultan_omar_0013/?hl=en";
        window.open(InstagramProfileUrl, '_blank');
    };
    const redirectToLeetcode = () => {
        const LeetcodeProfileUrl = "https://leetcode.com/SultanOmar0013/";
        window.open(LeetcodeProfileUrl, '_blank');
    };
    const redirectToHackerRank = () => {
        const HackerRankProfileUrl = "https://www.hackerrank.com/profile/sultanomar756";
        window.open(HackerRankProfileUrl, '_blank');
    };

    return (
        <>
            <section id="contact" className="contactSection">
            <div>
                    &emsp;
                </div> <div>
                    &emsp;
                </div>
                <div className="contactmaindiv">
                    <div className="contactthreeimg">

                        <motion.img
                            onClick={redirectToLinkedin}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={Linkedin} // Assuming Linkedin is the variable holding the image source
                            className="img-fluid contactImg"
                            alt="LinkedIn Profile" />

                        <motion.img
                            onClick={redirectToGmail}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={Gmail} className="img-fluid contactImg" />

                        <motion.img
                            onClick={redirectToGithub}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={Github} className="img-fluid contactImg" />
                        <motion.img

                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={Twitter} className="img-fluid contactImg" />
                        <motion.img
                            onClick={redirectToFacebook}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={Facebook} className="img-fluid contactImg" />
                        <motion.img
                            onClick={redirectToInstagram}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={Instagram} className="img-fluid contactImg" />
                    

                        <motion.img
                            onClick={redirectToHackerRank}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            src={HackerRank} className="img-fluid contactImg" />

                    </div>
                    <div className="leetdiv">
                    <motion.img
                            onClick={redirectToLeetcode}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.8, 1]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            src={Leetcode} className="img-fluid contactImg1" style={{ marginRight: '2%' }} />
                    </div>
                </div>
                <div>
                    &emsp;
                </div> 
            </section>

        </>
    )
};


export default Contact;