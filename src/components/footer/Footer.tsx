import * as React from 'react';
import './style.css';

const Footer = () => {
    return (
        <div className="footer pt-4">
            <div className="container">
                <div className="down">
                    <div className="row">
                        <div className="col-md-3">
                            <h4>
                                Products
                            </h4>
                            <ul>
                                <li>SMS</li>
                                <li>USSD</li>
                                <li>Airtime</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Resources</h4>
                            <ul>
                                <li>Support</li>
                                <li>Developers</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Company</h4>
                            <ul>
                                <li>Our Story</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Legal</h4>
                            <ul>
                                <li>Terms of service</li>
                                <li>Privacy Policy</li>
                                <li>Service level <br /> Agreement </li>
                            </ul>

                            <div className="social-media pt-3">
                                <h4 className="pb-3">social media</h4>
                                <span><a href=""><i className="fa fa-youtube-play" aria-hidden="true"></i></a></span>
                                <span><a href=""><i className="fa fa-facebook-official" aria-hidden="true"></i></a></span>
                                <span><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></span>
                                <span><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="f-b">@2019 | All Rights Reserved | Company Name </p>
            </div>

        </div>
    );
}
export default React.memo(Footer);