import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import {
  AddUpdateSupplierMasterType,
  SupplierMasterType,
  useSupplierMasterApiCallHook,
} from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const Supplier: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Supplier Master",
      buttons: [
        {
          btnTitle: "Add Supplier",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getSupplierMaster, deleteSupplierMasterMutation } =
    useSupplierMasterApiCallHook();
  const navigate = useNavigate();
  const columns: ColumnDef<AddUpdateSupplierMasterType>[] = [
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
      accessorFn: (row) => row.supplierName,
      id: "supplierName",
      cell: (info) => info.getValue(),
      header: () => <>Supplier Name</>,
    },
    {
      accessorFn: (row) => row.phone,
      id: "phone",
      cell: (info) => info.getValue(),
      header: () => <>Phone</>,
    },
    {
      accessorFn: (row) => row.email,
      id: "email",
      cell: (info) => info.getValue(),
      header: () => <>Email</>,
    },
    {
      accessorFn: (row) => row.website,
      id: "website",
      cell: (info) => info.getValue(),
      header: () => <>Website</>,
    },
    {
      accessorFn: (row) => row.contactPerson,
      id: "contactPerson",
      cell: (info) => info.getValue(),
      header: () => <>Contact Person</>,
    },
    {
      accessorFn: (row) => row.designation,
      id: "designation",
      cell: (info) => info.getValue(),
      header: () => <>Designation</>,
    },
    {
      accessorFn: (row) => row.countryID,
      id: "countryID",
      cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
    {
      accessorFn: (row) => row.cityID,
      id: "cityID",
      cell: (info) => info.getValue(),
      header: () => <>City</>,
    },
    {
      accessorFn: (row) => row.stateID,
      id: "stateID",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
    },
    {
      accessorFn: (row) => row.countryID,
      id: "countryID",
      cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
  ];

  const { data: supplierMasterData, isLoading } = getSupplierMaster();
  const { mutateAsync: deleteSupplierMaster } = deleteSupplierMasterMutation();

  const deleteSupplierMasterClick = async (supplierMasterData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteSupplierMaster(supplierMasterData.supplierId);
    }
  };

  const editSupplierMasterClick = (supplierMasterData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", supplierMasterData.supplierId));
  };

  const tableConfig: TableType<SupplierMasterType> = {
    config: {
      tableName: "Supplier Master",
      columns: columns,
      tableData: supplierMasterData ? supplierMasterData : [],
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
      onDeleteClick: deleteSupplierMasterClick,
      onEditClick: editSupplierMasterClick,
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
