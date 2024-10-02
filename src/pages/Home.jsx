import React from 'react';
import logo from '../lanacode.png';  // Twoje główne logo
import poweredLogo from '../m4code.png';  // Logo do stopki
import Particle from '../Particle.js';

class Home extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Particle />
                <section className="content">
                    <div className="container">
                        <div className="logoImg">
                            <img src={logo} alt="LanaCode logo" />
                            <strong style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>LanaCode</strong>
                            <a href="https://discord.gg/Bcd4FxkCkg">Discord</a>
                            <a href="https://www.youtube.com/@Naysoo_">Youtube</a>
                        </div>
                    </div>
                </section>

                {/* Stopka */}
                <footer className="footer">
                    <div className="footer-left">
                        <span style={{ color: 'white', fontSize: '17px', fontWeight: 'normal' }}>Copyright © 2024 LanaCode. Wszelkie prawa zastrzeżone.</span>
                    </div>
                    <div className="footer-right">
                        <strong style={{ color: 'gray', fontWeight: 'bold', fontSize: '15px' }}>Strona wykonana przez:</strong>
                        <a href="https://m4code.pl" target="_blank" rel="noopener noreferrer">
                            <img src={poweredLogo} alt="Powered by Logo" className="powered-logo" />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
