import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { IndustryType, useIndustryApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const Industry: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Industry",
      buttons: [
        {
          btnTitle: "Add Industry",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getIndustry, deleteIndustryMutation } = useIndustryApiCallHook();
  const navigate = useNavigate();

  const columns: ColumnDef<IndustryType>[] = [
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
      accessorFn: (row) => row.industryName,
      id: "industryName",
      cell: (info) => info.getValue(),
      header: () => <>Industry Name</>,
    },
  ];

  const { data: industryData, isFetching } = getIndustry();
  const { mutateAsync: deleteIndustry } = deleteIndustryMutation();

  const deleteIndustryClick = async (industryData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteIndustry(industryData.industryId);
    }
  };

  const editIndustryClick = (industryData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", industryData.industryId), {
      state: null
    });
  };

  const tableConfig: TableType<IndustryType> = {
    config: {
      tableName: "Industry",
      columns: columns,
      tableData: industryData || [],
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
      onDeleteClick: deleteIndustryClick,
      onEditClick: editIndustryClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
      {!isFetching ? <Table config={tableConfig.config}/> :  <Loader />}
      </BorderLayout>
    </>
  );
};
