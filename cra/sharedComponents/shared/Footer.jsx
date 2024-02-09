import React from 'react';

function Footer() {
    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '15px',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 My Website. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;