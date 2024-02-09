import React from 'react';

function Header() {
    const headerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '15px',
        textAlign: 'center',
    };

    const logoStyle = {
        margin: '0',
    };

    const navListStyle = {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    };

    const navLinkStyle = {
        textDecoration: 'none',
        color: '#fff',
        margin: '0 15px',
        fontSize: '18px',
    };

    return (
        <header style={headerStyle}>
            <h1 style={logoStyle}>My Website</h1>
            <nav>
                <ul style={navListStyle}>
                    <li><a href="/" style={navLinkStyle}>Home</a></li>
                    <li><a href="/about" style={navLinkStyle}>About</a></li>
                    <li><a href="/contact" style={navLinkStyle}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;