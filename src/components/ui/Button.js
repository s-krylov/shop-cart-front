import styles from "./Button.module.css";

import PropTypes from "prop-types";

const Button = ({children, className, type, onClick, ...rest}) => {
    return (
        <button {...rest} className={`${styles.button} ${className}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    onClick: PropTypes.func,
    rest: PropTypes.array,
};

Button.defaultProps = {
    className: '',
    onClick: event => {},
};

export default Button;