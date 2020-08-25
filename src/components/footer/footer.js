import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>
                <footer className="main-footer">
                    {/* Pattern Layer */}
                    <div className="pattern-layer" style={{ backgroundImage: 'url(images/background/pattern-2.png)' }} />
                    <div className="pattern-layer-two" style={{ backgroundImage: 'url(images/background/pattern-3.png)' }} />
                    {/* Upper Box */}
                    <div className="upper-box">
                        <div className="auto-container">
                            <h4>Subscribe to know our <br /> every single updates</h4>
                            {/* Subscribe Form */}
                            <div className="subscribe-form">
                                <form method="post" action="contact.html">
                                    <div className="form-group clearfix">
                                        <span className="icon flaticon-mail" />
                                        <input type="email" name="email" defaultValue placeholder="Please Enter Your Email" required />
                                        <button type="submit" className="theme-btn btn-style-one"><span className="txt">Subscribe Now</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="auto-container">
                        {/* Widgets Section */}
                        <div className="widgets-section">
                            <div className="row clearfix">
                                {/* Big Column */}
                                <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="row clearfix">
                                        {/*Footer Column*/}
                                        <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                                            <div className="footer-widget logo-widget">
                                                <div className="logo">
                                                    <a href="index.html"><img src="images/footer-logo.png" alt="" /></a>
                                                </div>
                                                <div className="text">There are many variations of passages of Lorem Ipsum available,</div>
                                                <div className="social-box">
                                                    <a href="#" className="fa fa-facebook-square" />
                                                    <a href="#" className="fa fa-twitter-square" />
                                                    <a href="#" className="fa fa-linkedin-square" />
                                                </div>
                                            </div>
                                        </div>
                                        {/*Footer Column*/}
                                        <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                                            <div className="footer-widget links-widget">
                                                <ul className="links-widget">
                                                    <li><a href="#">Afficiates</a></li>
                                                    <li><a href="#">Partners</a></li>
                                                    <li><a href="#">Reviews</a></li>
                                                    <li><a href="#">Blogs</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Big Column */}
                                <div className="big-column col-lg-6 col-md-12 col-sm-12">
                                    <div className="row clearfix">
                                        {/*Footer Column*/}
                                        <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                            <div className="footer-widget links-widget">
                                                <ul className="links-widget">
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Support Area</a></li>
                                                    <li><a href="#">Documentations</a></li>
                                                    <li><a href="#">How it works</a></li>
                                                    <li><a href="#">Terms of Policy</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*Footer Column*/}
                                        <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                            <div className="footer-widget links-widget">
                                                <ul className="links-widget">
                                                    <li><a href="#">home</a></li>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Features</a></li>
                                                    <li><a href="#">Pricing</a></li>
                                                    <li><a href="#">Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer Bottom */}
                        <div className="footer-bottom text-center">
                            <div className="copyright">Copyright © 2020 AuburnForest</div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}