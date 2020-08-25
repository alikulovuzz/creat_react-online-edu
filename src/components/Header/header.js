import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>
                <header className="main-header">
                    {/* Header Upper */}
                    <div className="header-upper">
                        <div className="outer-container">
                            <div className="clearfix">
                                {/* Header Left */}
                                <div className="header-left clearfix">
                                    {/* Left Sidebar Btn */}
                                    <div className="left-sidebar-btn hidden-bar-opener">
                                        <span className="icon flaticon-menu-2" />
                                    </div>
                                    <div className="pull-left logo-box">
                                        <div className="logo"><a href="index.html"><img src="images/logo.png" alt="" title /></a></div>
                                        <div className="dark-layout-logo"><a href="index.html"><img src="images/logo-4.png" alt="" title /></a></div>
                                    </div>
                                    {/* Search */}
                                    <div className="search-box">
                                        <form method="post" action="contact.html">
                                            <div className="form-group">
                                                <input type="search" name="search-field" defaultValue placeholder="Search course name" required />
                                                <button type="submit"><span className="icon fa fa-search" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                {/* Header Right */}
                                <div className="header-right clearfix">
                                    <div className="nav-outer clearfix">
                                        {/* Main Menu */}
                                        <nav className="main-menu navbar-expand-md">
                                            <div className="navbar-header">
                                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                    <span className="icon-bar" />
                                                </button>
                                            </div>
                                            <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                                                <ul className="navigation clearfix">
                                                    <li className="dropdown"><a href="#">Course</a>
                                                        <ul>
                                                            <li><a href="featured-courses.html">Featured Courses</a></li>
                                                            <li><a href="latest-courses.html">Latest Courses</a></li>
                                                            <li><a href="category.html">Course Categories</a></li>
                                                            <li><a href="course-detail.html">Course Landing</a></li>
                                                            <li><a href="course-lesson.html">Course Lesson</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="#">Instructor</a>
                                                        <ul>
                                                            <li><a href="dashboard.html">Instructor Dashboard</a></li>
                                                            <li><a href="manage-course.html">Manage Courses</a></li>
                                                            <li><a href="edit-course.html">Edit Course</a></li>
                                                            <li><a href="earning.html">Earnings</a></li>
                                                            <li><a href="instructor-profile.html">Instructor Profile</a></li>
                                                            <li><a href="team.html">Popular Instructors</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="#">Student</a>
                                                        <ul>
                                                            <li><a href="enrolled-courses.html">Enrolled Courses</a></li>
                                                            <li><a href="certificate.html">Certificate Center</a></li>
                                                            <li><a href="test.html">Quiz</a></li>
                                                            <li><a href="result.html">Quiz Result</a></li>
                                                            <li><a href="student-profile.html">Student Profile</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="#">Pages</a>
                                                        <ul>
                                                            <li><a href="price.html">Subscription</a></li>
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="blog-detail.html">Blog Detail</a></li>
                                                            <li><a href="not-found.html">Error Page</a></li>
                                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    {/* Options Box */}
                                    <div className="options-box clearfix">
                                        {/* Message Box */}
                                        <div className="message-box">
                                            <a href="#" className="icon flaticon-envelope" />
                                        </div>
                                        {/* End Message Box */}
                                        {/* Notification Box */}
                                        <div className="notification-box">
                                            <div className="dropdown">
                                                <button className="notification-box-btn dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flaticon-notification" /><i className="notification-alert" /></button>
                                                <div className="dropdown-menu pull-right cart-panel" aria-labelledby="dropdownMenu">
                                                    <div className="notification-block">
                                                        <div className="inner">
                                                            <div className="image"><img src="images/resource/author-1.jpg" alt="" /></div>
                                                            <h3><a href="#">Jessica Parl</a></h3>
                                                            <div className="notification-text">It is a long established fact that a most reader will be distracted by the way readable</div>
                                                            <div className="post-time">15 min ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="notification-block">
                                                        <div className="inner">
                                                            <div className="image"><img src="images/resource/author-2.jpg" alt="" /></div>
                                                            <h3><a href="#">David John</a></h3>
                                                            <div className="notification-text">It is a long established fact that a like reader will</div>
                                                            <div className="post-time">15 min ago</div>
                                                        </div>
                                                    </div>
                                                    <div className="notification-block">
                                                        <div className="inner">
                                                            <div className="image"><img src="images/resource/author-3.jpg" alt="" /></div>
                                                            <h3><a href="#">Jonathon Deo</a></h3>
                                                            <div className="notification-text">It is a long established fact that a reader will</div>
                                                            <div className="post-time">15 min ago</div>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="view">View All</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Notification Box */}
                                        {/* Profile Box */}
                                        <div className="profile-box dropdown" id="someElementID5">
                                            <div className="btn btn-default dropdown-toggle">
                                                <span className="profile-image"><img src="images/resource/author-4.jpg" alt="" /></span> <i className="arrow flaticon-down-arrow" />
                                            </div>
                                            <div className="profile-content">
                                                <div className="setting"><a href="setting.html">Settings</a></div>
                                                {/* Dark Mode */}
                                                <div className="dark-mode">
                                                    <div className="clearfix">
                                                        <div className="pull-left">
                                                            <div className="mode"><span className="icon"><img src="images/icons/moon.png" alt="" /></span> Dark Mode</div>
                                                        </div>
                                                        <div className="pull-right">
                                                            {/* Dark Btns */}
                                                            <ul className="dark-buttons clearfix">
                                                                <li data-tab="#" className="off">Off</li>
                                                                <li className="boll"><span className="round" /></li>
                                                                <li data-tab="#" className="on">On</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Pages */}
                                                <ul className="pages">
                                                    <li><a href="login.html">Sign In</a></li>
                                                    <li><a href="sign-up.html">Sign Up</a></li>
                                                    <li><a href="feedback.html">Feedback</a></li>
                                                    <li><a href="contact.html">Contact Us</a></li>
                                                    <li><a href="help.html">Help</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Header Upper*/}
                    {/* Mobile Menu  */}
                    <div className="mobile-menu">
                        <div className="menu-backdrop" />
                        <div className="close-btn"><span className="icon fa fa-remove" /></div>
                        <nav className="menu-box">
                            <div className="nav-logo"><a href="index.html"><img src="images/logo.png" alt="" title /></a></div>
                            <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
                        </nav>
                    </div>{/* End Mobile Menu */}
                </header>
            </>
        )
    }
}