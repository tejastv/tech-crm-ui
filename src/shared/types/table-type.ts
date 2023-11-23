// import { ColumnDef } from "@tanstack/react-table";
import { PeginationConfigType } from "..";

export interface TableType<T> {
  config: {
    tableName?: string;
    columns: any;
    tableData: T[];
    sorting?: boolean;
    copyBtn?: boolean;
    csvBtn?: boolean;
    excelBtn?: boolean;
    pdfBtn?: boolean;
    printBtn?: boolean;
    globalSearchBox?: boolean;
    pagination?: PeginationConfigType;
    showItemCountDropdown?: boolean;
    onDeleteClick?: (data: any) => void;
    onEditClick?: (data: any, other?: any) => void;
  };
}
