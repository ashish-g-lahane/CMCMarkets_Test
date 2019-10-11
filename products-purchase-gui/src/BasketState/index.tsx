import React, {Dispatch, ReducerAction, useContext, useReducer} from "react";
import {IProduct} from "../domain-objects";
import {Action} from "redux";

const BasketContext = React.createContext<IBasketContext|undefined>(undefined);

type BasketActionDispatcherType = Dispatch<ReducerAction<typeof reducer>>;

interface IBasketContext {
    basketState: IBasketState;
    basketActionDispatcher: BasketActionDispatcherType;
}

export enum BasketActionType {
    ADD,
    REMOVE
}

interface IBasketAction extends Action<BasketActionType> {
    payload: IProduct
}

interface IBasketState {
    basket: Set<IProduct>;
}

function reducer(state: IBasketState, action: IBasketAction): IBasketState {
    switch (action.type) {
        case BasketActionType.ADD:
            state.basket.add(action.payload);
            return {basket: state.basket};
        case BasketActionType.REMOVE:
            state.basket.delete(action.payload)
            return {basket: state.basket};
        default:
            throw new Error();
    }

    return state;
}


export const withBasketContext = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => {
        const [basketState, basketActionDispatcher]: [IBasketState, BasketActionDispatcherType] = useReducer(reducer, {basket: new Set<IProduct>()});

        return (
            <BasketContext.Provider value={{basketState, basketActionDispatcher}}>
                <Component {...props as P} />
            </BasketContext.Provider>);
    }
};

export const useBasketCount = ():number => {
    const basketContext = useContext<IBasketContext|undefined>(BasketContext);
    return basketContext ? basketContext.basketState.basket.size : 0;
}


export const useIsBasketEmpty = ():boolean => {
    return useBasketCount() > 0 ? false : true;
}


export const useBasketHasProd = (prod: IProduct):boolean => {
    const basketContext = useContext<IBasketContext|undefined>(BasketContext);
    return basketContext ? basketContext.basketState.basket.has(prod) : false;
}

export const useBasketActionDispatcher = ():BasketActionDispatcherType|undefined => {
    const basketContext = useContext<IBasketContext|undefined>(BasketContext);
    // return basketContext ? basketContext.basketActionDispatcher : undefined;
    if (basketContext){
        return basketContext.basketActionDispatcher;
    }

    return undefined;
}


export const useBasketedProducts = ():IProduct[] => {
    const basketContext = useContext<IBasketContext|undefined>(BasketContext);
    return basketContext ? Array.from(basketContext.basketState.basket) : [];
}


export const useBasketTotalPrice = ():number => {
    const basketContext = useContext<IBasketContext|undefined>(BasketContext);
    return basketContext ? Array.from(basketContext.basketState.basket).map(p => p.price).reduce((partial_sum, a) => partial_sum + a,0) : 0;
}

