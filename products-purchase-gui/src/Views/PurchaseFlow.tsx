import React, {useCallback} from 'react';
import SelectProducts from "./Steps/SelectProducts";
import {Button, Step, StepLabel, Stepper} from "@material-ui/core";
import BasketReview from "./Steps/BasketReview";
import PlaceOrder from "./Steps/PlaceOrder";
import {useIsBasketEmpty} from "../BasketState/BasketStateHooks";

const getStepLabel = (step: number):string => {
    return step === 0 ?
        "Select Products" :
        step === 1 ?
            "Review Basket" :
            "Place Order";
};

const getStepButtonLabel = (nextStep: number):string|undefined => {
    switch (nextStep) {
        case 0:
            return "Select Products"
        case 1:
            return "Go To Basket";
        case 2:
            return "Place Order";
        default:
            return undefined;
    }
};

const getNextStep = (currStep: number, isBasketEmpty: boolean):number => {
    if (currStep === 0)
        return 1;

    if (currStep === 1)
        return isBasketEmpty ? 0 : 2;

    return currStep + 1;
};

const PurchaseFlow: React.FC = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const isBasketEmpty = useIsBasketEmpty();
    const nextStep = getNextStep(activeStep, isBasketEmpty);
    const isNextButtonDisabled = isBasketEmpty && nextStep !== 0;
    const nextClickHandler = useCallback(() => {
        setActiveStep(nextStep);
    }, [nextStep]);

    const nextButtonLabel = getStepButtonLabel(nextStep);

    return (
        <div>
            <Stepper activeStep={activeStep}>
                <Step key={0}>
                    <StepLabel>{getStepLabel(0)}</StepLabel>
                </Step>
                <Step key={1}>
                    <StepLabel>{getStepLabel(1)}</StepLabel>
                </Step>
                <Step key={2}>
                    <StepLabel>{getStepLabel(2)}</StepLabel>
                </Step>
            </Stepper>
            <div style={{'padding':'15px'}}>
                {
                    activeStep === 0 ?
                        <SelectProducts/> :
                        activeStep === 1 ?
                            <BasketReview/> :
                            <PlaceOrder/>
                }
            </div>
            {
                nextButtonLabel ?
                    (
                        <Button variant="contained" color="primary" onClick={nextClickHandler}
                                disabled={isNextButtonDisabled}>
                            {nextButtonLabel}
                        </Button>
                    ) :
                    (
                        <React.Fragment/>
                    )
            }
        </div>
    );
}

export default PurchaseFlow;