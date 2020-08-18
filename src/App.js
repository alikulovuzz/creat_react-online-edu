import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/header'
import Left_sidebar from './components/left_sidebar/left_sidebar'
import Right_sidebar from './components/right_sidebar/right_sidebar'
import Footer from './components/footer/footer'
import Side_nav from './components/Side_nav/side_nav'
import Hiden_bar from './components/Hidden_bar/hidden_bar'
import ColorPallate from './components/ColorPalate/ColorPalate'
import SLogo from './components/SignUp/Logo/Logo'
import SForm from './components/SignUp/StyledForm/StyledForm'

function App() {
  return (
    <Router>
      <div class="page-wrapper">
        <div class="preloader"></div>
        <Header />
        <Switch>
          <Route path="/home">
            <div class="sidebar-page-container">
              <div class="auto-container">
                <div class="row clearfix">
                  <Left_sidebar />
                  <Right_sidebar />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/signup">
            <div className="signup-section" style={{ backgroundImage: 'url(../public/images/background/pattern-4.png)' }}>
              <div className="auto-container">
                <SLogo/>
                <SForm/>
                <div class="copyright">Please Don't Copyright</div>
              </div>
            </div>
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>

        <Footer />
      </div>
      <Side_nav />
      <Hiden_bar />
      <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-arrow-circle-up" /></div>
      <ColorPallate />
    </Router>
  );
}

export default App;
