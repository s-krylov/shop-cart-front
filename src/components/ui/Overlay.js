import styles from "./Overlay.module.css";

import PropTypes from "prop-types";

const Overlay = ({children, onClick}) => {

    return (
        <div className={styles.overlay} onClick={onClick}>
            {children}
        </div>
    );
};

Overlay.propTypes = {
    onClick: PropTypes.func
};

Overlay.defaultProps = {
    onClick: event => {}
};

export default Overlay;