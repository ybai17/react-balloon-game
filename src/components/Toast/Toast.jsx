import { CSSTransition } from "react-transition-groups";
import "./Toast.css";

const Toast = ({ message, trigger }) => {

    return (
        <CSSTransition
            in={trigger}
            timeout={250}
            classNames="toast"
            mountOnEnter
            unmountOnExit
        >
            {(state) =>
                <div className={`toast toast--${state}`}>
                    {message}
                </div>
            }
        </CSSTransition>
    );

};

export default Toast;