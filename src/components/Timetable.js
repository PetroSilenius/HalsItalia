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
                                13.00 Lähtö Prisman parkkipaikalta<br/>
                                15.00 Lentokentällä<br/>
                                17.05 Lento lähtee<br/>
                                19:35 Lento perillä<br/>
                                20:30 Partiokodissa<br/>
                                21:00 Ravintola
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>6.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                10.00 Aamupala bussimatkalla<br/>
                                11.00 Kaupunkisuunnistus<br/>
                                21.00 Iltapala majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>7.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                8.00 Aamupala majapaikassa<br/>
                                9.00 Kaupunkisuunnistus<br/>
                                20.00 Iltapala majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>8.6. Rooma - Borgo Rapale</ListGroupItemHeading>
                            <ListGroupItemText>
                                10.00 Aamupala majapaikassa<br/>
                                11.00 Bussimatka<br/>
                                13.00 Lounas matkalla ja kauppa<br/>
                                16.30 Borgo Rapalessa<br/>
                                18.00 Illallinen majapaikassa<br/>
                                19.00 Iltaohjelma<br/>
                                21.00 Iltapala majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>9.6. Firenze</ListGroupItemHeading>
                            <ListGroupItemText>
                                10.00 Aamupala majapaikassa<br/>
                                11.30 Lähtö bussilla<br/>
                                13.30 Firenzessä <br/>
                                21.30 Lähtö Firenzestä<br/>
                                22.30 Iltapala majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>10.6. Toscana</ListGroupItemHeading>
                            <ListGroupItemText>
                                10.00 Aamupala majapaikassa<br/>
                                11.00 Lähtö bussilla<br/>
                                13.00 Montepulciano<br/>
                                14.30 Bagni San Filippo<br/>
                                16.30 San Quirico d'Orcia<br/>
                                19.00 Illallinen majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>11.6. Borgo Rapale</ListGroupItemHeading>
                            <ListGroupItemText>
                                10.00 Aamupala majapaikassa<br/>
                                11.00 Maastopyöräilyä, vaellusreittejä ja muuta<br/>
                                15.00 Paikalliset partiolaiset kylässä<br/>
                                18.00 Master Chef-kokkikisa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>12.6. Cinque Terre</ListGroupItemHeading>
                            <ListGroupItemText>
                                7.00 Lähtö bussilla, aamupala matkalla<br/>
                                9.00 Pisan torni<br/>
                                10.30 Cinque Terre, kyläkierros<br/>
                                18.00 Illallinen ravintolassa<br/>
                                19.00 Lähtö majapaikkaan<br/>
                                22.00 Iltapala majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>13.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                10.00 Aamupala majapaikassa<br/>
                                11.30 Lähtö bussilla<br/>
                                13.00 Valdichiana Outlet Village<br/>
                                16.30 Lähtö majapaikkaan<br/>
                                19.00 Illallinen majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>14.6. Sienna</ListGroupItemHeading>
                            <ListGroupItemText>
                                8.00 Aamupala majapaikassa<br/>
                                9.00 Lähtö bussilla<br/>
                                10.30 Viinitarhaan tutustuminen<br/>
                                13.00 Lounas Siennassa<br/>
                                14.00 Siennaan tutustumista<br/>
                                19.00 Illallinen majapaikassa
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>15.6. Borgo Rapale - Molveno</ListGroupItemHeading>
                            <ListGroupItemText>
                                7.30 Lähtö bussilla, aamupala matkalla<br/>
                                10.00 Canyon Park, köysirataseikkailu<br/>
                                12.00 Lounas<br/>
                                17.30 Garda-järvi<br/>
                                20.00 Molvenon majapaikka<br/>
                                21.00 Illallinen ja iltarentouminen<br/>
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>16.6. Molveno</ListGroupItemHeading>
                            <ListGroupItemText>
                                8.00 Aamupala majapaikassa<br/>
                                9.00 Vaellus<br/>
                                19.00 Illallinen majapaikassa<br/>
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>17.6. Molveno</ListGroupItemHeading>
                            <ListGroupItemText>
                                8.00 Aamupala majapaikassa<br/>
                                9.00 Vaellus<br/>
                                19.00 Illallinen majapaikassa<br/>
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>18.6. Molveno - Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                8.00 Lähtö bussilla, aamupala matkalla<br/>
                                11.00 Ferrarimuseo<br/>
                                13.00 Lounas<br/>
                                20.00 Illallinen majapaikassa<br/>
                            </ListGroupItemText>
                        </ListGroupItem>
                        </Col>
                        <Col>
                        <ListGroupItem>
                            <ListGroupItemHeading>19.6. Rooma</ListGroupItemHeading>
                            <ListGroupItemText>
                                10.00 Aamupala majapaikassa<br/>
                                11.00 Vaellus<br/>
                                18.00 Kentällä<br/>
                                20.15 Lento lähtee<br/>
                                00.50 Suomessa<br/>
                                3.30 Perillä Halikossa<br/>
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