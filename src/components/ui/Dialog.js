import styles from "./Dialog.module.css";

import ReactDOM from "react-dom";
import {Fragment} from "react";
import PropTypes from "prop-types";

import Overlay from "./Overlay";
import Card from "./Card";

const Dialog = ({children, className, onClose}) => {

    const closeHandler = ignore => onClose({type: "overlay"});

    return (
        <Fragment>
            {ReactDOM.createPortal(<Overlay onClick={closeHandler}/>, document.getElementById("overlay"))}
            {ReactDOM.createPortal(
                <Card className={`${styles.dialog} ${className}`}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </Card>,
                document.getElementById("dialog")
            )}
        </Fragment>
    );
};

Dialog.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func
};

Dialog.defaultProps = {
    className: '',
    onClose: event => {}
};

export default Dialog;