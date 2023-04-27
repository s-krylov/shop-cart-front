import styles from "./CartButton.module.css";

import Button from "../ui/Button";
import {ShoppingBagIcon} from "@heroicons/react/24/solid";

import PropTypes from "prop-types";

const CartButton = ({className, number, onCartClick}) => {

    const cartButtonHandler = event => {
        onCartClick({source : "CartButton"});
    };

    return (
        <Button className={`${styles.button} ${className}`} type={'button'} onClick={cartButtonHandler}>
            <ShoppingBagIcon className={styles.icon}/>
            <span>Your cart</span>
            <span className={styles.counter}>{number}</span>
        </Button>
    );
};

CartButton.propTypes = {
    className: PropTypes.string,
    number: PropTypes.number,
    onCartClick: PropTypes.func
};

CartButton.defaultProps = {
    className: '',
    number: '0',
    onCartClick: event => {}
};

export default CartButton;