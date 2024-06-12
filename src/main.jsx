import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Balloon } from './components/Balloon/Balloon.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Balloon color={"red"} id={"1"} />
  </React.StrictMode>,
)

//<Balloon color={"#9980FA"} id={"1"} />
//<App color={"red"} id={"1"} />