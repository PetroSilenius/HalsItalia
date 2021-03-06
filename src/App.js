import React from 'react';
import {Row} from 'reactstrap';
import styled from 'styled-components';

import './App.css';
import InfoCard from "./components/Infocard";
import Schedule from './components/Schedule';
import Countdown from './components/Countdown';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';

import logo from './images/logo.svg';
import backgroundImage from './images/background.jpg';
import instagram from './images/instagram.png';
import github from './images/github.png';
import rome from './images/rome.jpeg';
import rome2 from './images/rome2.jpeg';
import toscany from './images/toscany.jpg';
import molveno from './images/molveno.jpeg';


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {menuVisible: false}
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({menuVisible: !this.state.menuVisible})
    }

  render() {
    return (
      <div className="App">
        <MenuButton onClick={this.toggleMenu}
                    menuVisible={this.state.menuVisible}/>
        <Menu onClick={this.toggleMenu}
              menuVisible={this.state.menuVisible}/>
        <About>
            <h1> HalsItalia </h1>
            <p>Lippukunta Halikon Sinisten Italian leiri 5.-19.6.2019</p>
            <Countdown/>
            <div className="info">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://halsi.fi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Halikon Siniset
                </a>
            </div>
        </About>
          <Program>
              <Row className="InfoRow">
                <InfoCard
                        title="Rooma"
                        subtitle="5.-8.6."
                        img={rome}
                        />
                <InfoCard
                        title="Toscana"
                        subtitle="8.-15.6."
                        img={toscany}/>
                <InfoCard
                        title="Molveno"
                        subtitle="15.-18.6."
                        img={molveno}/>
                <InfoCard
                        title="Rooma"
                        subtitle="18.-19.6."
                        img={rome2}/>
              </Row>
          </Program>
        <Follow>
            <h4>Voit seurata leirin edistymistä Instagramista</h4>
            <a
                className="App-link"
                href="https://www.instagram.com/halikonsiniset"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={instagram} className="ig-logo" alt="Instagram"/>
            </a>
            <h4>Virallinen leiripuhelin, joka toimii yhteytenä leiriin</h4>
            <h3>+358 40 1693169</h3>
        </Follow>
          <div id="EventsBG">
              <Events>
                <Schedule/>
              </Events>
          </div>
          <Footer>
              <p><b>Petro Silenius © 2019
                  <a
                    className="App-link"
                    href="https://github.com/PetroSilenius"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} className="gh-logo" alt="Github"/>
                  </a>
              </b></p>
          </Footer>
      </div>
    );
  }
}


const About = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0,0,0,0.5);
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Program = styled.div`
  padding-top: 30px;
  padding-bottom:20px;
  display: inline-block;
`;

const Follow = styled.div`
  padding-bottom:20px;
  justify-content: center;
  display: inline-block;
  width: 70vw;
`;

const Events = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: center;
  display: inline-block;
  width: 70vw;
  max-width: 600px;
`;

const Footer = styled.div`
    color: white;
    background-color: #212529;
    padding-top: 10px;
    padding-bottom: 5px;
`;

export default App;
