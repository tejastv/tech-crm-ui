import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { SegmentType, useSegmentApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export const Segment: React.FC = () => {
  const { getSegment, deleteSegmentMutation } = useSegmentApiCallHook();
  const { data: segmentData, isLoading } = getSegment();
  const { mutateAsync: deleteSegment } = deleteSegmentMutation();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Segment",
      btnTitle: "Add Segment",
      btnRoute: COMMON_ROUTES.ADD,
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<SegmentType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.segmentName,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>Segment Name</>,
    },
    {
      id: "action",
      cell: (info) => info.getValue(),
      header: () => <>Action</>,
    },
  ];

  const deleteSegmentClick = async (segmentData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteSegment(segmentData.segmentId);
    }
  };

  const editSegmentClick = (segmentData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", segmentData.segmentId));
  };

  const tableConfig: TableType<SegmentType> = {
    config: {
      tableName: "Segment",
      columns: columns,
      tableData: segmentData || [],
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
      onDeleteClick: deleteSegmentClick,
      onEditClick: editSegmentClick,
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
