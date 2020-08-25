import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>
                <section className="hidden-bar left-align">
                    <div className="color-layer" />
                    <div className="hidden-bar-closer">
                        <span className="flaticon-multiply" />
                    </div>
                    {/* Hidden Bar Wrapper */}
                    <div className="hidden-bar-wrapper">
                        <ul className="pages-list">
                            <li className="active"><a href="index.html"><span className="icon flaticon-home" />Home</a></li>
                            <li><a href="featured-courses.html"><span className="icon flaticon-book" />Featured Courses</a></li>
                            <li><a href="course-lesson.html"><span className="icon flaticon-category" />Courses Lesson</a></li>
                            <li><a href="category.html"><span className="icon flaticon-test" />Course Categories</a></li>
                            <li><a href="latest-courses.html"><span className="icon flaticon-subscription" />Latest Courses</a></li>
                            <li><a href="course-detail.html"><span className="icon flaticon-new-window" />Course Landing</a></li>
                            <li><a href="team.html"><span className="icon flaticon-instructor" />Popular Instructors</a></li>
                        </ul>
                        <div className="heading">Instructor</div>
                        <ul className="pages-list">
                            <li><a href="dashboard.html"><span className="icon flaticon-home" />Dashboard</a></li>
                            <li><a href="manage-course.html"><span className="icon flaticon-test" />Manage Courses</a></li>
                            <li><a href="earning.html"><span className="icon flaticon-scholarship" />Earnings</a></li>
                            <li><a href="edit-course.html"><span className="icon flaticon-report" />Edit Course</a></li>
                            <li><a href="instructor-profile.html"><span className="icon flaticon-file" />Instructor Profile</a></li>
                        </ul>
                        <div className="heading">Student</div>
                        <ul className="pages-list">
                            <li><a href="price.html"><span className="icon flaticon-money-bag" />Pricing</a></li>
                            <li><a href="enrolled-courses.html"><span className="icon flaticon-test" />Enrolled Courses</a></li>
                            <li><a href="certificate.html"><span className="icon flaticon-skills" />Certificate Center</a></li>
                            <li><a href="test.html"><span className="icon flaticon-quiz" />Quiz</a></li>
                            <li><a href="result.html"><span className="icon flaticon-document" />Quiz Result</a></li>
                            <li><a href="student-profile.html"><span className="icon flaticon-student" />Student Profile</a></li>
                        </ul>
                        <div className="heading">Pages</div>
                        <ul className="pages-list">
                            <li><a href="blog.html"><span className="icon flaticon-social-media" />Blog</a></li>
                            <li><a href="blog-detail.html"><span className="icon flaticon-article" />Blog Detail</a></li>
                            <li><a href="not-found.html"><span className="icon flaticon-garbage" />Not Found</a></li>
                            <li><a href="login.html"><span className="icon flaticon-contract" />Sign In</a></li>
                            <li><a href="sign-up.html"><span className="icon flaticon-clipboard" />Sign Up</a></li>
                            <li><a href="feedback.html"><span className="icon flaticon-thumb-up" />Feedback</a></li>
                            <li><a href="checkout.html"><span className="icon flaticon-checkout" />Checkout</a></li>
                            <li><a href="contact.html"><span className="icon flaticon-contact" />Contact Us</a></li>
                            <li><a href="setting.html"><span className="icon flaticon-settings-1" />Settings</a></li>
                            <li><a href="help.html"><span className="icon flaticon-information" />Help</a></li>
                        </ul>
                    </div>
                    {/*Copyright Text*/}
                    <div className="copyright-text">Copyright © 2020 Genter</div>
                </section>
            </>
        )
    }
}