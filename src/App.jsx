import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

function App({id, color}) {
  const balloonWidth = 200;
  const balloonHeight = balloonWidth * 1.17;
  const threadHeight = 50;

  return (
    <div
    className="balloon"
    style={{ color: color }}
  >
    <svg
      className="balloon-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${balloonWidth} ${balloonHeight + threadHeight}`}
    >
      <defs>
        <radialGradient
          id={`balloon-gradient-${id}`}
          cx="40%"
          cy="40%"
          r="50%"
          fx="30%"
          fy="30%"
        >
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor={`${color}`} />
        </radialGradient>
        <filter
          id={`balloon-shadow-${id}`}
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect
        x={balloonWidth / 2}
        y={balloonHeight}
        width="1"
        height={threadHeight}
        fill={`${color}`}
      />
      <polygon
        points={`${balloonWidth / 2},${balloonHeight - 3} ${
          balloonWidth / 2 + 8
        },${balloonHeight + 5} ${balloonWidth / 2 - 8},${
          balloonHeight + 5
        }`}
        fill={`${color}`}
      />
      <ellipse
        cx={balloonWidth / 2}
        cy={balloonHeight / 2}
        rx={balloonWidth / 2}
        ry={balloonHeight / 2}
        fill={`url(#balloon-gradient-${id})`}
        filter={`url(#balloon-shadow-${id})`}
      />
    </svg>
  </div>
  );
};

export default App;