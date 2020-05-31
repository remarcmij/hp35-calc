import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Display from './components/Display';
import Keypad from './components/Keypad';
import CPUContext from './CPUContext';
import cpu from '../cpu';

const App = () => {
  return (
    <Provider store={store}>
      <CPUContext.Provider value={cpu}>
        <div className="App">
          <Display />
          <Keypad />
        </div>
      </CPUContext.Provider>
    </Provider>
  );
};

export default App;
