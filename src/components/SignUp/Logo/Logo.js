import React, { Component } from 'react'
import logo from './logo-3.png'

export default class Main extends Component {
    render() {
        return (
            <>
                <div className="logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
            </>
        )
    }
}