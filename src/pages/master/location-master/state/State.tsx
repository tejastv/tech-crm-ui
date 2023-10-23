import React from "react";
import { ColumnDef } from "@tanstack/react-table";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { StateType, useStateApiCallHook } from "@pages/master";
import { useNavigate } from "react-router-dom";

export const State: React.FC = () => {
  const { getState, deleteContinentMutation } = useStateApiCallHook();
  const { mutateAsync: deleteState } = deleteContinentMutation();
  const { data: stateData, isLoading } = getState();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "State",
      buttons: [
        {
          btnTitle: "Add State",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<StateType>[] = [
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.stateName,
      id: "stateName",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
    },
    {
      accessorFn: (row) => row.stateCodeN,
      id: "stateCodeN",
      cell: (info) => info.getValue(),
      header: () => <>StateCodeN</>,
    },
    {
      accessorFn: (row) => row.stateCodeA,
      id: "stateCodeA",
      cell: (info) => info.getValue(),
      header: () => <>StateCodeA</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
    },
  ];

  const deleteStateClick = (stateData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteState(stateData.stateId);
    }
  };

  const editStateClick = (continentData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", continentData.stateId));
  };

  const tableConfig: TableType<StateType> = {
    config: {
      tableName: "State",
      columns: columns,
      tableData: stateData ? stateData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
      },
      onDeleteClick: deleteStateClick,
      onEditClick: editStateClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config}>
          {isLoading ? <Loader /> : null}
        </Table>
      </BorderLayout>
    </>
  );
};
