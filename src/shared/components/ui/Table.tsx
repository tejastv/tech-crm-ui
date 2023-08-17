// CompanyMaster.tsx
import React, { PropsWithChildren } from "react";
import {
  Column,
  Table as ReactTable,
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  OnChangeFn,
  flexRender,
} from "@tanstack/react-table";
import { Button, TableType } from "@shared/index";

export const Table = <T extends {}>(props: PropsWithChildren<TableType<T>>) => {
  const [globalFilter, setGlobalFilter] = React.useState("");

  const data = props.config.data;
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
    },
  });
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
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="dt-buttons">
              {props.config.copyBtn && (
                <Button
                  className="dt-button buttons-copy buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                >
                  <span>Copy</span>
                </Button>
              )}
              {props.config.csvBtn && (
                <Button
                  className="dt-button buttons-csv buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                >
                  <span>CSV</span>
                </Button>
              )}
              {props.config.excelBtn && (
                <Button
                  className="dt-button buttons-excel buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                >
                  <span>Excel</span>
                </Button>
              )}
              {props.config.pdfBtn && (
                <Button
                  className="dt-button buttons-pdf buttons-html5 btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
                >
                  <span>PDF</span>
                </Button>
              )}
              {props.config.printBtn && (
                <Button
                  className="dt-button buttons-print btn btn-danger btn-sm mr-1"
                  aria-controls="file_export"
                  type="button"
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
                    value={globalFilter ?? ""}
                    onChange={(value) => setGlobalFilter(String(value))}
                  />
                </label>
              </div>
            )}
            <table
              id="company-master-grid-data"
              border={0}
              className="table table-striped table-bordered display dataTable no-footer mt-2 mb-2"
              width="100%"
              role="grid"
              aria-describedby="company-master-grid-data_info"
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr role="row" key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          className="sorting"
                          aria-controls="company-master-grid-data"
                          key={header.id}
                          colSpan={header.colSpan}
                        >
                          {header.isPlaceholder ? null : (
                            <>
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {/* {header.column.getCanFilter() ? (
                      <div>
                        <Filter column={header.column} table={table} />
                      </div>
                    ) : null} */}
                            </>
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              {data && data.length ? (
                <tbody>
                  {table.getRowModel().rows.map((row) => {
                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
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
                      No data available in table
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
                  {table.getPageCount()}
                  entries
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
                        onClick={() => table.previousPage()}
                        type="button"
                        disabled={!table.getCanPreviousPage()}
                        aria-controls="zero_config"
                        data-dt-idx="0"
                        className={`page-link ${
                          !table.getCanPreviousPage() && "disabled"
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
                        aria-controls="zero_config"
                        data-dt-idx="1"
                        type="button"
                        className={`page-link ${
                          !table.getCanNextPage() && "disabled"
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

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
