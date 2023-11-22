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
                                    <th>Header 1</th>
                                    <th>Header 2</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Row 1, Cell 1</td>
                                    <td><img src={CPlus} className="img-fluid" style={{ width:'10%',height:''}}/></td>

                                </tr>
                                <tr>
                                    <td>Row 2, Cell 1</td>
                                    <td>Row 2, Cell 2</td>

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