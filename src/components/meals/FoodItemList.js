import styles from "./FoodItemList.module.css";


import {useContext} from "react";

import FoodItem from "./FoodItem";
import Card from "../ui/Card";
import ContextStore from "../store/context-store";

const FoodItemList = () => {
    const {products} = useContext(ContextStore);

    const productsList = products.flatMap((item, idx) => {
        const foodItem = <FoodItem key={item.id} item={item}/>;
        return idx < (products.length - 1) ? [foodItem, <hr key={`${item.id}_hr`}/>] : [foodItem];
    });

    return (
        <Card className={`${styles['food-list']}`}>
            {productsList}
        </Card>
    );
};

export default FoodItemList;