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
    const [selectedDiv, setSelectedDiv] = useState(null);

    const handleClick = (divName) => {
        setSelectedDiv(divName === selectedDiv ? null : divName);
    };

    const renderDetails = (divName, details) => {
        if (selectedDiv === divName) {
            return <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{details}</div>;
        }
        return null;
    };

    useEffect(() => {
        $(".tiltcard").tilt({
            max: 25,
            speed: 400,
            glare: false,
            "max-glare": 0.5,
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
            $(".tiltcard").tilt("destroy");
        };
    }, []);

    return (
        <>
            <section>
                <div className=" textdiv ">
                    <div className="container content text-3d-shadow">
                        <Reveal>
                            <h1>
                                Hey There!!! My name is Omar Saleh Sultan,{" "}
                                <span
                                    className="auto-type"
                                    style={{ color: "chocolate" }}
                                ></span>
                            </h1>
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

            <section className="aboutmeSection">
                <div className=" tiltcard" data-tilt>
                    <div className="aboutme">
                        <h6>About Me</h6>
                    </div>
                    <div className="aboutmepara">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className=" education">
                        <div className="edutitle">
                            <h1>Education Qualification</h1>
                        </div>
                    
                
                    <div className="edumaindiv">
                        <div className="edusubdiv" onClick={() => handleClick("SSC")}>
                            <h5>SSC</h5>
                        </div>
                        <div className="edusubdiv" onClick={() => handleClick("HSC")}>
                            <h5>HSC</h5>
                        </div>

                        <div className="edusubdiv" onClick={() => handleClick("BSC")}>
                            <h5>BSC</h5>
                        </div>
                        <div className="edusubdiv" onClick={() => handleClick("MSC")}>
                            <h5>MSC</h5>
                        </div>
                    </div>
                    
                    <div className="eduhiddendiv">
                        {renderDetails(
                            "SSC",
                            <div className="card" style={{ width: '100%', height: '100%', borderRadius: '20px' }}>
                                <div className="row no-gutters" style={{ height: '100%' }}>
                                    <div className="col-md-6  col-12 eduonclickhiddendiv" >
                                        <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                    </div>
                                    <div className="col-md-6  col-12">
                                        <div className="card-body hiddencard" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                            <h5 className="card-title">From National University</h5>
                                            <p className="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {renderDetails(
                            "HSC",
                            <div className="card" style={{ width: '100%', height: '100%', borderRadius: '20px' }}>
                            <div className="row no-gutters" style={{ height: '100%' }}>
                                <div className="col-md-6  col-12 eduonclickhiddendiv" >
                                    <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                </div>
                                <div className="col-md-6  col-12">
                                    <div className="card-body hiddencard" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                        <h5 className="card-title">From National University</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        {renderDetails(
                            "BSC",
                            <div className="card" style={{ width: '100%', height: '100%', borderRadius: '20px' }}>
                                <div className="row no-gutters" style={{ height: '100%' }}>
                                    <div className="col-md-6  col-12 eduonclickhiddendiv" >
                                        <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                    </div>
                                    <div className="col-md-6  col-12">
                                        <div className="card-body hiddencard" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                            <h5 className="card-title">From National University</h5>
                                            <p className="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {renderDetails(
                            "MSC",
                            <div className="card" style={{ width: '100%', height: '100%', borderRadius: '20px' }}>
                                <div className="row no-gutters" style={{ height: '100%' }}>
                                    <div className="col-md-6  col-12 eduonclickhiddendiv" >
                                        <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                    </div>
                                    <div className="col-md-6  col-12">
                                        <div className="card-body hiddencard" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                                            <h5 className="card-title">From National University</h5>
                                            <p className="card-text">
                                                Some quick example text to build on the card title and
                                                make up the bulk of the card's content.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
