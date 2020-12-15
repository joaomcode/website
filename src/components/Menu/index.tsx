import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './style';

const Menu: React.FC = () => {
  const activeStyle = {
    color: '#28b1e7',
    listStyle: 'none',
    borderBottom: '1px solid #28b1e7',
  };

  const menuProps = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/about', label: 'Sobre' },
    { path: '/contact', label: 'Contato' },
  ];

  return (
    <Container>
      {menuProps.map(menu => (
        <NavLink to={menu.path} exact activeStyle={activeStyle}>
          <span>{menu.label}</span>
        </NavLink>
      ))}
    </Container>
  );
};

export default Menu;
