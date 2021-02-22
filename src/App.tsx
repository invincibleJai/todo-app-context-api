import React from 'react';
import TodoContextApi from './components/contextApiComponents/TodoContextApi';
import TodoProvider from './components/contextApiComponents/TodoProvider';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoProvider>
              <TodoContextApi />
      </TodoProvider>
    </div>
  );
}

export default App;
