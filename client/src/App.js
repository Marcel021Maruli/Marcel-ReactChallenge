import React from 'react';
import './App.css';
import Home from './pages/main';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App" data-testid="header-title">
          <Home data-testid="homeComponent"></Home>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
