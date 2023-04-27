import Card from "./Card";
import styles from "./ShadowedCard.module.css";

import PropTypes from "prop-types";


const ShadowedCard = ({children, className}) => {
    return (
        <Card className={`${styles.shadow} ${className}`}>
            {children}
        </Card>
    );
};

ShadowedCard.propTypes = {
    className: PropTypes.string
};

ShadowedCard.defaultProps = {
    className: ''
};

export default ShadowedCard;