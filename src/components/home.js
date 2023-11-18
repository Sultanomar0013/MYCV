import React, { useEffect } from "react";
import '../css/home.css';
import $ from 'jquery';
import 'tilt.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "../images/profile.png"
import Typed from "typed.js";

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
                        <h1>Hey There!!! My name is Omar Saleh Sultan,  <span className="auto-type" style={{ color: "chocolate" }}></span></h1>

                    </div>
                    <div className="container imgdiv">
                        <img src={Profile} alt="Profile IMG" className="profile-image" />
                    </div>
                </div>
            </section>

            <section className="aboutmeSection">
                <div className="tiltcard" data-tilt>
                    <div className="tilttextdiv">
                        <h1 >helloWorld</h1>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;