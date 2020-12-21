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
    { key: 'h', path: '/', label: 'Home' },
    { key: 'p', path: '/portfolio', label: 'Portfólio' },
    { key: 'a', path: '/about', label: 'Sobre' },
    { key: 'c', path: '/contact', label: 'Contato' },
  ];

  return (
    <Container>
      {menuProps.map(menu => (
        <NavLink key={menu.key} to={menu.path} exact activeStyle={activeStyle}>
          <span>{menu.label}</span>
        </NavLink>
      ))}
    </Container>
  );
};

export default Menu;
