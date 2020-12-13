import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './style';

const Menu: React.FC = () => {
  const activeStyle = {
    color: '#28b1e7',
    listStyle: 'none',
    borderBottom: '1px solid #28b1e7',
  };

  return (
    <Container>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/portfolio" activeStyle={activeStyle}>
        Portfolio
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        Sobre
      </NavLink>
      <NavLink to="/contact" activeStyle={activeStyle}>
        Contato
      </NavLink>
    </Container>
  );
};

export default Menu;
