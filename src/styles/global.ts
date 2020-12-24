import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const PagesContainer = styled.main`
  max-width: 80%;
  justify-content: center;
  margin: 0 10%;
  margin-top: 90px;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin: 0 5%;
    margin-top: 90px;
  }
`;
