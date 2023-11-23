import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { ContinentType, useContinentApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export const Continent: React.FC = () => {
  const { getContinent, deleteContinentMutation } = useContinentApiCallHook();
  const { data: continentData, isLoading } = getContinent();
  const { mutateAsync: deleteContinent } = deleteContinentMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Continent",
      buttons: [
        {
          btnTitle: "Add Continent",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<ContinentType>[] = [
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
      accessorFn: (row) => row.continent,
      id: "continent",
      cell: (info) => info.getValue(),
      header: () => <>Continent</>,
    },
  ];

  const deleteContinentClick = (continentData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteContinent(continentData.id);
    }
  };

  const editContinentClick = (continentData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", continentData.id));
  };

  const tableConfig: TableType<ContinentType> = {
    config: {
      tableName: "Continent",
      columns: columns,
      tableData: continentData || [],
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
      onDeleteClick: deleteContinentClick,
      onEditClick: editContinentClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
      {!isLoading ? <Table config={tableConfig.config}/> :  <Loader />}
      </BorderLayout>
    </>
  );
};
