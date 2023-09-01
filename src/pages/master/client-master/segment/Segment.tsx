import React from "react";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "constants";
import { SegmentType, useSegmentApiCallHook } from "@master/index";
import { ColumnDef } from "@tanstack/react-table";

export const Segment: React.FC = () => {
  const { getSegment } = useSegmentApiCallHook();

  const config = {
    breadcrumbConfig: {
      pageHeading: "Segment ",
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

  const { data: segmentData, isLoading } = getSegment();

  const tableConfig: TableType<SegmentType> = {
    config: {
      columns: columns,
      tableData: segmentData ? segmentData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: true,
      // onDeleteClick: deleteCityClick,
      // onEditClick: editCityClick,
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
