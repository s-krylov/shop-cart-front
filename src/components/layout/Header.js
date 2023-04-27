import styles from "./Header.module.css"

import {useContext} from "react";

import CartButton from "../cart/CartButton";
import ContextStore from "../store/context-store";
import PropTypes from "prop-types";

const Header = ({title}) => {
    const {cart, setShowCart} = useContext(ContextStore);
    const number = cart.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0);

    const cartClickHandler = () => {
        setShowCart(true);
    }

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.cart}>
                <CartButton className={styles.button} number={number} onCartClick={cartClickHandler}/>
            </div>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

Header.defaultProps = {
    title: 'Demo shop'
};

export default Header;