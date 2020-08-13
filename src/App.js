import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header'
import Left_sidebar from './components/left_sidebar/left_sidebar'
import Right_sidebar from './components/right_sidebar/right_sidebar'
import Footer from './components/footer/footer'
import Side_nav from './components/Side_nav/side_nav'
import Hiden_bar from './components/Hidden_bar/hidden_bar'
import ColorPallate from './components/ColorPalate/ColorPalate'

function App() {
  return (
    <Fragment>
      <div class="page-wrapper">
        <div class="preloader"></div>
        <Header />
        <div class="sidebar-page-container">
          <div class="auto-container">
            <div class="row clearfix">
              <Left_sidebar />
              <Right_sidebar/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <Side_nav/>
      <Hiden_bar/>
      <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-arrow-circle-up" /></div>
      <ColorPallate/>
      
    </Fragment>
  );
}

export default App;
