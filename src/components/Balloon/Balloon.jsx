import React, {useEffect, useState} from "react";
//import Constants from "../utils/constants.js";
import Constants from "../../utils/constants";
import classnames from "//cdn.skypack.dev/classnames";
import "./Balloon.css";

//const Balloon = ({ id, color }) => {
export const Balloon = ({ id, color, isActive, onClick }) => { //this is a named export, not a default export. Hence, it should be imported using the curly braces {}

  const [isPopped, setIsPopped] = useState(false);
  //const [isActive, setIsActive] = useState(false);
  //const isMoving = true;

  const balloonWidth = Constants.balloonWidth;
  const balloonHeight = balloonWidth * 1.17;
  const threadHeight = Constants.threadHeight;

  /*
    useEffect( () => {
    const activeInterval = setInterval( () => {
      setIsActive((prevIsTrue) => !prevIsTrue);
    }, 1000);

    return () => {
      clearInterval(activeInterval);
    };
  }, []);
  */

  const classNames = classnames("balloon", {
    "balloon--popping": isPopped,
    "balloon--active": isActive,
    //"balloon--moving": isMoving
  });

  const clickHandler = (e) => {
    if (!isPopped) {
      setIsPopped(true);

      setTimeout( () => {
        setIsPopped(false);
      }, Constants.randomnessLimits.lower);
    }
  };

  return (
    <div className="balloon-cell">
        <div
          className={classNames}
          style={{ color: color }}
          onClick={clickHandler}
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
      </div>
  );
};

//export default Balloon;

//ReactDOM.render(<Balloon color={"#9980FA"} id={"1"} />, document.querySelector("#root"));

/*
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Balloon color={"#9980FA"} id={"1"} />
    </React.StrictMode>,
)
*/