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
        backgroundColor: '#f0f0f0',
        padding: '20px',
        textAlign: 'center',
        bottom: '0',
        width: '100%',
    },
};

export default Footer;
