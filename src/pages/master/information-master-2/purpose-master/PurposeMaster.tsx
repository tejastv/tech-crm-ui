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
      buttons: [
        {
          btnTitle: "Add Purpose",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
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
      accessorFn: (row) => row.purpose,
      id: "purpose",
      cell: (info) => info.getValue(),
      header: () => <>Type Name</>,
    },
  ];

  const { data: purposeMasterData, isFetching } = getPurposeMaster();
  const { mutateAsync: deletePurposeMaster } = deletePurposeMasterMutation();

  const deletePurposeMasterClick = async (
    purposeMasterData: PurposeMasterType
  ) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deletePurposeMaster(purposeMasterData.purposeId.toString());
    }
  };

  const editPurposeMasterClick = (purposeMasterData: PurposeMasterType) => {
    navigate(
      COMMON_ROUTES.EDIT.replace(":id", purposeMasterData.purposeId.toString())
    );
  };

  const tableConfig: TableType<PurposeMasterType> = {
    config: {
      tableName: "Purpose",
      columns: columns,
      tableData: purposeMasterData || [],
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
      onDeleteClick: deletePurposeMasterClick,
      onEditClick: editPurposeMasterClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config}>{isFetching && <Loader />}</Table>
      </BorderLayout>
    </>
  );
};
