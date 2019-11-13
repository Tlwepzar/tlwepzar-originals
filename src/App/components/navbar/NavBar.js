import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class NavBar extends React.Component {
    homeClick(){

    }
    render() {
        return (
            <header role="banner" className="headerShadow">
                <div className="navbar">
                    <img className="logo" href="/" src={require('../../assets/img/logo.jpg')} alt="logo"/>
                    <Menu>
                        <a id="home" className="menu-item" href="#portfolio-services" >Home</a>
                        <a id="about" className="menu-item" href="#portfolio-summary">About</a>
                        <a id="project" className="menu-item" href="#portfolio-projects">Projects</a>
                    </Menu>
                </div>
            </header>
        )
    }
}

export default NavBar;