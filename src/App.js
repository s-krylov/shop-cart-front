import {Fragment, useContext} from "react";
import Dialog from "./components/ui/Dialog";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import ContextStore from "./components/store/context-store";
import CartItemList from "./components/meals/CartItemList";

function App() {

    const {showCart, setShowCart} = useContext(ContextStore);

    const onCloseHandler = (event) => {
        setShowCart(false);
    };

    return (
        <Fragment>
            <Header title="Your Demo shop"/>
            <Main/>
            {showCart &&
                (<Dialog onClose={onCloseHandler}>
                    <CartItemList/>
                </Dialog>)
            }
        </Fragment>
    );
}

export default App;
