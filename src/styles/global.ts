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

export const PagesContainer = styled.div`
  max-width: 80%;
  justify-content: center;
  margin: 0 10%;

  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin: 0 5%;
  }
`;
