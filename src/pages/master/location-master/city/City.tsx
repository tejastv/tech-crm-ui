import React from "react";
import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { ColumnDef } from "@tanstack/react-table";
import { CityType, useCityApiCallHook } from "@pages/master";
import { useNavigate } from "react-router-dom";

export const City: React.FC = () => {
  const { getCity, deleteCityMutation } = useCityApiCallHook();
  const navigate = useNavigate();

  const config = {
    breadcrumbConfig: {
      pageHeading: "City",
      buttons: [
        {
          btnTitle: "Add City",
          btnRoute: COMMON_ROUTES.ADD,
        },
      ],
    },
    borderLayoutConfig: {
      heading: "List",
    },
  };

  const columns: ColumnDef<CityType>[] = [
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
      accessorFn: (row) => row.cityName,
      id: "cityName",
      cell: (info) => info.getValue(),
      header: () => <>City Name</>,
    },
    {
      accessorFn: (row) => row.stateName,
      id: "stateName",
      cell: (info) => info.getValue(),
      header: () => <>State Name</>,
    },
    {
      accessorFn: (row) => row.oscopies,
      id: "oscopies",
      cell: (info) => info.getValue(),
      header: () => <>OSCopies</>,
    },
  ];

  const { data: cityData, isLoading } = getCity();
  const { mutateAsync: deleteCity } = deleteCityMutation();

  const deleteCityClick = async (cityData: any) => {
    var confirmation = confirm("Are you sure to delete it?");
    if (confirmation) {
      await deleteCity(cityData.id);
    }
  };

  const editCityClick = (cityData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", cityData.cityId));
  };

  const tableConfig: TableType<CityType> = {
    config: {
      tableName: "City",
      columns: columns,
      tableData: cityData || [],
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
      onDeleteClick: deleteCityClick,
      onEditClick: editCityClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        {!isLoading ? <Table config={tableConfig.config}/> :  <Loader />}
      </BorderLayout>
    </>
  );
};
