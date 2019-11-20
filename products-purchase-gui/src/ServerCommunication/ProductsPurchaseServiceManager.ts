import {IProduct} from "../domain-objects";
import axios from "axios";

export type ProductsResponseHandler = (products:IProduct[]) => void;
export type ShippingCostResponseHandler = (shippingCost:number) => void;
export type PlaceOrderResponseHandler = (orderPlaced:boolean) => void;

export interface IProductsPurchaseServiceManager {
    getProducts(productsResponseHandler: ProductsResponseHandler): void;
    getShippingCost(cartValue: number, shippingCostResponseHandler: ShippingCostResponseHandler): void;
    placeOrder(products :IProduct[], placeOrderResponseHandler: PlaceOrderResponseHandler): void;
}

class ProductsPurchaseServiceManager implements IProductsPurchaseServiceManager {

    static Instance: IProductsPurchaseServiceManager = new ProductsPurchaseServiceManager();

    private constructor() {

    }

    public getProducts(productsResponseHandler: ProductsResponseHandler): void {

        axios.get<IProduct[]>("https://localhost:5001/ProductCatalogue")
            .then(r => productsResponseHandler(r.data))
            .catch(e => console.error(e));
    }

    public getShippingCost(cartValue: number, shippingCostResponseHandler: ShippingCostResponseHandler): void {
        axios.get<number>(`https://localhost:5001/ShippingCost/${cartValue}`)
            .then(r => shippingCostResponseHandler(r.data))
            .catch(e => console.error(e));
    }

    public placeOrder(products: IProduct[], placeOrderResponseHandler: PlaceOrderResponseHandler): void {
        axios.post<IProduct[], any>(`https://localhost:5001/PlaceOrder/`, products)
            .then(r => placeOrderResponseHandler(r.data as boolean))
            .catch(e => console.error(e));
    }
}

export default ProductsPurchaseServiceManager.Instance;
