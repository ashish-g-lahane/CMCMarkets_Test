import React, {Dispatch, ReducerAction, useReducer} from "react";
import {IProduct} from "../domain-objects";
import {Action} from "redux";

export const BasketContext = React.createContext<IBasketContext|undefined>(undefined);

export type BasketActionDispatcherType = Dispatch<ReducerAction<typeof reducer>>;

export interface IBasketContext {
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


