import React, {useCallback} from "react";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import {IconButton} from "@material-ui/core";
import {BasketActionType, useBasketActionDispatcher, useBasketHasProd} from "../BasketState";
import {ICellRendererParams} from "ag-grid-community";
import {IProduct} from "../domain-objects";

export const AddRemoveCellRenderer: React.FC<ICellRendererParams> = (props: ICellRendererParams ) => {

    const basketActionDispatcher = useBasketActionDispatcher();
    const prod: IProduct = props.data as IProduct;
    const isProdInBasket = useBasketHasProd(prod);
    const currActionType = isProdInBasket ? BasketActionType.REMOVE : BasketActionType.ADD;
    const CurrButtonIcon = isProdInBasket ? RemoveShoppingCart : ShoppingCart;
    const onClickHandler = useCallback(() => basketActionDispatcher!({type: currActionType, payload: prod}),[basketActionDispatcher, currActionType]);
    // const onClickHandler = () => basketActionDispatcher!({type: currActionType, payload: prod});
    return (
        <IconButton size={"small"} color="secondary" onClick={onClickHandler}>
            <CurrButtonIcon fontSize="inherit"/>
        </IconButton>
    );
};