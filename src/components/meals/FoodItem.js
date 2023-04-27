import styles from "./FoodItem.module.css";

import {useId, useRef, useContext} from "react";
import Button from "../ui/Button";
import ContextStore from "../store/context-store";


import PropTypes from "prop-types";

const FoodItem = ({item}) => {

    const id = useId();
    const amountRef = useRef(1);
    const {cartDispatcher} = useContext(ContextStore);

    const addButtonHandler = event => {
        const amount = Number.parseInt(amountRef.current.value || '0');
        cartDispatcher({
            type: "ADD_TO_CART",
            data: {
                ...item,
                amount
            }
        });
        amountRef.current.value = '';
    };

    return (
        <div className={`${styles['food-item']}`}>

            <div className={styles.overview}>

                <h5 className={styles.name}>
                    <label htmlFor={id}>{item.name}</label>
                </h5>
                <div className={styles.description}>{item.description}</div>
                <div className={styles.price}>{item.price}$</div>
            </div>
            <div className={styles.action}>
                <div>
                    <label htmlFor={id}>Amount</label>
                    <input id={id} ref={amountRef} type="number"/>
                </div>
                <Button type="button" className={styles.button} onClick={addButtonHandler}>Add</Button>
            </div>
        </div>
    );
};

FoodItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired
};

export default FoodItem;