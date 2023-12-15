import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { SiteStatusType, useSiteStatusApiCallHook } from "@master/index";
import { useNavigate } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

export const SiteStatus: React.FC = () => {
  const config = {
    breadcrumbConfig: {
      pageHeading: "Site Status",
      buttons: [
        {
          btnTitle: "Add Site Status",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
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
      accessorFn: (row) => row.siteStatus,
      id: "siteStatus",
      cell: (info) => info.getValue(),
      header: () => <>Site Status</>,
    },
  ];

  const { data: siteStatusData, isFetching } = getSiteStatus();
  const { mutateAsync: deleteSiteStatus } = deleteSiteStatusMutation();

  const deleteSiteStatusClick = async (siteStatusData: SiteStatusType) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteSiteStatus(siteStatusData.id.toString());
    }
  };

  const editSiteStatusClick = (siteStatusData: SiteStatusType) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", siteStatusData.id.toString()), {
      state: null
    });
  };

  const tableConfig: TableType<SiteStatusType> = {
    config: {
      tableName: "Site Status",
      columns: columns,
      tableData: siteStatusData || [],
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
      onDeleteClick: deleteSiteStatusClick,
      onEditClick: editSiteStatusClick,
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
