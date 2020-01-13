import React from 'react';
import './App.css';
import SecretKey from '../containers/SecretKey';
import Filters from '../containers/Filters';
import RefreshListBtn from '../containers/RefreshListBtn';
import OnibiList from './Onibis';

function App() {
  return (
    <div>
      <SecretKey />
      <Filters />
      <RefreshListBtn />
      <OnibiList />
    </div>
  );
}

export default App;
