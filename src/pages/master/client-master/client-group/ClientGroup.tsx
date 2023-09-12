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
import { ClientGroupType, useClientGroupApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";

export const GroupMaster: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Group Master",
      btnTitle: "Add Group Master",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getClientGroup, deleteClientGroupMutation } =
    useClientGroupApiCallHook();
  const navigate = useNavigate();

  const columns: ColumnDef<ClientGroupType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.groupName,
      id: "groupName",
      cell: (info) => info.getValue(),
      header: () => <>Group Name</>,
    },
    {
      accessorFn: (row) => row.showBOBDetails,
      id: "showBOBDetails",
      cell: (info) => info.getValue(),
      header: () => <>Show BOB Details</>,
    },
    {
      accessorFn: (row) => row.showUnionBankDetails,
      id: "showUnionBankDetails",
      cell: (info) => info.getValue(),
      header: () => <>Show UnionBank Details</>,
    },
    {
      accessorFn: (row) => row.showBOIDetails,
      id: "showBOIDetails",
      cell: (info) => info.getValue(),
      header: () => <>Show BOI Details</>,
    },
    {
      accessorFn: (row) => row.showSouthIndianBankDetails,
      id: "showSouthIndianBankDetails",
      cell: (info) => info.getValue(),
      header: () => <>Show SouthIndianBank Details</>,
    },
    {
      accessorFn: (row) => row.showIOBDetails,
      id: "showIOBDetails",
      cell: (info) => info.getValue(),
      header: () => <>Show IOB Details</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const { data: clientGroupData, isLoading } = getClientGroup();
  const { mutateAsync: deleteClientGroup } = deleteClientGroupMutation();

  const deleteClientGroupClick = async (clientGroupData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteClientGroup(clientGroupData.groupId);
    }
  };

  const editClientGroupClick = (clientGroupData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", clientGroupData.groupId));
  };

  const tableConfig: TableType<ClientGroupType> = {
    config: {
      columns: columns,
      tableData: clientGroupData ? clientGroupData : [],
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
      onDeleteClick: deleteClientGroupClick,
      onEditClick: editClientGroupClick,
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
