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
import { FinYearType, useFinYearApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";

export const FinYear: React.FC = () => {
  const { getFinYear, deleteFinYearMutation } = useFinYearApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Fin. Year",
      buttons: [
        {
          btnTitle: "Add Fin. Year",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<FinYearType>[] = [
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
      accessorFn: (row) => row.finYear,
      id: "finYear",
      cell: (info) => info.getValue(),
      header: () => <>Fin Year</>,
    },
    {
      accessorFn: (row) => row.serviceTax,
      id: "serviceTax",
      cell: (info) => info.getValue(),
      header: () => <>Service Tax</>,
    },
    {
      accessorFn: (row) => row.stax,
      id: "stax",
      cell: (info) => info.getValue(),
      header: () => <>S Tax</>,
    },
    {
      accessorFn: (row) => row.eduCess,
      id: "eduCess",
      cell: (info) => info.getValue(),
      header: () => <>Edu Cess</>,
    },
    {
      accessorFn: (row) => row.cgstper,
      id: "cgstper",
      cell: (info) => info.getValue(),
      header: () => <>CGST per</>,
    },
    {
      accessorFn: (row) => row.sgstper,
      id: "sgstper",
      cell: (info) => info.getValue(),
      header: () => <>SGST per</>,
    },
    {
      accessorFn: (row) => row.igstper,
      id: "igstper",
      cell: (info) => info.getValue(),
      header: () => <>IGST per</>,
    },
  ];

  const { data: finYearData, isLoading } = getFinYear();
  const { mutateAsync: deleteFinYear } = deleteFinYearMutation();

  const deleteFinYearClick = async (finYearData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteFinYear(finYearData.finYear);
    }
  };

  const editFinYearClick = (finYearData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", finYearData.finYear));
  };

  const tableConfig: TableType<FinYearType> = {
    config: {
      tableName: "Fin. Year",
      columns: columns,
      tableData: finYearData ? finYearData : [],
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
      onDeleteClick: deleteFinYearClick,
      onEditClick: editFinYearClick,
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
