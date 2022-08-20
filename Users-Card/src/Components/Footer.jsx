import React from "react";

import FacebookLogo from '../images/facebook.png'
import InstgramLogo from '../images/instagram.png'
import GitHubLogo from '../images/github.png'
import LinkedInLogo from '../images/linkedin.png'
import CodeForcesLogo from '../images/codeforces.png'
import gmailLogo from '../images/gmail.png'


let Footer = () => {
    return (
        <div>
            <div className="Follow_Me">
                <h2>Follow Me 😉</h2>
                <div className="social">
                    <a href="https://www.instagram.com/basmaelhoseny/"><img src={InstgramLogo} alt="instagram" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100003984004265"><img src={FacebookLogo} alt="facebook" /></a>
                    <a href="https://github.com/BasmaElhoseny01"><img src={GitHubLogo} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/BasmaElhoseny01/"><img src={LinkedInLogo} alt="linkedin" /></a>
                    <a href="mailto:basmaelhoseny6@gmail.com"><img src={gmailLogo} alt="Gmail" /></a>
                    <a href="https://codeforces.com/profile/Basma_Elhoseny"><img src={CodeForcesLogo} alt="CodeForces" /></a>
                </div>
            </div>
            <div className="Copyrights">
                <h4>Copyright © Basma Elhoseny</h4>
            </div>
        </div>
    );
}

export default Footer;