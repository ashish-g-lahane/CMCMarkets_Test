import {useEffect, useState} from "react";
import {IProduct} from "../domain-objects";
import {useAppContext} from "../AppContext";

export const useProductsList = ():IProduct[] => {

    const {productsPurchaseServiceManager} = useAppContext();
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {

        productsPurchaseServiceManager.getProducts(ps => setProducts(ps));

        return () => {

        }

    }, [productsPurchaseServiceManager]);

    return products;
}

export const useShippingCost = (cartCost:number):number => {

    const {productsPurchaseServiceManager} = useAppContext();
    const [shippingCost, setShippingCost] = useState<number>(0);
    useEffect(() => {

        productsPurchaseServiceManager.getShippingCost(cartCost,sc => setShippingCost(sc));

        return () => {

        }

    }, [productsPurchaseServiceManager, cartCost]);

    return shippingCost;
}

export const usePlaceOrder = (products: IProduct[]):boolean|undefined => {

    const {productsPurchaseServiceManager} = useAppContext();
    const [orderResult, setOrderResult] = useState<boolean|undefined>(undefined);
    useEffect(() => {

        productsPurchaseServiceManager.placeOrder(products,or => setOrderResult(or));

        return () => {

        }

    }, []);

    return orderResult;
}
