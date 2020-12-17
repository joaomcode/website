import styled from 'styled-components';

export const Container = styled.nav`
  display: none;

  @media screen and (max-width: 667px) {
    display: flex;

    button {
      font-size: 1.5em;
      margin-top: 3px;
      border: none;
      color: #1e427f;
    }

    button:hover {
      color: #28b1e7;
    }
  }
`;

export const MenuBar = styled.nav`
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;

    color: #1e427f;
  }

  a:hover {
    color: #28b1e7;
  }
`;
