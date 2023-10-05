// import React from "react";
// import { ColumnDef } from "@tanstack/react-table";

// import {
//   BorderLayout,
//   Loader,
//   PageBreadcrumb,
//   Table,
//   TableType,
// } from "@shared/index";
// import { COMMON_ROUTES } from "@constants/index";
// import { AllEnquiriesType } from "@pages/transaction-search";

// // import { StateType, useStateApiCallHook } from "@pages/master";
// import { useNavigate } from "react-router-dom";

// export const Enquiries: React.FC = () => {
// //   const { getState, deleteContinentMutation } = useStateApiCallHook();
// //   const { data: stateData, isLoading } = getState();
//   const navigate = useNavigate();

//   const config = {
//     breadcrumbConfig: {
//       pageHeading: "Enquiry Details",
//       btnTitle: "Add Enquiry Details",
//       btnTitle2: "Enquiry Search",
//       btnRoute: COMMON_ROUTES.ADD,
//     },
//     borderLayoutConfig: {
//       heading: "List",
//     },
//   };

//   const columns: ColumnDef<AllEnquiriesType>[] = [
//     {
//       id: "srNo",
//       cell: (info) => info.getValue(),
//       header: () => <>Sr no</>,
//     },
//     {
//     //   accessorFn: (row) => row.state,
//       id: "year",
//       cell: (info) => info.getValue(),
//       header: () => <>Year</>,
//     },
//     {
//     //   accessorFn: (row) => row.stateCodeN,
//       id: "refno",
//       cell: (info) => info.getValue(),
//       header: () => <>Ref.No</>,
//     },
//     {
//     //   accessorFn: (row) => row.stateCodeA,
//       id: "enqdate",
//       cell: (info) => info.getValue(),
//       header: () => <>Enq.Date</>,
//     },
//     {
//     //   accessorFn: (row) => row.stateCodeA,
//       id: "reportdate",
//       cell: (info) => info.getValue(),
//       header: () => <>Report Date</>,
//     },
//     {
//     //   accessorFn: (row) => row.stateCodeA,
//       id: "company",
//       cell: (info) => info.getValue(),
//       header: () => <>Company</>,
//     },
//     {
//     //   accessorFn: (row) => row.stateCodeA,
//       id: "givenaddress",
//       cell: (info) => info.getValue(),
//       header: () => <>Given Address</>,
//     },
    
//   ];



//   const tableConfig: TableType<AllEnquiriesType> = {
//     config: {
//       tableName: "State",
//       columns: columns,
//     //   tableData: stateData ? stateData : [],
//       copyBtn: true,
//       csvBtn: true,
//       excelBtn: true,
//       pdfBtn: true,
//       printBtn: true,
//       globalSearchBox: true,
//       pagination: {
//         pageSize: 10,
//         nextPreviousBtnShow: true,
//         tableMetaDataShow: true,
//       },
//     },
//   };

//   return (
//     <>
//       <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
//       <BorderLayout heading={config.borderLayoutConfig.heading}>
//         <Table config={tableConfig.config}>
//           {/* {isLoading ? <Loader /> : null} */}
//           {null}
//         </Table>
//       </BorderLayout>
//     </>
//   );
// };



import React from "react";
import { ColumnDef } from "@tanstack/react-table";

import {
  BorderLayout,
  Loader,
  PageBreadcrumb,
  Table,
  TableType,
} from "@shared/index";
import { COMMON_ROUTES } from "@constants/index";
import { StateType, useStateApiCallHook } from "@pages/master";
import { useNavigate } from "react-router-dom";

export const Enquiries: React.FC = () => {
  const { getState, deleteContinentMutation } = useStateApiCallHook();
  const { mutateAsync: deleteState } = deleteContinentMutation();
  const { data: stateData, isLoading } = getState();
  const navigate = useNavigate();

  const config = {
        breadcrumbConfig: {
          pageHeading: "Enquiry Details",
          btnTitle: "Add Enquiry Details",
          btnTitle2: "Enquiry Search",
          btnRoute: COMMON_ROUTES.ADD,
        
        },
        btnConfig:{
          pageHeading:"",
          btnTitle: "Enquiry Search",
          btnRoute:COMMON_ROUTES.LIST
        },
        borderLayoutConfig: {
          heading: "List",
        },
      };

  const columns: ColumnDef<StateType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.state,
      id: "state",
      cell: (info) => info.getValue(),
      header: () => <>Year</>,
    },
    {
      accessorFn: (row) => row.stateCodeN,
      id: "stateCodeN",
      cell: (info) => info.getValue(),
      header: () => <>Ref.No</>,
    },
    {
      accessorFn: (row) => row.stateCodeA,
      id: "stateCodeA",
      cell: (info) => info.getValue(),
      header: () => <>Enq.Date</>,
    },
    {
      accessorFn: (row) => row.stateCodeA,
      id: "stateCodeA",
      cell: (info) => info.getValue(),
      header: () => <>Report Date</>,
    },
    {
      accessorFn: (row) => row.stateCodeA,
      id: "stateCodeA",
      cell: (info) => info.getValue(),
      header: () => <>Company</>,
    },
    {
      accessorFn: (row) => row.stateCodeA,
      id: "stateCodeA",
      cell: (info) => info.getValue(),
      header: () => <>Given Address</>,
    },
    
  ];

  const deleteStateClick = (stateData: any) => {
    var conformation = confirm("Are you sure to delete it?");
    if (conformation) {
      deleteState(stateData.stateId);
    }
  };

  const editStateClick = (continentData: any) => {
    navigate(COMMON_ROUTES.EDIT.replace(":id", continentData.stateId));
  };

  const tableConfig: TableType<StateType> = {
    config: {
      tableName: "State",
      columns: columns,
      tableData: stateData ? stateData : [],
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
      onDeleteClick: deleteStateClick,
      onEditClick: editStateClick,
    },
  };

  return (
    <>
      <PageBreadcrumb config={config.breadcrumbConfig}></PageBreadcrumb>
      <PageBreadcrumb config={config.btnConfig}></PageBreadcrumb>
      <BorderLayout heading={config.borderLayoutConfig.heading}>
        <Table config={tableConfig.config}>
          {isLoading ? <Loader /> : null}
        </Table>
      </BorderLayout>
    </>
  );
};

