import React from 'react';
import AboutText from './AboutText.js';
import ServicesText from './ServicesText.js';
import './about.scss';

class About extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    renderTextSections(text) {
        const services = text.map((section, index) => {
            return (
                <React.Fragment>
                    <b>{section.title}:</b> {section.text}
                    {index !== text.length &&
                        <React.Fragment>
                            <br />
                            <br />
                        </React.Fragment>
                    }
                </React.Fragment>
            )
        });

        return services;
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
                        {this.renderTextSections(ServicesText)}
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