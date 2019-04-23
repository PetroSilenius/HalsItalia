import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import MenuButton from '../components/MenuButton';
import {Table, Col, Row} from 'reactstrap';

import backgroundImage from '../images/background.jpg';

class Equipment extends React.Component{
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

                <h1>Varustelista</h1>
                <EquipmentList>
                    <p>•Pakkaa itse tavarasi rinkkaan/matkalaukkuun max 20kg ja nimikoi ne<br/>
                    •Laita sadesuoja tai jätesäkki rinkan päälle<br/>
•Pakkaa päiväreppuun ne tavarat, joita tarvitset bussissa/kentällä/koneessa<br/>
•Pakkaa lääkkeet reseptien ja alkuperäispakkausten kanssa päiväreppuun<br/>
•Rahat kannattaa laittaa pieniin eriin ja sijoittaa rinkan eri paikkoihin<br/>
</p>
                    <br/>
                    <Row>
                    <Col>
                    <Table responsive>
                        <thead>
                            <th>Vaatteet</th>
                        </thead>
                        <tbody>
                            <tr>Partiopaita ja kv-huivi päällä lähdettäsessä</tr>
                            <tr>Alushousut x10</tr>
                            <tr>Sukat x10</tr>
                            <tr>Yöpuku</tr>
                            <tr>Pyyhe ja uikkarit</tr>
                            <tr>T-paita x6</tr>
                            <tr>Pitkähihainen x3</tr>
                            <tr>Shortsit x2</tr>
                            <tr>Lippalakki/huivi</tr>
                            <tr>Pitkät housut</tr>
                            <tr>Fleece/villapaita</tr>
                            <tr>Vedenpitävä ulkoiluasu</tr>
                            <tr>Vaihtovaatteita oman tarpeen mukaan</tr>
                        </tbody>
                    </Table>
                    </Col>

                    <Col>
                    <Table responsive>
                        <thead>
                            <th>Päiväreppuun(55x40x23cm, max 10kg</th>
                        </thead>
                        <tbody>
                            <tr>Passi</tr>
                            <tr>Kukkaro</tr>
                            <tr>Partion jäsenkortti tulostettuna</tr>
                            <tr>Eurooppalainen sairaanhoitokortti</tr>
                            <tr>Henkilökohtaiset lääkkeet</tr>
                            <tr>Matkalukemista</tr>
                            <tr>Sallitut eväät</tr>
                        </tbody>
                    </Table>
                    <Table responsive>
                        <thead>
                            <th>Kengät</th>
                        </thead>
                        <tbody>
                            <tr>Mukavat kävelykengät x2</tr>
                            <tr>Vaelluskengät</tr>
                            <tr>Sandaalit/crocsit</tr>
                        </tbody>
                    </Table>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <Table responsive>
                        <thead>
                            <th>Hygienia ja lääkkeet</th>
                        </thead>
                        <tbody>
                            <tr>Hammasharja ja -tahna</tr>
                            <tr>Kasvopyyhe</tr>
                            <tr>Deodorantti</tr>
                            <tr>Shampoo, hoitoaine ja suihkugeeli</tr>
                            <tr>Aurinkorasva</tr>
                            <tr>Henkilökohtaiset lääkkeet</tr>
                            <tr>Allergia- ja särkylääke</tr>
                            <tr>Nenäliinoja</tr>
                            <tr>Huulirasva</tr>
                            <tr>Kosteusvoide</tr>
                            <tr>Hiusharja, ponnareita</tr>
                            <tr>Kuukautissuojat</tr>
                        </tbody>
                    </Table>
                    <Table responsive>
                        <thead>
                            <th>Majoittuminen</th>
                        </thead>
                        <tbody>
                            <tr>Aluslakana</tr>
                            <tr>Pussilakana tai ohut kesämakuupussi</tr>
                            <tr>Tyynyliina ja kevyt tyyny</tr>
                        </tbody>
                    </Table>
                    </Col>
                    <Col>
                    <Table responsive>
                        <thead>
                            <th>Muuta tarpeellista</th>
                        </thead>
                        <tbody>
                            <tr>Ruokailuvälineet ja astiapyyhe kangaspussissa</tr>
                            <tr>Juomapullo x2</tr>
                            <tr>Lompakko</tr>
                            <tr>Käteistä ja maksukortti</tr>
                            <tr>Aurinkolasit</tr>
                            <tr>Pienikokoinen sateenvarjo</tr>
                            <tr>Kännykkä ja laturi</tr>
                            <tr>Kamera ja laturi</tr>
                            <tr>Vihko ja kyniä</tr>
                            <tr>Muosipusseja/kuivasäkkejä pakkaamiseen ja likapyykille</tr>
                        </tbody>
                    </Table>
                    </Col>
                    </Row>
                </EquipmentList>
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
`;

const EquipmentList = styled.div`
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 15px;
    max-width:1200px;
    font-size: 18px;
    display: inline-block;
    background-color: #282C34;
    border-radius:20px;
`;

export default Equipment