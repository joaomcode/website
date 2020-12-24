import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import Menu from '../Menu';
import SideMenu from '../SideMenu';

import { Container, Content, NavBar } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logoImg} alt="João M Oliveira logo" />
        </Link>
        <NavBar>
          <SideMenu />
          <Menu />
        </NavBar>
      </Content>
    </Container>
  );
};

export default Header;
