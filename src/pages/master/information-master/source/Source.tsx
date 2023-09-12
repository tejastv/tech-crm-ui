import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { SourceType, useSourceApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const Source: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Source",
      btnTitle: "Add Source",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getSource, deleteSourceMutation } = useSourceApiCallHook();
  const navigate = useNavigate();

  const columns: ColumnDef<SourceType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.source,
      id: "source",
      cell: (info) => info.getValue(),
      header: () => <>Source</>,
    },
    {
      accessorFn: (row) => row.firstLetterFile,
      id: "firstLetterFile",
      cell: (info) => info.getValue(),
      header: () => <>First Letter File</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const { data: sourceData, isLoading } = getSource();
  const { mutateAsync: deleteSource } = deleteSourceMutation();

  const deleteSourceClick = async (sourceData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteSource(sourceData.sourceID);
    }
  };

  const editSourceClick = (sourceData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", sourceData.sourceID));
  };

  const tableConfig: TableType<SourceType> = {
    config: {
      columns: columns,
      tableData: sourceData ? sourceData : [],
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
      onDeleteClick: deleteSourceClick,
      onEditClick: editSourceClick,
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
