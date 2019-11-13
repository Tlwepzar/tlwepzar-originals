import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer>
            <div id="portfolio-contact">
                <h5> © 2019 - TLWEPZAR ORIGINALS</h5>
                <div className="social-icons">
                    <SocialIcon url="https://github.com/tlwepzar"/>
                    <SocialIcon id="linkedin" url="https://linkedin.com/in/tshepang-molefe-03045474/"/>
                    <SocialIcon url="mailto:tlwepzar@gmail.com"/>
                </div>
                <br/>
            </div>
        </footer>
    )
}

export default Footer