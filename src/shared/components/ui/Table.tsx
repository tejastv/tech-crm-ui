import React, { PropsWithChildren, useEffect, useRef } from "react";
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
import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Alignment, TDocumentDefinitions } from "pdfmake/interfaces";
import { useToaster } from "@hooks/useToaster";

export const Table = <T extends {}>(props: PropsWithChildren<TableType<T>>) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const tableRef = useRef(null);
  const data = props.config.tableData;
  // const [data, setData] = useState<Array<any>>([]);
  // useEffect(() => {
  //   setData([...props.config.tableData]);
  // }, [props.config.tableData]);
  const columns = props.config.columns;
  const pageSizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const { errorMessageToaster, successMessageToaster } = useToaster();
  let clientSidePagination =
    props.config.pagination?.isClientSidePagination === undefined
      ? true
      : false;

  let clientSideSearch =
    props.config.isClientSideSearch === undefined ? true : false;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    initialState: {
      pagination: {
        pageSize: props.config.pagination?.pageSize
          ? props.config.pagination?.pageSize
          : 10,
      },
    },
    state: {
      globalFilter,
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  const filteredSelectedRows = table.getFilteredSelectedRowModel().flatRows;

  useEffect(() => {
    if (props.setSelectedRows) {
      const originIds = filteredSelectedRows.map((row) => row.original);
      props.setSelectedRows(originIds);
    }
  }, [props.setSelectedRows, filteredSelectedRows]);

  const onTableDeleteBtnClick = (data: any) => {
    props.config.onDeleteClick && props.config.onDeleteClick(data);
  };

  const onNextClick = () => {
    if (clientSidePagination) {
      table.nextPage();
    } else {
      props.config.onNextButtonClick && props.config.onNextButtonClick();
    }
  };

  const onPrevClick = () => {
    if (clientSidePagination) {
      table.previousPage();
    } else {
      props.config.onPrevButtonClick && props.config.onPrevButtonClick();
    }
  };

  const onTableEditBtnClick = (data: any, other?: any) => {
    props.config.onEditClick && props.config.onEditClick(data, other);
  };

  const onRemoveRowHandler = (data: any) => {
    props.config.onRemoveRow && props.config.onRemoveRow(data);
  };

  const copyTableToClipboard = async (): Promise<void> => {
    const table: any = tableRef.current;
    try {
      const tableText = table.innerText;
      const copiedText = `Mirainform - CRM Software - ${props.config.tableName}\n\n${tableText}`;
      await navigator.clipboard.writeText(copiedText);
      console.log("Table data copied to clipboard!");
      successMessageToaster("Table data copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard: ", err);
      errorMessageToaster(err, "Unable to copy to clipboard");
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
    a.download = `Mirainform-CRM Software-${props.config.tableName}.csv`;
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
    a.download = `Mirainform-CRM Software-${props.config.tableName}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    if (pdfMake) {
      // (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    }
    const companyName = `Mirainform - CRM Software - ${props.config.tableName}`;
    const table: any = tableRef.current;
    const rows: any = Array.from(table.querySelectorAll("tr"));
    const headers: any = Array.from(rows[0].querySelectorAll("th")).map(
      (header: any) => ({
        text: header.textContent,
        style: "headerStyle",
      })
    );
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
        {
          text: companyName,
          fontSize: 16,
          alignment: "center",
          margin: [0, 0, 0, 20],
        }, // Title
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
    pdfDoc.download(`Mirainform - CRM Software -${props.config.tableName}.pdf`);
  };

  const handlePrint = () => {
    const companyName = `Mirainform - CRM Software - ${props.config.tableName}`;
    const table: any = tableRef.current;
    const rows: any = Array.from(table.querySelectorAll("tr"));
    const headers: any = Array.from(rows[0].querySelectorAll("th")).map(
      (header: any) => header.textContent
    );
    const tableData = rows
      .slice(1) // Skip the header row
      .map((row: any) =>
        Array.from(row.querySelectorAll("td")).map(
          (cell: any) => cell.textContent
        )
      );

    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(
        "<html><head><title>" +
          companyName +
          '</title></head><body style="font-family: Arial, sans-serif;">'
      );
      newWindow.document.write(
        '<div style="font-size: 24px; margin-bottom: 10px;color:#42556f;">'
      );
      newWindow.document.write(companyName);
      newWindow.document.write("</div>");
      newWindow.document.write(
        '<table style="border-collapse: collapse; width: 100%;">'
      );
      newWindow.document.write("<thead>");
      newWindow.document.write("<tr>");
      headers.forEach((header: string) => {
        newWindow.document.write(
          '<th style="border: 1px solid #e3e7ea; background-color: #f0f0f0; text-align: left; font-size: 12px;">' +
            header +
            "</th>"
        );
      });
      newWindow.document.write("</tr>");
      newWindow.document.write("</thead>");
      newWindow.document.write("<tbody>");
      for (let i = 0; i < tableData.length; i++) {
        newWindow.document.write("<tr>");
        tableData[i].forEach((cell: string) => {
          newWindow.document.write(
            '<td style="border: 1px solid #e3e7ea; font-size: 12px;">' +
              cell +
              "</td>"
          );
        });
        newWindow.document.write("</tr>");
      }
      newWindow.document.write("</tbody>");
      newWindow.document.write("</table>");
      newWindow.document.write("</body></html>");
      newWindow.document.close();

      // Trigger the print operation
      newWindow.print();

      // Close the window after a short delay (e.g., 1 second)
      setTimeout(() => {
        newWindow.close();
      }, 1000);
    } else {
      alert(
        "Your browser blocked opening a new window. Please allow pop-ups and try again."
      );
    }
  };

  const handleSearchChange = (value: any) => {
    if (clientSideSearch) {
      setGlobalFilter(String(value));
    } else {
      props.config.onSearchChange && props.config.onSearchChange(value);
    }
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
            {props.config.pagination?.showItemCountDropdown && (
              <div className="dataTables_length">
                <label>Show </label>
                <select
                  value={
                    props.config.pagination?.pageSize ||
                    table.getState().pagination.pageSize
                  }
                  onChange={(e) => {
                    table.setPageSize(Number(e.target.value));
                  }}
                >
                  {pageSizes.map((pageSize) => (
                    <option key={`pageSize_${pageSize}`} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {(props.config.copyBtn ||
              props.config.csvBtn ||
              props.config.excelBtn ||
              props.config.pdfBtn ||
              props.config.printBtn) && (
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
            )}
            {props.config.globalSearchBox && (
              <div id="file_export_filter" className="dataTables_filter">
                <label>
                  Search:
                  <DebouncedInput
                    key="DebouncedInput"
                    value={globalFilter ?? ""}
                    onChange={(value) => handleSearchChange(value)}
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
                {table.getHeaderGroups().map((headerGroup, index) => {
                  return (
                    <tr
                      role="row"
                      key={`table_head_tr_${index + Math.random() * 19}`}
                      id={`thead_tr_${headerGroup.id}`}
                    >
                      {headerGroup.headers.map((header) => {
                        return (
                          <th
                            className="sorting"
                            aria-controls="company-master-grid-data"
                            colSpan={header.colSpan}
                            key={`table_head_th_${index + Math.random() * 16}`}
                          >
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
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
                  );
                })}
              </thead>
              {data && data.length ? (
                <tbody>
                  {table.getRowModel().rows.map((row, index) => {
                    return (
                      <tr key={`row_${index}`}>
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <>
                              {cell.column.id == "srNo" ? (
                                <td
                                  key={`cell_action_${
                                    cell.column.id + Math.random() * 15
                                  }`}
                                >
                                  {index + 1}
                                </td>
                              ) : cell.column.id.startsWith("action") ? (
                                <td
                                  key={`cell_action_${
                                    cell.column.id + Math.random() * 17
                                  }`}
                                >
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
                                  {cell.column.id.split(":")[1] ===
                                    "rights" && (
                                    <a
                                      className="icon"
                                      data-toggle="tooltip"
                                      data-original-title="Edit Rights"
                                      onClick={() =>
                                        onTableEditBtnClick(
                                          row.original,
                                          "rights"
                                        )
                                      }
                                    >
                                      <span className="badge badge-danger m-r-10">
                                        <i className="ti-settings"></i>
                                      </span>
                                    </a>
                                  )}
                                </td>
                              ) : cell.column.id == "remove" ? (
                                <td
                                  key={`cell_action_${
                                    cell.column.id + Math.random() * 17
                                  }`}
                                >
                                  <a
                                    className="icon"
                                    data-toggle="tooltip"
                                    data-original-title="Delete"
                                    onClick={() =>
                                      onRemoveRowHandler(row.original)
                                    }
                                  >
                                    <span className="badge badge-danger m-r-10">
                                      <i className="ti-trash"></i>
                                    </span>
                                  </a>
                                </td>
                              ) : (
                                <td
                                  key={`cell_data_${
                                    cell.column.id + Math.random() * 13
                                  }`}
                                >
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
                      key={"no_data_found"}
                    >
                      {props.children}
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
        {props.config.pagination?.tableMetaDataShow && (
          <div className="mt-3">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                {clientSidePagination ? (
                  <div
                    className="dataTables_info"
                    id="zero_config_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing{" "}
                    {table.getState().pagination.pageIndex *
                      table.getState().pagination.pageSize +
                      1}{" "}
                    to{" "}
                    {(table.getState().pagination.pageIndex + 1) *
                      table.getState().pagination.pageSize}{" "}
                    of {table.getTotalSize()} entries
                  </div>
                ) : (
                  <div
                    className="dataTables_info"
                    id="zero_config_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing {props?.config?.pagination?.offset! + 1} to
                    {props?.config?.pagination?.offset! +
                      props?.config?.pagination?.pageSize!}{" "}
                    of {props?.config?.pagination?.total} entries
                  </div>
                )}
              </div>
              {props.config.pagination.nextPreviousBtnShow && (
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
                          onClick={onPrevClick}
                          type="button"
                          disabled={
                            clientSidePagination
                              ? !table.getCanPreviousPage()
                              : !props.config.pagination.isPrevButtonEnabled
                          }
                          aria-controls="zero_config"
                          data-dt-idx="0"
                          className={`page-link ${
                            (clientSidePagination
                              ? !table.getCanPreviousPage()
                              : !props.config.pagination.isPrevButtonEnabled) &&
                            "disabled"
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
                          className={`page-link ${
                            (clientSidePagination
                              ? !table.getCanNextPage()
                              : !props.config.pagination.isNextButtonEnabled) &&
                            "disabled"
                          }`}
                          onClick={onNextClick}
                          disabled={
                            clientSidePagination
                              ? !table.getCanNextPage()
                              : !props.config.pagination.isNextButtonEnabled
                          }
                        >
                          Next
                        </Button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {/* <div>{table.getRowModel().rows.length} Rows</div> */}
        {/* <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
      </div>
    </>
  );
};
