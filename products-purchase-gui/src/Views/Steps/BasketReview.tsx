import React from 'react';
import {Typography} from "@material-ui/core";
import {useBasketedProducts, useBasketTotalPrice} from "../../BasketState";
import ProductList from "../ProductList";
import {useShippingCost} from "../../ServerCommunication/ProductsPurchaseServiceManagerHooks";

const BasketReview: React.FC = () => {

    const basketedProds = useBasketedProducts();
    const basketPrice = useBasketTotalPrice();
    const shippingCost = useShippingCost(basketPrice);
    return (
        <React.Fragment>
            <Typography variant="h4">Review your Basket</Typography>
            <ProductList products={basketedProds}/>
            <Typography variant="h6">{`${basketPrice} : Total Basket Cost`}</Typography>
            <Typography variant="h6">{`${shippingCost} : Shipping Cost`}</Typography>
            <hr/>
            <Typography variant="h6">{`${basketPrice + shippingCost} : Total Payable`}</Typography>
        </React.Fragment>
    );
}

export default BasketReview;