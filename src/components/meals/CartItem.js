import styles from "./CartItem.module.css";

import PropTypes from "prop-types";
import {useContext} from "react";

import ContextStore from "../store/context-store";

const CartItem = ({item}) => {

    const {cartDispatcher} = useContext(ContextStore);

    const createChangeAmountHandler = (change) => {
        return event => {
            event.preventDefault();
            cartDispatcher({
                type: "CHANGE_ITEM",
                data: {
                    id: item.id,
                    change
                }
            });
        };
    };
    
    return (
        <div className={`${styles['cart-item']}`}>
            <div className={styles.title}>
                <h5>{item.name}</h5>
                <div>
                    <span className={styles.price}>$ {item.price}</span>
                    <span className={styles.amount}>x {item.amount}</span>
                </div>
            </div>
            <div className={styles.action}>
                <button className={styles.button} type="button" onClick={createChangeAmountHandler(1)}>+</button>
                <button className={styles.button} type="button" onClick={createChangeAmountHandler(- 1)}>-</button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired
    }).isRequired,
    onAddItemClick: PropTypes.func
};

export default CartItem;