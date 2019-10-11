import React from 'react';
import {withAppContext} from "./AppContext";
import MainView from "./Views/MainView";
import {withBasketContext} from "./BasketState";

const App: React.FC = () => {

  return (
    <MainView/>
  );
}

export default withAppContext(withBasketContext(App));
