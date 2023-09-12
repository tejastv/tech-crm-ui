import React, { PropsWithChildren, useRef } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button, DebouncedInput, TableType } from "@shared/index";
import * as XLSX from "xlsx";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Alignment, TDocumentDefinitions } from "pdfmake/interfaces";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const Table = <T extends {}>(props: PropsWithChildren<TableType<T>>) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const data = props.config.tableData;
  const columns = props.config.columns;
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    onGlobalFilterChange: setGlobalFilter,
    // globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  const onTableDeleteBtnClick = (data: any) => {
    props.config.onDeleteClick && props.config.onDeleteClick(data);
  };

  const onTableEditBtnClick = (data: any) => {
    props.config.onEditClick && props.config.onEditClick(data);
  };

  const tableRef = useRef(null);

  const copyTableToClipboard = async (): Promise<void> => {
    const table: any = tableRef.current;

    try {
      const tableText = table.innerText;
      const copiedText = `Mirainform - CRM Software\n\n${tableText}`;
      await navigator.clipboard.writeText(copiedText);
      console.log("Table data copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard: ", err);
    }
  };

  const downloadCSV = (): void => {
    const table: any = tableRef.current;
    const rows: any = Array.from(table.querySelectorAll("tr"));
    const headers: any = Array.from(rows[0].querySelectorAll("th")).map(
      (header: any) => header.textContent
    );
    const data = rows
      .slice(1) // Skip the header row
      .map((row: any) =>
        Array.from(row.querySelectorAll("td")).map(
          (cell: any) => cell.textContent
        )
      );
    const csvContent = [headers, ...data]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mirainform - CRM Software.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateExcelData = () => {
    const table = tableRef.current;
    const ws = XLSX.utils.table_to_sheet(table);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    return XLSX.write(wb, { bookType: "xlsx", type: "array" });
  };
  const downloadExcel = () => {
    const excelData = generateExcelData();
    const blob = new Blob([excelData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mirainform - CRM Software.xlsx";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    const companyName = "Mirainform - CRM Software";
    const table: any = tableRef.current;
    const rows: any = Array.from(table.querySelectorAll("tr"));
    const headers: any = Array.from(rows[0].querySelectorAll("th")).map(
      (header: any) => ({
        text: header.textContent,
        style: "headerStyle",
      })
    );
    console.log(headers)
    const tableData = rows
      .slice(1) // Skip the header row
      .map((row: any) =>
        Array.from(row.querySelectorAll("td")).map(
          (cell: any) => cell.textContent
        )
      );
    const columnWidths = Array.from({ length: headers.length }, () => "auto");
    const headerStyle = {
      fillColor: "#2d4154", // background for headers
      color: "#ffffff", // White font color for headers
      border: "none", // No borders for headers
      alignment: "center" as Alignment,
    };
    const bodyStyle = {
      color: "#2d4154", // Font color for the table body
      border: "none",
    };
    const docDefinition: TDocumentDefinitions = {
      pageSize: "A4", // Adjust page size as needed
      // pageOrientation: "landscape",   
      content: [
        { text: companyName, fontSize: 16, alignment: "center", margin: [0, 0, 0, 20] }, // Title
        {
          table: {
            headerRows: 1,
            widths: columnWidths, // Adjust column widths as needed
            body: [headers, ...tableData],
          },
          layout: {
            hLineWidth: function (i) {
              return i === 0 ? 0 : 1; // Remove horizontal borders for headers
            },
            vLineWidth: function () {
              return 0; // Remove vertical borders
            },
            hLineColor: function (i) {
              return i === 0 ? "#3498db" : "#ffffff"; // Color for horizontal lines
            },
            fillColor: function (rowIndex) {
              return rowIndex % 2 === 0 ? "#f2f2f2" : null; // Zebra-style background for data rows (excluding headers)
            },
          },
        },
      ],
      styles: {
        headerStyle: headerStyle,
        bodyStyle: bodyStyle,
      },

    };
    // Create a PDF document
    const pdfDoc = pdfMake.createPdf(docDefinition);
    // Download the PDF with a specific filename
    pdfDoc.download("Mirainform - CRM Software.pdf");
  };



  const handlePrint = () => {
    console.log("print")
  };



  return (
    <>
      <div className="p-2">
        <div className="h-2" />
        <div className="table-responsive">
          <div
            id="file_export_wrapper"
            className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
          >
            {props.config.showItemCountDropdown && (
              <div className="dataTables_length">
                <label>Show </label>
                <select
                  value={table.getState().pagination.pageSize}
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={`pageSize_${pageSize}`} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="dt-buttons">
              {props.config.copyBtn && (
                <Button
                  key="buttons-copy"
                  className="dt-button buttons-copy buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                  onClick={copyTableToClipboard}
                >
                  <span>Copy</span>
                </Button>
              )}
              {props.config.csvBtn && (
                <Button
                  key="buttons-csv"
                  className="dt-button buttons-csv buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                  onClick={downloadCSV}
                >
                  <span>CSV</span>
                </Button>
              )}
              {props.config.excelBtn && (
                <Button
                  key="buttons-excel"
                  className="dt-button buttons-excel buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                  onClick={downloadExcel}
                >
                  <span>Excel</span>
                </Button>
              )}
              {props.config.pdfBtn && (
                <Button
                  key="buttons-pdf"
                  className="dt-button buttons-pdf buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                  onClick={downloadPDF}
                >
                  <span>PDF</span>
                </Button>
              )}
              {props.config.printBtn && (
                <Button
                  key="buttons-print"
                  className="dt-button buttons-print btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                  onClick={handlePrint}
                >
                  <span>Print</span>
                </Button>
              )}
            </div>
            {props.config.globalSearchBox && (
              <div id="file_export_filter" className="dataTables_filter">
                <label>
                  Search:
                  <DebouncedInput
                    key="DebouncedInput"
                    value={globalFilter ?? ""}
                    onChange={(value) => setGlobalFilter(String(value))}
                  />
                </label>
              </div>
            )}
            <table
              id="file_export"
              border={0}
              className="table table-striped table-bordered display dataTable no-footer mt-2 mb-2"
              width="100%"
              role="grid"
              aria-describedby="company-master-grid-data_info"
              key="data-table"
              ref={tableRef}
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    role="row"
                    key={`thead_tr_${headerGroup.id}`}
                    id={`thead_tr_${headerGroup.id}`}
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          className="sorting"
                          aria-controls="company-master-grid-data"
                          key={`thead_th_${header.id}`}
                          colSpan={header.colSpan}
                        >
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer select-none"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {header.isPlaceholder ? null : (
                              <>
                                {flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                                {{
                                  asc: " 🔼",
                                  desc: " 🔽",
                                }[header.column.getIsSorted() as string] ??
                                  null}
                              </>
                            )}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              {data && data.length ? (
                <tbody>
                  {table.getRowModel().rows.map((row, index) => {
                    return (
                      <tr key={`${Math.random().toFixed(5)}`}>
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <>
                              {cell.column.id == "srNo" ? (
                                <td key={`${Math.random().toFixed(5)}`}>
                                  {index + 1}
                                </td>
                              ) : cell.column.id == "action" ? (
                                <td>
                                  <a
                                    className="icon"
                                    data-toggle="tooltip"
                                    data-original-title="Edit"
                                    onClick={() =>
                                      onTableEditBtnClick(row.original)
                                    }
                                  >
                                    <span className="badge badge-danger m-r-10">
                                      <i className="ti-pencil"></i>
                                    </span>
                                  </a>
                                  <a
                                    className="icon"
                                    data-toggle="tooltip"
                                    data-original-title="Delete"
                                    onClick={() =>
                                      onTableDeleteBtnClick(row.original)
                                    }
                                  >
                                    <span className="badge badge-danger m-r-10">
                                      <i className="ti-trash"></i>
                                    </span>
                                  </a>
                                </td>
                              ) : (
                                <td key={`data_${cell.id}${index}`}>
                                  {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  )}
                                </td>
                              )}
                            </>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr className="odd">
                    <td
                      valign="top"
                      colSpan={columns.length}
                      className="dataTables_empty text-left"
                    >
                      {props.children
                        ? props.children
                        : "No data available in table"}
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>

        <div className="h-2" />

        {props.config.pagination && (
          <div className="mt-3">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div
                  className="dataTables_info"
                  id="zero_config_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing {table.getState().pagination.pageIndex + 1} to
                  {table.getState().pagination.pageSize} of{" "}
                  {table.getRowModel().rows.length} entries
                </div>
              </div>
              <div className="col-sm-12 col-md-7">
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="zero_config_paginate"
                >
                  <ul className="pagination">
                    <li
                      className="paginate_button page-item previous"
                      id="zero_config_previous"
                    >
                      <Button
                        key="zero_config-pri"
                        onClick={() => table.previousPage()}
                        type="button"
                        disabled={!table.getCanPreviousPage()}
                        aria-controls="zero_config"
                        data-dt-idx="0"
                        className={`page-link ${!table.getCanPreviousPage() && "disabled"
                          }`}
                      >
                        Previous
                      </Button>
                    </li>
                    <li
                      className="paginate_button page-item next"
                      id="zero_config_next"
                    >
                      <Button
                        key="zero_config-next"
                        aria-controls="zero_config"
                        data-dt-idx="1"
                        type="button"
                        className={`page-link ${!table.getCanNextPage() && "disabled"
                          }`}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                      >
                        Next
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div>{table.getRowModel().rows.length} Rows</div> */}
        {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
      </div>
    </>
  );
};
