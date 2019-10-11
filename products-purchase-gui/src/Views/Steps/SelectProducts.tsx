import React from 'react';
import {useProductsList} from "../../ServerCommunication/ProductsPurchaseServiceManagerHooks";
import {Typography} from "@material-ui/core";
import ProductList from "../ProductList";
import BasketIcon from "../BasketIcon";

const SelectProducts: React.FC = () => {

    const products = useProductsList();

    return (
        <div>
            <Typography variant={"h4"}>Select Products</Typography>
            <ProductList products={products}/>
            <BasketIcon/>
        </div>
    );
}

export default SelectProducts;