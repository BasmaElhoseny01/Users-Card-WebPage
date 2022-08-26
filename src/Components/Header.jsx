import React from "react";

import Logo from '../images/Logo.png';

<link rel="stylesheet" href="../App.css" />

let Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Header;