import React from 'react';
import logo from '../m4code.png';  // Twoje główne logo
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
                            <img src={logo} alt="M4CODE logo" />
                            <strong style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>M4CODE.PL</strong>
                            <a href="https://discord.com/invite/kEbWN4DktJ">Discord</a>
                            <a href="https://www.facebook.com/m4codepl/">Facebook</a>
                            <a href="https://www.youtube.com/channel/UCXK5ojk47wvuUaoQPHrs4Ng">Youtube</a>
                        </div>
                    </div>
                </section>

                {/* Stopka */}
                <footer className="footer">
                    <div className="footer-left">
                        <span style={{ color: 'white', fontSize: '17px', fontWeight: 'normal' }}>Copyright © 2021-2024 M4CODE.PL. Wszelkie prawa zastrzeżone.</span>
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
