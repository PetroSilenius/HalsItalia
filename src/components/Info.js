import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import MenuButton from '../components/MenuButton';

import backgroundImage from '../images/background.jpg';

class Info extends React.Component{
    constructor(props) {
        super(props)

        this.state = {menuVisible: false}
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({menuVisible: !this.state.menuVisible})
    }
    render() {
        return(
            <Content>
                <MenuButton onClick={this.toggleMenu}
                    menuVisible={this.state.menuVisible}/>
                <Menu onClick={this.toggleMenu}
                    menuVisible={this.state.menuVisible}/>
                <h1>Yleistä</h1>
                <InfoText>
                <p>Lippukuntamme on perinteisesti pyrkinyt järjestämään jokaiselle 12-vuotta täyttäneelle jäsenelleen mahdollisuuden 
                    kerran ikäkausipartiolaisena osallistua ulkomaanleirille. Vuoden 2015 Lontoon jälkeen kohteeksemme valikoitui 
                    suunnittelun jälkeen Italia. Pohtiessamme tarkempaa sijaintia totesimme, että mikäli Italian haluaa kokea Italiana, 
                    se vaatii tutustumista aina pohjoisen vuoristoilta Rooman historiallisiin nähtävyyksiin. <br/>
                    <br/>

                    Matkamme alkaa Roomasta, joka tarjoaa ison osan eurooppalaista historiaa. Roomassa majoitumme paikallisessa
                    partiokodissa ja suoritamme kaksipäiväistä kaupunkisuunnistusta Amazing Race-tyylillä. Sieltä suuntaamme 
                    Arezzon -maakuntaan Borgo Rapale nimiseen majapaikkaan, josta käsin teemme päiväretkiä muun muassa Firenzeen, 
                    Sienaan ja Cinque Terreen. Päiväretket mahdollistavat koko Italian kokemisen sekä sen kulttuurin ja maailman, 
                    johon olemme lähdössä tutustumaan. Arezzosta matkamme suuntautuu pohjoiseen Molvenoon. Näin ollen voimme tarjota 
                    myös hienon vaelluskokemuksen paikassa, johon kaikilla ei muuten olisi mahdollisuutta päästä. <br/>
                    <br/>
                </p>
                <h4>
                    "HalsItalia ei ole pelkästään pyrähdys ulkomaille. Se on matka, jota on käyty jo usean vuoden ajan kohti 
                    yhteistä unelmaa ja kokemusta."
                </h4>
            </InfoText>
            </Content>
        )
    }
}

const Content = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: repeat-y;
  background-position: center;
  background-blend-mode: overlay;
  background-color: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: calc(10px + 2vmin);
  color: white;
  min-height: 100vh;
`;

const InfoText = styled.div`
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 15px;
    margin-bottom: 15px;
    max-width: 900px;
    font-size: 18px;
    display: inline-block;
    background-color: #282C34;
    border-radius:20px;
`;

export default Info