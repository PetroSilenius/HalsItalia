import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import MenuButton from '../components/MenuButton';
import '../App.css';
import {Col, Row, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

import backgroundImage from '../images/background.jpg';

class Timetable extends React.Component{
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
                <h1>Aikataulu</h1>
                <TimeTable>
                    <ListGroup>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>5.6. Halikko-Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                13.00 Lähtö Prismalta<br/>
                                17.05 Lento lähtee<br/>
                                19:35 Lento perillä
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>6.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                Kaupunkisuunnistus<br/>
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>7.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                Kaupunkisuunnistus<br/>
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>8.6. Rooma - Borgo Rapale</ListGroupItemHeading>
                            <ListGroupItemText>
                                Siirtymä Toscanan majapaikkaan<br/>
                                Matkalla kaupassakäynti
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>9.6. Firenze</ListGroupItemHeading>
                            <ListGroupItemText>
                                Aamupäivä majapaikassa<br/>
                                Päivä Firenzessä, illalla takaisin
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>10.6. Toscana</ListGroupItemHeading>
                            <ListGroupItemText>
                                Montepulciano - kylä<br/>
                                Bagni San Filippo - kuuma lähde<br/>
                                San Quirico d'Orcia - kylä
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>11.6. Borgo Rapale</ListGroupItemHeading>
                            <ListGroupItemText>
                                Maastopyöräilyä, vaellusreittejä ja muuta<br/>
                                Paikalliset partiolaiset kylässä<br/>
                                Master Chef-kokkikisa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>12.6. Cinque Terre</ListGroupItemHeading>
                            <ListGroupItemText>
                                Pisan torni<br/>
                                Cinque Terre - kyläkierros
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>13.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                Shoppailupäivä<br/>
                                Valdichiana Outlet Village
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>14.6. Sienna</ListGroupItemHeading>
                            <ListGroupItemText>
                                Viinitarhaan tutustuminen<br/>
                                Päivä Siennassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>15.6. Borgo Rapale - Molveno</ListGroupItemHeading>
                            <ListGroupItemText>
                                Seikkailupuisto<br/>
                                Garda-järvi<br/>
                                Siirtymä Molvenon majapaikka
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>16.6. Molveno</ListGroupItemHeading>
                            <ListGroupItemText>
                                Vaellus, kolme tasoryhmää
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>17.6. Molveno</ListGroupItemHeading>
                            <ListGroupItemText>
                                Vaellus, kolme tasoryhmää
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>18.6. Molveno - Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                Siirtymä Roomaan<br/>
                                Matkalla aktiviteettejä
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>19.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                Aamupäivä rannalla
                                20.15 Lento lähtee<br/>
                                00.50 Suomessa<br/>
                                4.00 Perillä Halikossa<br/>
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                    </ListGroup>
                </TimeTable>
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

const TimeTable = styled.div`
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 10px;
    margin-bottom: 15px;
    max-width:1200px;
    font-size: 18px;
    display: inline-block;
    background-color: #282C34;
    border-radius:20px;
    color:black;
`;

export default Timetable