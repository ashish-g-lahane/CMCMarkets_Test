import React from 'react';
import {usePlaceOrder} from "../../ServerCommunication/ProductsPurchaseServiceManagerHooks";
import {useBasketedProducts} from "../../BasketState";
import {CircularProgress} from "@material-ui/core";

const PlaceOrder: React.FC = () => {

    const productsInBasket = useBasketedProducts();
    const orderResult = usePlaceOrder(productsInBasket);
    return (
        <React.Fragment>
            {
                orderResult === undefined ?
                    <CircularProgress/> :
                    (orderResult === true ? "Thanks You!!!!" : "OOPS!! Something went wrong,. Please try again.")
            }
        </React.Fragment>
    );
}

export default PlaceOrder;