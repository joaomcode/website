import styled from 'styled-components';

export const Container = styled.nav`
  a {
    font-size: 1.3em;
    text-decoration: none;

    color: #1e427f;

    margin-left: 20px;
    padding-bottom: 5px;
  }

  a:hover {
    color: #28b1e7;
    border-bottom: 1px solid #28b1e7;
  }

  @media screen and (max-width: 667px) {
    display: none;
  }
`;
