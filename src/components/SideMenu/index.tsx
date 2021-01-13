import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiAlignJustify, FiX } from 'react-icons/fi';
import { useClickAway } from 'react-use';

import { Container, MenuBar } from './style';

const SideMenu: React.FC = () => {
  const [hide, setHide] = useState(true);

  const handleClick = () => {
    setHide(!hide);
  };

  const ref = useRef(null);
  useClickAway(ref, () => {
    handleClick();
  });

  const activeStyle = {
    color: '#28b1e7',
    listStyle: 'none',
  };

  const menuProps = [
    { key: 'h', path: '/', label: 'Home' },
    { key: 'p', path: '/portfolio', label: 'Portfólio' },
    { key: 'a', path: '/about', label: 'Sobre' },
    { key: 'c', path: '/contact', label: 'Contato' },
  ];

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        {hide ? <FiAlignJustify /> : <FiX />}
      </button>

      {!hide ? (
        <MenuBar ref={ref}>
          {menuProps.map(menu => (
            <NavLink
              key={menu.key}
              to={menu.path}
              exact
              activeStyle={activeStyle}
            >
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
