import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;

  background-color: #ededed;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  max-width: 80%;
  justify-content: center;
  margin: 0 10%;

  @media screen and (max-width: 568px) {
    max-width: 100%;
    margin: 0;
  }

  @media screen and (max-width: 667px) {
    max-width: 90%;
    margin: 0 5%;
  }
`;

export const NavBar = styled.div`
  margin: 20px 0;
  float: right;
`;
