import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>
                <div className="color-palate">
                    <div className="color-trigger">
                        <i className="fa fa-gear" />
                    </div>
                    <div className="color-palate-head">
                        <h6>Choose Your Color</h6>
                    </div>
                    <div className="various-color clearfix">
                        <div className="colors-list">
                            <span className="palate color-one active" data-theme-file="css/color-themes/theme-one.css" />
                            <span className="palate color-two" data-theme-file="css/color-themes/theme-two.css" />
                            <span className="palate color-three" data-theme-file="css/color-themes/theme-three.css" />
                            <span className="palate color-four" data-theme-file="css/color-themes/theme-four.css" />
                            <span className="palate color-five" data-theme-file="css/color-themes/theme-five.css" />
                            <span className="palate color-six" data-theme-file="css/color-themes/theme-six.css" />
                            <span className="palate color-seven" data-theme-file="css/color-themes/theme-seven.css" />
                            <span className="palate color-eight" data-theme-file="css/color-themes/theme-eight.css" />
                            <span className="palate color-nine" data-theme-file="css/color-themes/theme-nine.css" />
                            <span className="palate color-ten" data-theme-file="css/color-themes/theme-ten.css" />
                            <span className="palate color-eleven" data-theme-file="css/color-themes/theme-eleven.css" />
                            <span className="palate color-twelve" data-theme-file="css/color-themes/theme-twelve.css" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}