import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ColDef, GridApi, GridOptions, GridReadyEvent, ValueFormatterParams} from "ag-grid-community";
import {AddRemoveCellRenderer} from "../ReusableComponents/AddRemoveCellRenderer";
import {AgGridReactWrapper} from "../ReusableComponents/AgGridReactWrapper";
import {IProduct} from "../domain-objects";

const priceFormatter = (params: ValueFormatterParams) => params.value + " $";
const getCols = ():ColDef[] => {

    return  [
        {
            headerName: "Product Name",
            field: "name",
        },
        {
            headerName: "Description",
            field: "description",
        },
        {
            headerName: "Price",
            field: "price",
            valueFormatter: priceFormatter

        },
        {
            headerName: "Add/Remove",
            cellRenderer: "addRemoveCellRenderer",
        }
    ];
}

interface IProductListProps {
    products: IProduct[]
}

const ProductList: React.FC<IProductListProps> = ({products}) => {

    const colDefs = getCols();
    const defaultColDef: ColDef = {resizable: true};
    const [gridApi, setGridApi] = useState<GridApi | undefined>(undefined);

    const onGridReady = (event: GridReadyEvent): void => {
        setGridApi(event.api);
    };

    const gridOptions: GridOptions = {
        rowHeight: 28
    }

    const frameworkComponents = {
        addRemoveCellRenderer: AddRemoveCellRenderer,
    }

    useEffect(() => {
        if (gridApi) {
            gridApi.sizeColumnsToFit();
            gridApi.resetRowHeights()
        }
    });
    return (
        <AgGridReactWrapper columnDefs={colDefs} defaultColDef={defaultColDef} rowData={products}
                            onGridReady={onGridReady} frameworkComponents={frameworkComponents}
                            gridOptions={gridOptions}
        />
    );
}

export default ProductList;