import React, { Component } from 'react';
import {Row} from 'reactstrap';
import styled from 'styled-components';

import './App.css';
import InfoCard from "./components/Infocard";
import Schedule from './components/Schedule';
import Countdown from './components/Countdown';

import logo from './logo.svg';
import backgroundImage from './background.jpg';
import instagram from './instagram.png';
import github from './github.png';
import rome from './rome.jpeg';
import rome2 from './rome2.jpeg';
import toscany from './toscany.jpg';
import molveno from './molveno.jpeg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <About>
            <h1> HalsItaly </h1>
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
  max-width: 700px;
`;

const Footer = styled.div`
    color: white;
    background-color: #212529;
    padding-top: 10px;
    padding-bottom: 5px;
`;

export default App;
