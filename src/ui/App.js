import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import store from '../store';
import Display from './components/Display';
import Keypad from './components/Keypad';
import CPUContext from './CPUContext';
import cpu from '../cpu';

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
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
      <CPUContext.Provider value={cpu}>
        <Container>
          <Display />
          <Keypad />
        </Container>
      </CPUContext.Provider>
    </Provider>
  );
};

export default App;
