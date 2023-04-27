import styles from "./Card.module.css";

import PropTypes from "prop-types";

const Card = ({children, className}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    );
};

Card.propTypes = {
    className: PropTypes.string
};

Card.defaultProps = {
    className: ''
};


export default Card;