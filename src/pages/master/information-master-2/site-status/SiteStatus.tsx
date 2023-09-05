import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { SiteStatusType, useSiteStatusApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const SiteStatus: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Site Status",
      btnTitle: "Add Site Status",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const { getSiteStatus, deleteSiteStatusMutation } =
    useSiteStatusApiCallHook();
  const navigate = useNavigate();
  const columns: ColumnDef<SiteStatusType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.siteStatus,
      id: "siteStatus",
      cell: (info) => info.getValue(),
      header: () => <>Site Status</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const { data: siteStatusData, isLoading } = getSiteStatus();
  const { mutateAsync: deleteSiteStatus } = deleteSiteStatusMutation();

  const deleteSiteStatusClick = async (siteStatusData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteSiteStatus(siteStatusData.id);
    }
  };

  const editSiteStatusClick = (siteStatusData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", siteStatusData.id));
  };

  const tableConfig: TableType<SiteStatusType> = {
    config: {
      columns: columns,
      tableData: siteStatusData ? siteStatusData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: true,
      onDeleteClick: deleteSiteStatusClick,
      onEditClick: editSiteStatusClick,
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
