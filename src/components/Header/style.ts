import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  top: 0;

  background: #fff;

  position: fixed;
  box-shadow: 0 0 1em black;
`;

export const Content = styled.div`
  max-width: 80%;
  justify-content: center;
  margin: 0 10%;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin: 0 5%;
  }
`;

export const NavBar = styled.div`
  margin: 20px 0;
  float: right;
`;
