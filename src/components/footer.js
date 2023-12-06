import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>This Website Made by Sultan Omar</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#2b323c',
        padding: '20px',
        textAlign: 'center',
        bottom: '0',
        width: '100%',
        color:'white',
        fontWeight:5,
    },
};

export default Footer;
