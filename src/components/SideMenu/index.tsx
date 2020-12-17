import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiAlignJustify, FiX } from 'react-icons/fi';

import { Container, MenuBar } from './style';

const SideMenu: React.FC = () => {
  const [hide, setHide] = useState(true);

  const handleClick = () => {
    setHide(!hide);
  };

  const activeStyle = {
    color: '#28b1e7',
    listStyle: 'none',
  };

  const menuProps = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfólio' },
    { path: '/about', label: 'Sobre' },
    { path: '/contact', label: 'Contato' },
  ];

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        {hide ? <FiAlignJustify /> : <FiX />}
      </button>

      {!hide ? (
        <MenuBar>
          {menuProps.map(menu => (
            <NavLink to={menu.path} exact activeStyle={activeStyle}>
              <span>{menu.label}</span>
            </NavLink>
          ))}
        </MenuBar>
      ) : (
        <span style={{ display: 'none' }}>a</span>
      )}
    </Container>
  );
};

export default SideMenu;
