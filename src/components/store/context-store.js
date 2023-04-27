import {createContext, useState, useReducer} from "react";

const ContextStore = createContext({
    products: [],
    setProducts: products => {},
    cart: [],
    cartDispatcher: event => {},
    showCart: false,
    setShowCart: showCart => {}
});

const cartReducer = (cart, {type, data}) => {
    switch (type) {
        case "ADD_TO_CART": {
            const product = cart.find(item => item.id === data.id);
            if (product) {
                product.amount += data.amount;
                return [...cart];
            } else {
                return [...cart, data];
            }
        }
        case "CHANGE_ITEM": {
            const product = cart.find(item => item.id === data.id);
            if (product) {
                product.amount += data.change;
                if (product.amount === 0) {
                    return cart.filter(item => item.id !== data.id);
                }
                return [...cart];
            }
            break;
        }
        default:
            throw new Error(`Not supported type ${type}`);
    }
}

export const ContextStoreProvider = ({children}) => {

    const [products, setProducts] = useState([{
        id: "dnejwbdi232",
        name: " Vit C-1000",
        description: "Best immune support",
        price: 30.09
    },{
        id: "fevekji121",
        name: " Vit d3 500",
        description: "Sun power in your life",
        price: 17.21
    },{
        id: "vdfjkbveih",
        name: " Vit zinc",
        description: "Hair and testeorone",
        price: 23.07
    }]);

    const [showCart, setShowCart] = useState(false);
    const [cart, cartDispatcher] = useReducer(cartReducer, []);


    return (
        <ContextStore.Provider value={{
            products,
            setProducts,
            cart,
            cartDispatcher,
            showCart,
            setShowCart
        }}>
            {children}
        </ContextStore.Provider>
    );
}

export default ContextStore;