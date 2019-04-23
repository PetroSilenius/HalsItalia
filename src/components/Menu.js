import React from 'react';
import "./Menu.css";


class Menu extends React.Component {
    render() {
        let visibility = "hide";

        if (this.props.menuVisible) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                 onClick={this.props.onClick}
                 className={visibility}>
                <h2><a href="/">Etusivu</a></h2>
                <h2><a href="/info">Yleistä</a></h2>
                <h2><a href="/timetable">Aikataulu</a></h2>
                <h2><a href="/equipment">Varustelista</a></h2>
                <h2><a href="/contact">Yhteystiedot</a></h2>
            </div>
        );
    }
}

export default Menu;