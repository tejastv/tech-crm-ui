// Client.tsx
import React from "react";
import { COMMON_ROUTES } from "@constants/route-constants";
import { BorderLayout, PageBreadcrumb, Table } from "@shared/index";
import { ColumnDef } from "@tanstack/react-table";
import { makeData, Person } from "./makeData";

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
  ];

  const [data, setData] = React.useState(() => makeData(50));
  console.log(data);
  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table data={data} columns={columns} />
      </BorderLayout>
    </>
  );
};
