import React from "react";
import "./MenuButton.css";


class MenuButton extends React.Component {
    render() {
        return(
            <div className="button" onClick={this.props.onClick}>
                <div className={this.props.menuVisible ? "menu" : null}>
                    <div className="bar1"/>
                    <div className="bar2"/>
                    <div className="bar3"/>
                </div>
            </div>
        )
    }
}

export default MenuButton;