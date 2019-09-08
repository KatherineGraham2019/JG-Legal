import React from 'react';
import AboutText from './AboutText.js';
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
                        {AboutText.overview1}
                        <br />
                        <br />
                        {AboutText.overview2}
                    </article>
                </div>

                <div className="links">

                </div>

                <div className="overview-section">
                    <div className="side-view">
                        <h2>Services</h2>
                        <hr></hr>
                    </div>
                    <article className="overview-info">
                        <b>Litigation:</b> {AboutText.litigation}
                        <br />
                        <br />
                        <b>First Amendment Law:</b> {AboutText.firstAmendmentLaw}
                        <br />
                        <br />
                        <b>Civil Rights:</b> {AboutText.civilRights}
                        <br />
                        <br />
                        <b>Human Trafficking:</b> {AboutText.huamnTrafficking}
                        <br />
                        <br />
                        <b>Transactional Practice:</b> {AboutText.transactionalPractice}
                    </article>
                </div>

                <div className="links">

                </div>

                <div className="overview-section">
                    <div className="side-view">
                        <h2>Causes</h2>
                        <hr></hr>
                    </div>
                    
                    <article className="overview-info">
                        {AboutText.causes1}
                        <br />
                        <br />
                        {AboutText.causes2}
                        <br />
                        <br />
                        {AboutText.causes3}
                    </article>
                </div>
            </div>
        );
    }

}

export default About;