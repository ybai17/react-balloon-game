import Button from "../Button/Button";

const CoverScreen = ({ score, onStartGame, duration }) => //{ //parantheses or curly braces?

    //return
    (
        <div className="intro">
            <h1 className="title">{score > -1 ? "Game Over!" : "Pop-a-balloon!" }</h1>

            { score > -1 ? (
                <p className="description">
                    {`You scored
                        ${
                            score === 0 ? "nothing" : `${score} ${ score > 1 ? "hits" : "hit" }`
                        }
                    `}
                </p>
            ) : (
                <p className="description">
                    A small &amp; simple {duration}-second balloon-popping game built in React.
                </p>
            )}

            <div className="action">
                <Button onClick={onStartGame} width={"wide"}>
                    {score > -1 ? "Play again" : "Start game"}
                </Button>
            </div>
        </div>
    );
//};

export default CoverScreen;