import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from "./components/Game/Game";
import Constants from './utils/constants';

const App = () => {
  return (
    <Game 
      numberOfBalloons={Constants.numberOfBalloons}
      gameDuration={Constants.gameDuration}
    />
  );
};

export default App;