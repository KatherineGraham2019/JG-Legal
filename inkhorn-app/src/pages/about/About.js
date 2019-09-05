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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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