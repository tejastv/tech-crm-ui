import { ColumnDef } from "@tanstack/react-table";

export interface TableType<T> {
  config: {
    columns: ColumnDef<T>[];
    data: T[];
    sorting?: boolean;
    copyBtn?: boolean;
    csvBtn?: boolean;
    excelBtn?: boolean;
    pdfBtn?: boolean;
    printBtn?: boolean;
    globalSearchBox?: boolean;
    pagination?: boolean;
    showItemCountDropdown?: boolean;
  };
}
