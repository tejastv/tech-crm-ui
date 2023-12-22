import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { UserType, useUserApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const User: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "User Master",
      buttons: [
        {
          btnTitle: "Add User",
          btnRoute: COMMON_ROUTES.ADD + '?isAdd=true',
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getUser, deleteUserMutation } = useUserApiCallHook();
  const navigate = useNavigate();
  const columns: ColumnDef<UserType>[] = [
    {
      id: "action:rights",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.user,
      id: "user",
      cell: (info) => info.getValue(),
      header: () => <>User</>,
    },
    {
      accessorFn: (row) => row.username,
      id: "username",
      cell: (info) => info.getValue(),
      header: () => <>Login ID</>,
    },
    {
      accessorFn: (row) => row.password,
      id: "password",
      cell: (info) => info.getValue(),
      header: () => <>Password</>,
    },
    {
      accessorFn: (row) => row.userType,
      id: "usertype",
      cell: (info) => info.getValue(),
      header: () => <>Type Of User</>,
    },
  ];

  const { data: userData, isLoading } = getUser();
  const { mutateAsync: deleteUser } = deleteUserMutation();

  const deleteUserClick = async (userData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteUser(userData.id);
    }
  };

  const editUserClick = (userData: any, other: any) => {
    if (other === undefined) {
      navigate(
        {
          pathname: COMMON_ROUTES.EDIT.replace(":id", userData.id),
          search: "?isSetting=false",
        },
        { state: userData }
      );
    } else {
      navigate(
        {
          pathname: COMMON_ROUTES.EDIT.replace(":id", userData.id),
          search: "?isSetting=true",
        },
        { state: userData }
      );
    }
  };

  const tableConfig: TableType<UserType> = {
    config: {
      tableName: "User Master",
      columns: columns,
      tableData: userData || [],
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
      onDeleteClick: deleteUserClick,
      onEditClick: editUserClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        {!isLoading ? <Table config={tableConfig.config} /> : <Loader />}
      </BorderLayout>
    </>
  );
};
