import styles from "./Main.module.css";

import Body from "./Body";
import ShadowedCard from "../ui/ShadowedCard";
import FoodItemList from "../meals/FoodItemList";

const Main = () => {
    return (
        <Body>
            <ShadowedCard className={styles.promo}>
                <h3>Free delivery for orders from 75$</h3>
                <p>
                    Premium quality of our goods will make you to come here again. <br/>
                    We offer free delivery for order from 75 $
                </p>
                <p>
                    Please call us in case of any questions
                </p>
                <p>
                    Limited offer for first 100 orders
                </p>
            </ShadowedCard>
            <FoodItemList/>
        </Body>
    );
};

export default Main;