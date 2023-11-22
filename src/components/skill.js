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
                    <div style={{ display: 'flex', justifyContent: 'center', width: '80%' }}>
                        <table class="fixed-height-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><h5>Language :</h5></td>
                                    <td>
                                        <img src={CPlus} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                        <img src={PHP} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                        <img src={JS} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                    </td>


                                </tr>
                                <tr>
                                    <td><h5>Front-End Desingn :</h5></td>
                                    <td><img src={HTML} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                        <img src={CSS} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                        <img src={Bootstrap} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                        <img src={Framer} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                        <img src={Reactimg} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                    </td>

                                </tr>

                                <tr>
                                    <td><h5>Back-End :</h5></td>
                                    <td><img src={Expressimg} className="img-fluid skillimage" style={{ width: '15%', height: '' }} />
                                        <img src={Nodeimg} className="img-fluid skillimage" style={{ width: '13%', height: '' }} />
                                        <img src={PHP} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                    </td>

                                </tr>
                                <tr>
                                    <td><h5>Database :</h5></td>
                                    <td> <img src={Mongoimg} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                        <img src={Mysqlimg} className="img-fluid skillimage" style={{ width: '15%', height: '' }} />
                                    </td>

                                </tr>
                                <tr>
                                    <td><h5>Version Control :</h5></td>
                                    <td><img src={Github} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                    </td>

                                </tr>
                                <tr>
                                    <td><h5>Other Software :</h5></td>
                                    <td><img src={Postman} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                    </td>

                                </tr>
                                <tr>
                                    <td><h5>Other Skills</h5></td>
                                    <td><img src={Leetcode} className="img-fluid skillimage" style={{ width: '20%', height: '' }} />
                                        <img src={HackerRank} className="img-fluid skillimage" style={{ width: '10%', height: '' }} />
                                    </td>

                                </tr>

                            </tbody>
                        </table>


                    </div>

                </div>
            </section>
        </>

    );
}
export default Skill;