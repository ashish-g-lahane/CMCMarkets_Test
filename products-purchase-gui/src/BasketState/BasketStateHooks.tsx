import {useContext} from "react";
import {IProduct} from "../domain-objects";
import {BasketActionDispatcherType, BasketContext, IBasketContext} from "./index";

export const useBasketCount = (): number => {
    const basketContext = useContext<IBasketContext | undefined>(BasketContext);
    return basketContext ? basketContext.basketState.basket.size : 0;
}
export const useIsBasketEmpty = (): boolean => {
    return useBasketCount() > 0 ? false : true;
}
export const useBasketHasProd = (prod: IProduct): boolean => {
    const basketContext = useContext<IBasketContext | undefined>(BasketContext);
    return basketContext ? basketContext.basketState.basket.has(prod) : false;
}
export const useBasketActionDispatcher = (): BasketActionDispatcherType | undefined => {
    const basketContext = useContext<IBasketContext | undefined>(BasketContext);
    // return basketContext ? basketContext.basketActionDispatcher : undefined;
    if (basketContext) {
        return basketContext.basketActionDispatcher;
    }

    return undefined;
}
export const useBasketedProducts = (): IProduct[] => {
    const basketContext = useContext<IBasketContext | undefined>(BasketContext);
    return basketContext ? Array.from(basketContext.basketState.basket) : [];
}
export const useBasketTotalPrice = (): number => {
    const basketContext = useContext<IBasketContext | undefined>(BasketContext);
    return basketContext ? Array.from(basketContext.basketState.basket).map(p => p.price).reduce((partial_sum, a) => partial_sum + a, 0) : 0;
}