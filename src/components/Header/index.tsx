import React from 'react';

import logoImg from '../../assets/logo.png';

import Menu from '../Menu';

import { Container, Content, NavBar } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="João M Oliveira logo" />
        <NavBar>
          <Menu />
        </NavBar>
      </Content>
    </Container>
  );
};

export default Header;
