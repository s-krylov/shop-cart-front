import styles from "./CartItemList.module.css";

import {useContext} from "react";
import ContextStore from "../store/context-store";
import CartItem from "./CartItem";
import Button from "../ui/Button";

const CartItemList = () => {

    const {cart, setShowCart} = useContext(ContextStore);

    const cartList = cart.flatMap(item => {
        const cartItem = <CartItem key={item.id} item={item}/>;
        return [cartItem, <hr key={`${item.id}_hr`}/>]
    });

    const total = cart.reduce((accum, current) => accum + current.price * current.amount, 0).toFixed(2);

    const closeButtonHandler = event => {
        setShowCart(false);
    }

    const orderButtonHandler = (event) => {
        console.log("Sending request to backend...");
    }

    return (
        <div className={`${styles['cart-item-list']}`}>
            {cartList}
            <div className={styles.total}>

                <h4>Total amount</h4>
                <div className={styles.amount}>$ {total}</div>
            </div>
            <div className={styles.buttons}>
                <Button onClick={closeButtonHandler}>Close</Button>
                <Button className={`${styles['order-button']}`} onClick={orderButtonHandler}>Order</Button>
            </div>
        </div>
    );
};

export default CartItemList;