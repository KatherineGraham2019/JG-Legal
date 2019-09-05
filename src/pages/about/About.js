import React from 'react';
import './about.scss';

class About extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div className="about">
                <div className="spacer"></div>
                <div className="overview-section">
                    <div className="side-view">
                        <h2>Overview</h2>
                        <hr></hr>
                    </div>
                    
                    <article className="overview-info">
                        This is the law firm you have been looking for, with first rate service and affordable rates, 
                        Inkhorn is the future of litigation in San Diego. As an upstart San Diego business law firm, 
                        we specialize as litigators and trial lawyers and are working towards offering full-service legal 
                        advice to our clients. 
                        <br />
                        Every member of our staff signs a pledge to uphold the highest standard of ethics and morality, 
                        and the principles or our practice are time-honored traditions of honesty, integrity, transparency, 
                        diligence and focus. We believe that by serving our clients, we are serving God.
                    </article>
                </div>

                <div className="links">

                </div>

                <div className="overview-section">
                    <article className="overview-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </article>
                    <div className="side-view">
                        <h2>Services</h2>
                        <hr></hr>
                    </div>
                </div>
            </div>
        );
    }

}

export default About;