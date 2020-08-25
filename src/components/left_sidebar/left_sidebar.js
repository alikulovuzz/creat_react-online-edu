import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>
                <div className="sidebar-side left-sidebar col-lg-3 col-md-12 col-sm-12">
                    <aside className="sidebar sticky-top">
                        {/* Tags Widget */}
                        <div className="sidebar-widget tags-widget">
                            <div className="widget-content">
                                <div className="sidebar-title">
                                    <h6>Popular Topics</h6>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><a href="#">Animation</a></li>
                                        <li><a href="#">WordPress</a></li>
                                        <li><a href="#">Bootstrap</a></li>
                                        <li><a href="#">User Interface</a></li>
                                        <li><a href="#">Web Design</a></li>
                                        <li><a href="#">Photoshop</a></li>
                                        <li><a href="#">Responsive Design</a></li>
                                        <li><a href="#">Figma</a></li>
                                        <li><a href="#">Adobe XD</a></li>
                                        <li><a href="#">Sketch</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Categories Widget */}
                        <div className="sidebar-widget categories-widget">
                            <div className="widget-content">
                                <div className="sidebar-title">
                                    <h6>Top Categories</h6>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><a href="category.html"><span className="icon flaticon-web-programming" />Development</a></li>
                                        <li><a href="category.html"><span className="icon flaticon-pie-chart" />Business</a></li>
                                        <li><a href="category.html"><span className="icon flaticon-megaphone" />Marketing</a></li>
                                        <li><a href="category.html"><span className="icon flaticon-computer" />IT and Software</a></li>
                                        <li><a href="category.html"><span className="icon flaticon-picture" />Photography</a></li>
                                        <li><a href="category.html"><span className="icon flaticon-ux" />UX Design</a></li>
                                    </ul>
                                    <a href="category.html" className="all-category">View All Categories</a>
                                </div>
                            </div>
                        </div>
                        {/* Featured Widget */}
                        <div className="sidebar-widget featured-widget">
                            <div className="widget-content">
                                <div className="sidebar-title">
                                    <h6>Featured Instructors</h6>
                                </div>
                                <div className="content">
                                    <div className="featured-carousel owl-carousel owl-theme">
                                        {/* Feature Block */}
                                        <div className="featured-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <a href="instructor-profile.html" className="overlay-link" />
                                                    <img src="images/resource/feature-1.jpg" alt="" />
                                                    {/* Overlay Box */}
                                                    <div className="overlay-box">
                                                        <div className="overlay-inner">
                                                            <div className="overlay-content">
                                                                {/* Author Image */}
                                                                <div className="author-image">
                                                                    <img src="images/resource/author-5.jpg" alt="" />
                                                                </div>
                                                                <div className="name">Jhon Deo</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Feature Block */}
                                        <div className="featured-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <a href="instructor-profile.html" className="overlay-link" />
                                                    <img src="images/resource/feature-2.jpg" alt="" />
                                                    {/* Overlay Box */}
                                                    <div className="overlay-box">
                                                        <div className="overlay-inner">
                                                            <div className="overlay-content">
                                                                {/* Author Image */}
                                                                <div className="author-image">
                                                                    <img src="images/resource/author-6.jpg" alt="" />
                                                                </div>
                                                                <div className="name">Jhon Deo</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Feature Block */}
                                        <div className="featured-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <a href="instructor-profile.html" className="overlay-link" />
                                                    <img src="images/resource/feature-3.jpg" alt="" />
                                                    {/* Overlay Box */}
                                                    <div className="overlay-box">
                                                        <div className="overlay-inner">
                                                            <div className="overlay-content">
                                                                {/* Author Image */}
                                                                <div className="author-image">
                                                                    <img src="images/resource/author-7.jpg" alt="" />
                                                                </div>
                                                                <div className="name">Jhon Deo</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Feature Block */}
                                        <div className="featured-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <a href="instructor-profile.html" className="overlay-link" />
                                                    <img src="images/resource/feature-1.jpg" alt="" />
                                                    {/* Overlay Box */}
                                                    <div className="overlay-box">
                                                        <div className="overlay-inner">
                                                            <div className="overlay-content">
                                                                {/* Author Image */}
                                                                <div className="author-image">
                                                                    <img src="images/resource/author-5.jpg" alt="" />
                                                                </div>
                                                                <div className="name">Jhon Deo</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Feature Block */}
                                        <div className="featured-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <a href="instructor-profile.html" className="overlay-link" />
                                                    <img src="images/resource/feature-2.jpg" alt="" />
                                                    {/* Overlay Box */}
                                                    <div className="overlay-box">
                                                        <div className="overlay-inner">
                                                            <div className="overlay-content">
                                                                {/* Author Image */}
                                                                <div className="author-image">
                                                                    <img src="images/resource/author-6.jpg" alt="" />
                                                                </div>
                                                                <div className="name">Jhon Deo</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Feature Block */}
                                        <div className="featured-block">
                                            <div className="inner-box">
                                                <div className="image">
                                                    <a href="instructor-profile.html" className="overlay-link" />
                                                    <img src="images/resource/feature-3.jpg" alt="" />
                                                    {/* Overlay Box */}
                                                    <div className="overlay-box">
                                                        <div className="overlay-inner">
                                                            <div className="overlay-content">
                                                                {/* Author Image */}
                                                                <div className="author-image">
                                                                    <img src="images/resource/author-7.jpg" alt="" />
                                                                </div>
                                                                <div className="name">Jhon Deo</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Support Widget */}
                        <div className="sidebar-widget support-widget">
                            <div className="widget-content">
                                <h5>We are here to help you</h5>
                                <div className="text">Lorem ipsum dolor sit amet, con<br />sectetur adipisicing elit, </div>
                                <a href="help.html" className="theme-btn btn-style-one"><span className="txt">Support Center</span></a>
                            </div>
                        </div>
                    </aside>
                </div>
            </>
        )
    }
}