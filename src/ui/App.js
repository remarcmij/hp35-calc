import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import cpu from '../cpu';
import store from '../store';
import Display from './components/Display';
import Keypad from './components/Keypad';

const Container = styled(Div100vh)`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 4px;
  border: solid 1px gray;
  padding: 2px;
  background-color: #eceff1;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  @media (min-width: 481px) {
    margin-top: 4px;
    width: 375px;
    height: 620px;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Display />
        <Keypad cpu={cpu} />
      </Container>
    </Provider>
  );
};

export default App;
