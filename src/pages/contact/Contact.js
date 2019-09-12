import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './contact.scss';

function Map() {
    return(
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{
                lat: 32.715760,
                lng: -117.163820
            }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const API_KEY = "AIzaSyBJ8imfHXgPMfgQuA5GOwHa5Yht89d29Uk";

class Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           
        };
    }

    render() {
        return(
            <div className="contact">
                <div className="spacer"></div>
                <div className="contact-section">
                    <div className="our-map" >
                        <WrappedMap 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.
                                exp&libraries=geometry,drawing,places&key=${API_KEY}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `500px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <hr />
                        <h3>To contact Inkhorn Legal, please use the contact information below:</h3>

                        <div className="address">
                            <b>Inkorn Legal</b><br />
                            21 Broadway <br />
                            San Diego, CA 92115
                        </div>

                        <div className="contact-info-breakdown">
                            <b>Phome:</b> 619.000.0000 <br />
                            <b>Fax:</b> 619.000.0000 <br />
                            <b>Email:</b> InkhornLegal@Inkhorn.com
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Contact;