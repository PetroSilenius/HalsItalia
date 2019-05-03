import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import MenuButton from '../components/MenuButton';

import backgroundImage from '../images/background.jpg';

class Contact extends React.Component{
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

                <h1>Yhteystiedot</h1>

                <ContactInfo>
                <h3>Leiripuhelin +358 40 1693169</h3><br/>
                <h6>Leirin virallinen yhteyspuhelin, josta tavoitat meidät 24/7.<br/>
                Tämä toimii ensisijaisena yhteytenä leiriin.</h6>
                <br/>
                <h6>Leirinjohtajan puhelin, josta tavoitettavissa lähes 24/7</h6>
                <h5>Petro Silenius +358 40 4196798</h5>
                <br/>
                <h6>Leirin aikana kotimaassa toimiva yhteyshenkilö:</h6>
                <h6>Emilia Koski +358 40 0511749</h6>
                <br/><br/>
                <h6>Leirin viralliset sosiaalisen median kanavat:</h6>
                <a href="instagram.com/halikonsiniset"><h6><i class="fab fa-instagram"></i> halikonsiniset</h6></a>
                <a href="facebook.com/halikonsiniset"><h6><i class="fab fa-facebook-f"></i> halikonsiniset</h6></a>
                <a href="instagram.com/tags/halsitalia"><h6><i class="fas fa-hashtag"></i>halsitalia</h6></a>
                <br/>
                <h6>halsi.italia@gmail.com</h6>
                </ContactInfo>
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

const ContactInfo = styled.div`
    padding-top: 10px;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    max-width: 900px;
    font-size: 18px;
    display: inline-block;
    background-color: #282C34;
    border-radius:20px;
`;

export default Contact;