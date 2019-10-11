import React from "react";
import {AgGridReact, AgGridReactProps} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-blue.css";

export const AgGridReactWrapper: React.FC<AgGridReactProps> = (props:AgGridReactProps) => {
    return (
        <div className="ag-theme-blue">
            <AgGridReact domLayout='autoHeight' {...props} reactNext={true}/>
        </div>
    );
}