import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { CallMasterType, useCallTypeApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const CallType: React.FC = () => {
  const { getCallType, deleteCallTypeMutation } = useCallTypeApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Call Type",
      buttons: [
        {
          btnTitle: "Add Call Type",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CallMasterType>[] = [
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
      accessorFn: (row) => row.typeName,
      id: "typeName",
      cell: (info) => info.getValue(),
      header: () => <>Type Name</>,
    },
  ];

  const { data: callTypeData, isFetching } = getCallType();
  const { mutateAsync: deleteCallType } = deleteCallTypeMutation();

  const deleteCallTypeClick = async (callTypeData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteCallType(callTypeData.typeId);
    }
  };

  const editCallTypeClick = (callTypeData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", callTypeData.typeId));
  };

  const tableConfig: TableType<CallMasterType> = {
    config: {
      tableName: "Call Type",
      columns: columns,
      tableData: callTypeData || [],
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
      onDeleteClick: deleteCallTypeClick,
      onEditClick: editCallTypeClick,
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
