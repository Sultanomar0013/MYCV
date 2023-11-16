import React from "react";
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
                <h1  className="text-white">hello</h1>
            </div>
        </>
    );
}

export default Home;