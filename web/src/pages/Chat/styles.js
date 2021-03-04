import styled from 'styled-components';

export const Header = styled.header`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  h1 {
    margin: 20px;
    padding: 10px;
    text-transform: uppercase;
  }
`;

export const SubHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  input,
  button {
    padding: 10px;
    margin: 5px;
    border: 0;
  }
`;

export const Main = styled.main`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    margin-top: 30px;

    li {
      display: flex;
      justify-content: center;
      padding: 10px;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;
