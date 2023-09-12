import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { useNavigate } from "react-router-dom";
import { PurposeMasterType, usePurposeMasterApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";

export const PurposeMaster: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Purpose",
      btnTitle: "Add Purpose",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getPurposeMaster, deletePurposeMasterMutation } =
    usePurposeMasterApiCallHook();
  const navigate = useNavigate();
  const columns: ColumnDef<PurposeMasterType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.purpose,
      id: "purpose",
      cell: (info) => info.getValue(),
      header: () => <>Type Name</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const { data: purposeMasterData, isLoading } = getPurposeMaster();
  const { mutateAsync: deletePurposeMaster } = deletePurposeMasterMutation();

  const deletePurposeMasterClick = async (purposeMasterData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deletePurposeMaster(purposeMasterData.purposeID);
    }
  };

  const editPurposeMasterClick = (purposeMasterData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", purposeMasterData.purposeID));
  };

  const tableConfig: TableType<PurposeMasterType> = {
    config: {
      columns: columns,
      tableData: purposeMasterData ? purposeMasterData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: true,
      onDeleteClick: deletePurposeMasterClick,
      onEditClick: editPurposeMasterClick,
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
