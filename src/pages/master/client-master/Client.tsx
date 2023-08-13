// Client.tsx
import { COMMON_ROUTES } from "@constants/route-constants";
import { BorderLayout, PageBreadcrumb, Table } from "@shared/index";
import React from "react";

export const Client: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Client Master",
      btnTitle: "Add Client",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table>
          <MyTable />
          {/* <TabulatorTable/> */}
        </Table>
      </BorderLayout>
    </>
  );
};

// import './index.css'

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

import { makeData, Person } from "./makeData";

function MyTable() {
  const rerender = React.useReducer(() => ({}), {})[1];

  const columns: ColumnDef<Person>[] = [
    {
      accessorKey: "firstName",
      cell: (info) => info.getValue(),
      header: () => "First Name",
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.lastName,
      id: "lastName",
      cell: (info) => info.getValue(),
      header: () => <>Last Name</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.age,
      id: "age",
      cell: (info) => info.getValue(),
      header: () => <>Age</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.progress,
      id: "progress",
      cell: (info) => info.getValue(),
      header: () => <>Progress</>,
      footer: (props) => props.column.id,
    },
    {
      accessorFn: (row) => row.status,
      id: "status",
      cell: (info) => info.getValue(),
      header: () => <>Status</>,
      footer: (props) => props.column.id,
    },
    // {
    //   header: "Info",
    //   footer: (props) => props.column.id,
    //   columns: [
    //     {
    //       accessorKey: "age",
    //       header: () => "Age",
    //       footer: (props) => props.column.id,
    //     },
    //     {
    //       header: "More Info",
    //       columns: [
    //         {
    //           accessorKey: "visits",
    //           header: () => <span>Visits</span>,
    //           footer: (props) => props.column.id,
    //         },
    //         {
    //           accessorKey: "status",
    //           header: "Status",
    //           footer: (props) => props.column.id,
    //         },
    //         {
    //           accessorKey: "progress",
    //           header: "Profile Progress",
    //           footer: (props) => props.column.id,
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  const [data, setData] = React.useState(() => makeData(100000));
  const refreshData = () => setData(() => makeData(100000));

  return (
    <>
      <DataTable
        {...{
          data,
          columns,
        }}
      />
      <hr />
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <div>
        <button onClick={() => refreshData()}>Refresh Data</button>
      </div>
    </>
  );
}

function DataTable({
  data,
  columns,
}: {
  data: Person[];
  columns: ColumnDef<Person>[];
}) {
  const [globalFilter, setGlobalFilter] = React.useState("");

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
    <div className="p-2">
      <div>
        {/* <DebouncedInput
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
        /> */}
      </div>
      <div className="h-2" />
      <div className="table-responsive">
        <div
          id="file_export_wrapper"
          className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
        >
          <div className="dt-buttons">
            {" "}
            <button
              className="dt-button buttons-copy buttons-html5 btn btn-danger btn-sm mr-1"
              aria-controls="file_export"
              type="button"
            >
              <span>Copy</span>
            </button>{" "}
            <button
              className="dt-button buttons-csv buttons-html5 btn btn-danger btn-sm mr-1"
              aria-controls="file_export"
              type="button"
            >
              <span>CSV</span>
            </button>{" "}
            <button
              className="dt-button buttons-excel buttons-html5 btn btn-danger btn-sm mr-1"
              aria-controls="file_export"
              type="button"
            >
              <span>Excel</span>
            </button>{" "}
            <button
              className="dt-button buttons-pdf buttons-html5 btn btn-danger btn-sm mr-1"
              aria-controls="file_export"
              type="button"
            >
              <span>PDF</span>
            </button>{" "}
            <button
              className="dt-button buttons-print btn btn-danger btn-sm mr-1"
              aria-controls="file_export"
              type="button"
            >
              <span>Print</span>
            </button>{" "}
          </div>
          <div id="file_export_filter" className="dataTables_filter">
            <label>
              Search:
              <DebouncedInput
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
                className="form-control form-control-sm"
                placeholder="Search all columns..."
              />
            </label>
          </div>
          <table
            id="company-master-grid-data"
            border={0}
            className="table table-striped table-bordered display dataTable no-footer"
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
          </table>
        </div>
      </div>

      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre>
    </div>
  );
}
function Filter({
  column,
  table,
}: {
  column: Column<any, any>;
  table: ReactTable<any>;
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded"
    />
  );
}

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

// ------------
import "./style.css";
import { ReactTabulator, ColumnDefinition } from "react-tabulator";

const columns: ColumnDefinition[] = [
  { title: "Name", field: "name", width: 150 },
  { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
  { title: "Favourite Color", field: "col" },
  { title: "Date Of Birth", field: "dob", hozAlign: "center" },
  { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
  {
    title: "Passed?",
    field: "passed",
    hozAlign: "center",
    formatter: "tickCross",
  },
];

var data = [
  { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
  { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  {
    id: 3,
    name: "Christine Lobowski",
    age: "42",
    col: "green",
    dob: "22/05/1982",
  },
  {
    id: 4,
    name: "Brendon Philips",
    age: "125",
    col: "orange",
    dob: "01/08/1980",
  },
  {
    id: 5,
    name: "Margret Marmajuke",
    age: "16",
    col: "yellow",
    dob: "31/01/1999",
  },
];

const TabulatorTable = () => {
  return <ReactTabulator data={data} columns={columns} layout={"fitData"} />;
};
