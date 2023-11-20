import React, { useEffect, useState } from "react";
import "../css/education.css";
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

function Education() {
    const [selectedDiv, setSelectedDiv] = useState(null);

    const handleClick = (divName) => {
        setSelectedDiv(divName === selectedDiv ? null : divName);
    };

    const renderDetails = (divName, details) => {
        if (selectedDiv === divName) {
            return(
                <Popup>
                <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {details}
                </div>;
            </Popup>
            ) 
            
            
        }
        return null;
    };

    return (
        <>
            <section>
                <div className=" education">
                    <div className="edutitle">
                        <Scrolldown>
                        <h1>Education Qualification</h1>
                        </Scrolldown>
                    
                    </div>

                    <Scroll>
                        
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
                        </Scroll>
                    
                    
                    <div className="eduhiddendiv">
                        <Popup>
                        {renderDetails(
                            "SSC",
                            <div className="card" style={{ width: '100%', height: '100%', borderRadius: '20px' }}>
                                <div className="row no-gutters" style={{ height: '100%' }}>
                                    <div className="col-md-6  col-12 eduonclickhiddendiv" >
                                        <Popup>
                                        <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                        </Popup>
                                    
                                        
                                    
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
                                    <Popup>
                                        <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                        </Popup>
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
                                    <Popup>
                                        <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                        </Popup>
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
                                    <Popup>
                                        <img src={Demo} className="card-img-left img-fluid d-block" style={{ height: '100%' }} alt="..." />
                                        </Popup>
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
                        </Popup>
                        
                    </div>
                    
                
                </div>
            </section>
        </>
    )
};
export default Education;