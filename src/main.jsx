import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Balloon } from './components/Balloon/Balloon.jsx'
import Constants from "./utils/constants";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

//<Balloon color={"#9980FA"} id={"1"} />
//<App color={"red"} id={"1"} />