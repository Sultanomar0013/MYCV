import React from "react";
import '../css/home.css';
import TheStarryNightBlack from '../images/TheStarryNightBlack.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

    const backgroundStyle = {
        backgroundImage: `url(${TheStarryNightBlack})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
    };

    return (
        <>
            <div className="container-fluid p-0 " style={backgroundStyle}>
                <div className="titletextdiv">
                    <p className="text-white titletext">hello</p>
                </div>
            
            </div>
        </>
    );
}

export default Home;