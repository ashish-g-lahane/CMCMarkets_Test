import React from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import {Badge, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import {useBasketCount} from "../BasketState/BasketStateHooks";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        basketMarginStyle: {
            marginTop: theme.spacing(3),
        },
    }),
);

const BasketIcon: React.FC = () => {

    const classes = useStyles();
    const basketCount = useBasketCount();

    return (
            <Badge color="secondary" badgeContent={basketCount} className={classes.basketMarginStyle}>
                <ShoppingCart  fontSize="large"/>
            </Badge>
    );
}

export default BasketIcon;