import React, { useEffect, useState } from "react";
import "../css/skill.css";
import $, { speed } from "jquery";
import "tilt.js";
import { motion, useAnimation } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import HTML from "../logoImages/html-5.png";
import CSS from "../logoImages/css-3.png";
import Bootstrap from "../logoImages/bootstrap.png";
import Framer from "../logoImages/framer.png";
import Reactimg from "../logoImages/react.png";
import CPlus from "../logoImages/c-.png";
import PHP from "../logoImages/php.png";
import JS from "../logoImages/js.png";
import Expressimg from "../logoImages/express.png";
import Nodeimg from "../logoImages/node.png";
import Mongoimg from "../logoImages/Mongodb.png";
import Mysqlimg from "../logoImages/mySql.png";
import Postman from "../logoImages/postman.png";
import Github from "../logoImages/github.png";
import Leetcode from "../logoImages/leetcode.png";
import HackerRank from "../logoImages/Hackerrank.png";



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
            <section>
                <div className="skilldiv">
                    <div className="skillstitle">
                        <h1>Skills</h1>
                    </div>
                    <div className="allskills">
                        <div className="language">
                            <h4 className="left">Language</h4>
                            <img src={CPlus} className="img-fluid" style={{ width:'4%',height:''}}/>
                            <img src={PHP} style={{ width:'4%',height:''}}/>
                            <img src={JS} style={{ width:'4%',height:''}}/>
                        </div>
                        <div className="design">
                            <h4 className="left">Front-End Desingn</h4>
                            <img src={HTML} className="img-fluid" style={{ width:'4%',height:''}}/>
                            <img src={CSS} style={{ width:'4%',height:''}}/>
                            <img src={Bootstrap} style={{ width:'4%',height:''}}/>
                            <img src={Framer} style={{ width:'4%',height:''}}/>
                            <img src={Reactimg} style={{ width:'4%',height:''}}/>
                        </div>
                        <div className="Back-End">
                            <h4 className="left">Back-End</h4>
                            <img src={Expressimg} style={{ width:'4%',height:''}}/>
                            <img src={Nodeimg} style={{ width:'4%',height:''}}/>
                            <img src={PHP} style={{ width:'4%',height:''}}/>
                        </div>
                        <div className="db">
                            <h4 className="left">Database</h4>
                            <img src={Mongoimg} style={{ width:'4%',height:''}}/>
                            <img src={Mysqlimg} style={{ width:'4%',height:''}}/>
                        </div>
                        <div className="vc">
                            <h4 className="left">Version Control</h4>
                            <img src={Github} style={{ width:'4%',height:''}}/>
                        </div>
                        <div className="other">
                            <h4 className="left">Other Software</h4>
                            <img src={Postman} style={{ width:'4%',height:''}}/>
                        </div>
                        <div className="otherskills">
                            <h4 className="left">Other Skills</h4>
                            <img src={Leetcode} style={{ width:'4%',height:''}}/>
                            <img src={HackerRank} style={{ width:'4%',height:''}}/>
                        </div>
                    </div>

                </div>
            </section>
        </>

    );
}
export default Skill;