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
                        <b>Litigation:</b> We begin with a trial-ready approach and willingness handle any matter before 
                        any Court in the State of California. From this position, we work to resolve disputes long before 
                        they reach trial. With the best team in San Diego, and 
                        <br />
                        <br />
                        <b>Civil Rights:</b> If one person in our city suffers a violation of their civil rights, then we all 
                        suffer with them. It is our goal to make sure every private or public action that would affect the rights 
                        of our clients is vigorously opposed. We use every tool at our disposal to vindicate the rights of our 
                        clients, including the Unruh Civil Rights Act, the Tom Bane Act, the Ralph Civil Rights Act, the Constitution 
                        of the State of California, and the Constitution of the United States of America. 
                        <br />
                        <br />
                        <b>Human Trafficking:</b> California Civil Code § 52.5(a) states that “A victim of human trafficking, as 
                        defined in Section 236.1 of the Penal Code, may bring a civil action for actual damages, compensatory 
                        damages, punitive damages, injunctive relief, any combination of those, or any other appropriate relief. 
                        A prevailing plaintiff may also be awarded attorney’s fees and costs.” We are dedicated to seeing Human 
                        Trafficking ended in Southern California. We uphold the highest standards of privacy for our clients, 
                        and are willing to bring a civil suit against any predator in our community. 
                        <br />
                        <br />
                        <b>Transactional Practice:</b> Our firm is ready to help in any kind of transaction, from business formation 
                        to complex contracts and information on employment law - we will take the time to make sure our clients get 
                        it right the first time and avoid costly litigation down the road. 
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