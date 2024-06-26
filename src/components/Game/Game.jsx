import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./Game.css";

import ScoreCard from "../ScoreCard/ScoreCard";
import Button from "../Button/Button";
import Toast from "../Toast/Toast";
import Constants from "../../utils/constants";
import CoverScreen from "../CoverScreen/CoverScreen";
import BalloonGrid from "../BalloonGrid/BalloonGrid";

const Game = ({ numberOfBalloons, gameDuration }) => {
    const [gameStarted, setGameStarted] = useState(false);
    const [activeBalloons, setActiveBalloons] = useState([]);
    const [score, setScore] = useState(-1);
    const [timeRemaining, setTimeRemaining] = useState(gameDuration);
    const [stop, setStop] = useState(false);
    const [hit, setHit] = useState(false);

    const timerRef = useRef(null);

    const handleBalloonClick = (id) => {
        setScore((prevScore) => prevScore + 1);
        setHit(true);

        setActiveBalloons((prevActiveBalloons) => 
            prevActiveBalloons.filter((activeId) => activeId !== id)
        );

        setTimeout(() => {
            setHit(false);
        }, Constants.randomnessLimits.lower);
    };

    const startGame = () => {
        setGameStarted(true);
        setScore(0);
        setActiveBalloons([]);
        setTimeRemaining(gameDuration);
        setStop(false);
    };

    const stopGame = () => {
        setGameStarted(false);
        setStop(true);
    };

    useEffect(() => {

        if (gameStarted && !stop) {
            timerRef.current = setInterval(() => {
                setTimeRemaining((prevTimeRemaining) => {
                    if (prevTimeRemaining > 0) {
                        return prevTimeRemaining - 1;
                    } else {
                        clearInterval(timerRef.current);
                        setGameStarted(false);
                        return 0;
                    }
                });
            }, 1000);
        }

        return () => {
            clearInterval(timerRef.current);
        };

    }, [gameStarted, stop]);

    return (
        <div className="game-container">
            {(!gameStarted || stop) && (
            <CoverScreen
                score={score}
                onStartGame={startGame}
                duration={Constants.gameDuration}
            />
            )}
            <CSSTransition
                in={gameStarted}
                timeout={250}
                classNames="balloons-screen"
                mountOnEnter
                unmountOnExit
            >
                {(state) => (
                    <div className={`balloons-screen balloons-screen--${state}`}>
                    <div className="game-nav">
                        <h1 className="game-title">Pop-a-balloon!</h1>
                        <div className="game-settings">
                            <ScoreCard score={score} time={timeRemaining} />
                            <Button type={"alert"} onClick={stopGame}>
                                Stop
                            </Button>
                        </div>
                    </div>
                    <BalloonGrid
                        numberOfBalloons={numberOfBalloons}
                        activeBalloons={activeBalloons}
                        onBalloonClick={handleBalloonClick}
                    />
                    </div>
                )}
            </CSSTransition>
            <Toast message={"+1 hits"} trigger={hit} />
        </div>
    );
};

export default Game;