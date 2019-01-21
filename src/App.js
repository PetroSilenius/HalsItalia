import React, { Component } from 'react';
import logo from './logo.svg';
import backgroundImage from './background.jpg';
import './App.css';
import Schedule from "./components/Schedule";
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About>
            <h1> HalsItaly </h1>
            <p>Lippukunta Halikon Sinisten Italian leiri 5.-19.6.2019</p>
            <div id="info">
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
        <div className="Instagram">
            <h4>Voit seurata leirin edistymistä Instagramista</h4>
            <a
                className="App-link"
                href="https://www.instagram.com/halikonsiniset"
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram
            </a>
        </div>
          <Events>
              <Schedule/>
          </Events>
      </div>
    );
  }
}

const About = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(0,0,0,0.5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Events = styled.div`
  justify-content: center;
  display: inline-block;
  width: 70vw;
`;

export default App;
