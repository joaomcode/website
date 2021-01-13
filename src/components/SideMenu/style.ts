import styled from 'styled-components';

export const Container = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: relative;
    display: flex;

    button {
      font-size: 1.5em;
      margin-top: 3px;
      border: none;
      color: #1e427f;
      background-color: #fff;
      cursor: pointer;
    }

    button:hover {
      color: #28b1e7;
    }
  }
`;

export const MenuBar = styled.nav`
  right: 30px;

  border: 1px solid black;
  border-radius: 8px;

  position: absolute;
  background-color: #efefef;

  a {
    font-size: 1.3em;
    text-decoration: none;

    margin: 10px;

    display: flex;
    flex-direction: column;

    color: #1e427f;
  }

  a:hover {
    color: #28b1e7;
  }
`;
