import React, { useEffect, useState, useRef } from "react";
import Constants from "../../utils/constants";
import { Balloon } from "../Balloon/Balloon";
import "./BalloonGrid.css";

const BalloonGrid = ({ numberOfBalloons, onBalloonClick }) => {
    const [activeBalloons, setActiveBalloons] = useState([]);
  
    const handleBalloonClick = (id) => {
      if (onBalloonClick) {
        onBalloonClick(id);
      }
    };
  
    useEffect(() => {
      const intervalIds = [];
  
      const generateRandomBalloon = () => {
        const randomBalloonId = Math.floor(Math.random() * numberOfBalloons);
  
        setActiveBalloons((prevActiveBalloons) => {
          if (prevActiveBalloons.includes(randomBalloonId)) {
            return prevActiveBalloons.filter(
              (activeId) => activeId !== randomBalloonId
            );
          } else {
            return [...prevActiveBalloons, randomBalloonId];
          }
        });
      };
  
      for (let i = 0; i < numberOfBalloons; i++) {
        const intervalId = setInterval(
          generateRandomBalloon,
          getRandomNumber(
            Constants.randomnessLimits.lower,
            Constants.randomnessLimits.upper
          )
        );
        intervalIds.push(intervalId);
      }
  
      return () => {
        intervalIds.forEach((intervalId) => clearInterval(intervalId));
      };
    }, []);
  
    const balloons = [];
  
    for (let i = 0; i < numberOfBalloons; i++) {
      balloons.push(
        <Balloon
          key={i}
          id={i}
          color={Constants.balloonColor}
          isActive={activeBalloons.includes(i)}
          onClick={() => handleBalloonClick(i)}
        />
      );
    }
  
    return (
      <div className="balloon-grid-wrapper">
        <p className="balloon-grid-caption">Click a balloon to score</p>
        <div className="balloon-grid">{balloons}</div>
      </div>
    );
  };

/*
const BalloonGrid = ({ numberOfBalloons, onBalloonClick }) => {

    const [activeBalloons, setActiveBalloons] = useState([]);
    //const intervalIdsRef = useRef([]);

    //console.log("inside balloon grid");

    useEffect(() => {
        //intervalIdsRef.current = [];
        const intervalIds = [];

        const generateRandomBalloon = () => {
            const randomBalloonId = Math.floor(Math.random() * numberOfBalloons);
    
            setActiveBalloons((prevActiveBalloons) => {
                if (prevActiveBalloons.includes(randomBalloonId)) {
                    return prevActiveBalloons.filter((activeId) => {
                        activeId !== randomBalloonId;
                    });
                } else {
                    return [...prevActiveBalloons, randomBalloonId];
                }
            });
        }

        for (let i = 0; i < numberOfBalloons; i++) {
            const randomInterval = getRandomNumber(Constants.randomnessLimits.lower, Constants.randomnessLimits.upper);
    
            const intervalId = setInterval(generateRandomBalloon, randomInterval);
            //intervalIdsRef.current.push(intervalId);
            intervalIds.push(intervalId);
        }

        return () => {
            //intervalIdsRef.current.forEach((intervalId) => clearInterval(intervalId));
            intervalIds.forEach((intervalId) => clearInterval(intervalId));
        };

    }, []);

    const handleBalloonClick = (id) => {
        if (onBalloonClick) {
            onBalloonClick(id);
        }
    };

    const balloons = [];

    //console.log("At balloons array");

    for (let i = 0; i < numberOfBalloons; i++) {
        console.log("before balloons push call");

        balloons.push(
          <Balloon
            key={i}
            id={i}
            color={Constants.balloonColor}
            isActive={activeBalloons.includes(i)}
            onClick={() => handleBalloonClick(i)}
          />
        );

        console.log("Pushed balloon to balloons[] array");
    }

    //console.log(balloons);

    return (
        <div className="balloon-grid-wrapper">
            <p className="balloon-grid-caption">Click a balloon to score</p>
            <div className="balloon-grid">
                <Balloon
                    key={0}
                    id={0}
                    color={Constants.balloonColor}
                    isActive={activeBalloons.includes(0)}
                    onClick={() => handleBalloonClick(0)}
                />
            </div>
        </div>
    );
    //{balloons}
};

const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    */

export default BalloonGrid;

/*
useEffect(() => {
    const intervalIds = [];

    const generateRandomBalloon = () => {
      const randomBalloonId = Math.floor(Math.random() * numberOfBalloons);

      setActiveBalloons((prevActiveBalloons) => {
        if (prevActiveBalloons.includes(randomBalloonId)) {
          return prevActiveBalloons.filter(
            (activeId) => activeId !== randomBalloonId
          );
        } else {
          return [...prevActiveBalloons, randomBalloonId];
        }
      });
    };

    for (let i = 0; i < numberOfBalloons; i++) {
      const intervalId = setInterval(
        generateRandomBalloon,
        getRandomNumber(
          Constants.randomnessLimits.lower,
          Constants.randomnessLimits.upper
        )
      );
      intervalIds.push(intervalId);
    }

    return () => {
      intervalIds.forEach((intervalId) => clearInterval(intervalId));
    };
  }, []);

  */