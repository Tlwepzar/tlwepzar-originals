import React from 'react'
// import { SocialIcon } from 'react-social-icons';

class Sections extends React.Component {
    render() {
        return (
            <div className="Sections">
                <section id="portfolio-services">
                    <div>
                        <div className="supply">
                            <h4>We Supply IT Hardware and Consumable</h4>
                            <p>
                                Desktops
                                &nbsp;
                            <img src={require('../../assets/img/desktops.png')} alt="" />
                                &nbsp;&nbsp;
                            Notebooks  <img src={require('../../assets/img/macbook.png')} alt="" />
                                <br />
                                PC Hardware  &nbsp; <img id="hardware" src={require('../../assets/img/hardware.png')} alt="" />
                                <br /><br />
                                External Harddrives <img src={require('../../assets/img/ext-hdd.png')} alt="" />
                                Keyboard &amp; Mouse <img src={require('../../assets/img/keyboard.png')} alt="" />
                                <br /><br />
                                <img src={require('../../assets/img/modem.png')} alt="" /> Modem &amp; Routers  &nbsp;
                            <img src={require('../../assets/img/print-supplies.png')} alt="" />  &nbsp; Printer Ink and Toner
                        </p>
                        </div>

                        <div className="cloud">
                            <h4>We also assist in Cloud Solutions Architectures</h4>
                            <img className="banner-cloud" src={require('../../assets/img/banner-cloud.png')} alt="banner-cloud" />
                            <hr />
                        </div>

                        {/* <button onClick={this.handleClick}>{buttonText}</button> */}

                    </div>

                </section>

                <section id="portfolio-projects">

                    <div className="projects">
                        <h2>Projects</h2>
                        <hr />
                        <p>Below are a few POC's and Projects we previously developed.</p>
                        <h3>NUPSAW MEMBERSHIP SYSTEM</h3>
                        <hr />
                        <img className="nupsaw-eg" src={require('../../assets/img/banner-nupsaw.png')} alt="nupsaw-eg" />
                        <h3>Digi-Drive App</h3>
                        <hr />
                        <img className="digidrive-eg" src={require('../../assets/img/banner-digidrive.png')} alt="digidrive-eg" />
                        <h3>Events Management App</h3>
                        <hr />
                        <img className="events-eg" src={require('../../assets/img/banner-events.png')} alt="events-eg" />
                        <p>These were just POC's for <br /> potential clients</p>
                    </div>

                </section>

                <section id="portfolio-desc">
                    <div className="page-wrap">
                        <main id="portfolio-summary">
                            <h2>Profile</h2>
                            <hr />
                            <img className="pro-pic" src={require('../../assets/img/pro-pic-1.jpg')} alt="pro-pic" />
                            <br />
                            This site was created by Tshepang Molefe.
                            <br />
                            a South African based self taught Full Stack Developer
                            <br />
                            focused on crafting clean &amp; user‑friendly experiences.
                            <br /><br />
                            He is currently completing a Bcom IT Management Degree.
                            <br /><br />
                            Tshepang currently has the following
                            <br />
                            intermediate knowlegde
                            &amp; skillsets in computer programming:
                            <br />
                            HTML5, CSS3, JavaScript, Node js, Angular js, React
                            <br />
                            PHP, Python &amp; AWS Cloud Solutions Architecture, as well as Microsoft Azure...
                            <br /><br />
                            He is very Talkative, Energetic, Trustworthy, Compassionate &amp;
                            <br />
                            a Self Motivated indiviual with a strict 'attention to detail' mindset.
                            <br /><br />
                            He is also the Founder of &nbsp;
                            <a className="titles" id="zarwings" href="http://instagram.com/zarwings">Zar Wings ™</a>
                            {/* &nbsp; by&nbsp;
                            <a className="titles" id="tlwepzar" href="http://tlwepzar.com">Tlwep'Zar ®</a> */}
                            <br /> <br />
                            {/* &nbsp; Check out my projects here  &nbsp;>>>
                            <a href="http://tlwepzar.com/projects">
                            link
                            <span role="img" aria-label="link"> 🔗 </span>
                            to projects
                            </a> <br/>  */}
                            Want to chat about something? Get in touch with him
                            <br />
                        </main>
                    </div>
                </section>

                <section>

                    <br />
                    <div id="contact-form">
                        <form >
                            <input type="text" id="firstname" placeholder="First Name..." />
                            <input type="text" id="surname" placeholder="Surname..." /><br />
                            <input type="text" id="mobileNo" placeholder="Mobile Number..." /><br/>
                            <input type="email" id="email" placeholder="Email Address..." /><br />
                            <textarea id="subject" name="subject" placeholder="Write something..."></textarea><br />
                            {/* <div className="social-icons">
                                <SocialIcon id="github" url="https://github.com/tlwepzar" />
                                <SocialIcon id="linkedin" url="https://linkedin.com/in/tshepang-molefe-03045474/" />
                                <SocialIcon id="twitter" url="https://twitter.com/tshepicooks" />
                                <SocialIcon id="instagram" url="https://instagram.com/tshepicooks" />
                                <SocialIcon id="gmail" url="mailto:tlwepzar@gmail.com" />
                            </div> */}
                            <input id="submit" type="submit" value="Submit" />
                            <br />
                        </form>
                    </div>
                </section>

                <section id="portfolio-qoute">
                    <div className="qoute-wrap">
                        <p className="qoute"> "I am a Good Problem Solver, a logical thinker and I love to see things grow.
                            <br /><br />
                            Planting and gardening clears my head. Music is good for the soul.
                            <br /><br />

                            Keep it clean, Inside and Out... "
                            <br /><br />
                            - Tshepang Molefe
                        </p>
                        {/* <button className="check-work" href="#portfolio-projects">Check out my work</button> */}
                        <br />
                    </div>
                </section>

            </div>
        )
    }
}

export default Sections