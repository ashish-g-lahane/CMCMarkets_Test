import React, {useContext} from "react";
import ProductsPurchaseServiceManager, {IProductsPurchaseServiceManager} from "../ServerCommunication/ProductsPurchaseServiceManager";

class AppContextContainer {

    public static Instance: AppContextContainer = new AppContextContainer(ProductsPurchaseServiceManager);

    get productsPurchaseServiceManager(): IProductsPurchaseServiceManager {
        return this._productsPurchaseServiceManager;
    }
    private _productsPurchaseServiceManager: IProductsPurchaseServiceManager;

    constructor(productsPurchaseServiceManager: IProductsPurchaseServiceManager){
        this._productsPurchaseServiceManager = productsPurchaseServiceManager;
    }
}

const AppContext = React.createContext<AppContextContainer>(AppContextContainer.Instance);

export const withAppContext = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => (
        <AppContext.Provider value={AppContextContainer.Instance}>
            <Component {...props as P} />
        </AppContext.Provider>
    );
};

export const useAppContext = ():AppContextContainer => useContext<AppContextContainer>(AppContext);

