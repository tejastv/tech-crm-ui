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
  const columns: ColumnDef<SupplierMasterType>[] = [
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
      accessorFn: (row) => row.countryName,
      id: "countryId",
      cell: (info) => info.getValue(),
      header: () => <>Country</>,
    },
    {
      accessorFn: (row) => row.cityName,
      id: "cityId",
      cell: (info) => info.getValue(),
      header: () => <>City</>,
    },
    {
      accessorFn: (row) => row.stateName,
      id: "stateId",
      cell: (info) => info.getValue(),
      header: () => <>State</>,
    }
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
    navigate(COMMON_ROUTES.EDIT.replace(":id", supplierMasterData.supplierId), {
      state: null
    });
  };

  const tableConfig: TableType<SupplierMasterType> = {
    config: {
      tableName: "Supplier Master",
      columns: columns,
      tableData: supplierMasterData || [],
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
        {!isLoading ? <Table config={tableConfig.config} /> : <Loader />}
      </BorderLayout>
    </>
  );
};
