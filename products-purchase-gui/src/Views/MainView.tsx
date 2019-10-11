import React from 'react';
import {AppBar, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import PurchaseFlow from "./PurchaseFlow";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBarMarginStyle: {
            marginTop: theme.spacing(8),

        },
    }),
);

const MainView: React.FC = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Typography variant="h3">
                    Antivirus Softwares Store
                </Typography>
            </AppBar>
            <div className={classes.appBarMarginStyle}>
                <PurchaseFlow/>
            </div>
        </div>
    );
}

export default MainView;