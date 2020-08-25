import React, { Component } from 'react'
import './style.css'


export default class Main extends Component {
    render() {
        return (
            <>
                <div className="styled-form">
                    <form method="post" action="index.html">
                        <div className="row clearfix">
                            {/* Form Group */}
                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                <label>First Name</label>
                                <input type="text" name="username" defaultValue placeholder="First Name" required />
                            </div>
                            {/* Form Group */}
                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                <label>Last Name</label>
                                <input type="text" name="username" defaultValue placeholder="Last Name" required />
                            </div>
                            {/* Form Group */}
                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                <label>Phone Number</label>
                                <input type="text" name="phone" defaultValue placeholder="+1 (800) 123-4567" required />
                            </div>
                            {/* Form Group */}
                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                <label>Email Address</label>
                                <input type="email" name="email" defaultValue placeholder="abcd@gmail.com" required />
                            </div>
                            {/* Form Group */}
                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                <label>Password</label>
                                <span className="eye-icon fa fa-eye" />
                                <input type="password" name="password" defaultValue placeholder="Password" required />
                            </div>
                            {/* Form Group */}
                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                <label>Confirm Password</label>
                                <span className="eye-icon fa fa-eye" />
                                <input type="password" name="password" defaultValue placeholder="Password" required />
                            </div>
                            {/* Signup Info Tabs*/}
                            <div className="signup-info-tabs col-lg-12 col-md-12 col-sm-12">
                                {/* Signup Tabs*/}
                                <div className="signup-tabs tabs-box">
                                    {/* Tab Btns */}
                                    <ul className="tab-btns tab-buttons clearfix">
                                        <li data-tab="#prod-instructor" className="active-btn tab-btn">Instructor Sign Up</li>
                                        <li data-tab="#prod-student" className="tab-btn">Student Sign Up</li>
                                    </ul>
                                    {/* Tabs Container */}
                                    <div className="tabs-content">
                                        {/* Tab / Active Tab */}
                                        <div className="tab active-tab" id="prod-instructor">
                                            <div className="row clearfix">
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <select className="custom-select-box">
                                                        <option>Select Category</option>
                                                        <option>Category 01</option>
                                                        <option>Category 02</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea className="darma" name="message" placeholder="Write a little description about you (word should be at least 3350 characters)" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Tab  */}
                                        <div className="tab" id="prod-student">
                                            <div className="row clearfix">
                                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                    <select className="custom-select-box">
                                                        <option>Select Category</option>
                                                        <option>Category 01</option>
                                                        <option>Category 02</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea className="darma" name="message" placeholder="Write a little description about you (word should be at least 3350 characters)" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                                <button type="button" className="theme-btn btn-style-one"><span className="txt">Instructor Sign Up Now</span></button>
                            </div>
                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                <div className="users">Already have an account? <a href="login.html">Sign In Now</a></div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}