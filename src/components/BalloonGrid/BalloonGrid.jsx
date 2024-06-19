import React, { useEffect } from "react";
import Constants from "../../utils/constants";
import { Balloon } from "../Balloon/Balloon";
import { useState } from  "react";
import "./BallonGrid.css";

const BalloonGrid = ({ numberOfBalloons, onBalloonClick }) => {

    const [activeBalloons, setActiveBalloons] = useState([]);
    const intervalIdsRef = useRef([]);

    useEffect(() => {
        intervalIdsRef.current = [];

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
            intervalIdsRef.current.push(intervalId);
        }

        return () => {
            intervalIdsRef.current.forEach((intervalId) => clearInterval(intervalId));
        };

    }, []);

    const handleBalloonClick = (id) => {
        if (onBalloonClick) {
            onBalloonClick(id);
        }
    };

    const balloons = [];

    for (let i = 0; i < numberOfBalloons; i++) {
        balloons.push(
            <Balloon 
                key={i}
                id={i}
                color={Constants.balloonColor}
                isActive={activeBalloons.includes(i)}
                onClick={() => handleBalloonClick(i)}
                isGameStarted={isGameStarted}
            />);
    }

    return (
        <div className="balloon-grid-wrapper">
            <p className="balloon-grid-caption">Click a balloon to score</p>
            <div className="balloon-grid">{balloons}</div>
        </div>
    );

};

const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default BalloonGrid;