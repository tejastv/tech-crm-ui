import React from "react";

import { BorderLayout, PageBreadcrumb } from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { ExecutiveType, useExecutiveApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const Executive: React.FC = () => {
  const { getExecutive, deleteExecutiveMutation } = useExecutiveApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Sales Executive",
      btnTitle: "Add Sales Executive",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<ExecutiveType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.executive,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>City Name</>,
    },
    {
      accessorFn: (row) => row.email,
      id: "oscopies",
      cell: (info) => info.getValue(),
      header: () => <>OSCopies</>,
    },
    {
      accessorFn: (row) => row.cityId,
      id: "oscopies",
      cell: (info) => info.getValue(),
      header: () => <>OSCopies</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const { data: cityData, isLoading } = getExecutive();
  const { mutateAsync: deleteCity } = deleteExecutiveMutation();

  const deleteCityClick = async (cityData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteCity(cityData.id);
    }
  };

  const editCityClick = (cityData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", cityData.id));
  };

  const tableConfig: TableType<ExecutiveType> = {
    config: {
      columns: columns,
      tableData: cityData ? cityData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: true,
      onDeleteClick: deleteCityClick,
      onEditClick: editCityClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        {/* <Table></Table> */}
      </BorderLayout>
    </>
  );
};
