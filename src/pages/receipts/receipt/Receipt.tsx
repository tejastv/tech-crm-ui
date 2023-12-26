import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

import {
  Card,
  BorderLayout,
  Button,
  Table,
  TableType,
  NewSelect,
  NewInput,
  TableCellFormFields,
} from "@shared/index";

import {
  ReceiptType,
  receiptFormFields,
  useReceiptApiCallHook,
} from "@receipts/index";
import { ColumnDef } from "@tanstack/react-table";
import {
  useBankMasterDepositApiCallHook,
  useBankMasterDrawnApiCallHook,
  usePaymentModeApiCallHook,
} from "@pages/master";
import { useEffect, useState } from "react";
import { useCalculateReceiptAmounts } from "./useCalculateReceiptAmounts";

const cardConfig = {
  formLayoutConfig: {
    mainHeading: "Payment Receipt",
    heading: "Entry",
  },
  formListConfig: {
    heading: "List",
  },
  borderLayoutConfig: {
    heading: "Action Buttons",
  },
};

export const Receipt: React.FC = () => {
  const { getBankMasterDrawnOn } = useBankMasterDrawnApiCallHook();
  const { getBankMasterDeposit } = useBankMasterDepositApiCallHook();
  const { getPaymentMode } = usePaymentModeApiCallHook();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>();
  const { getReceiptData, addUpdateDeleteReceiptMutation } =
    useReceiptApiCallHook();
  const { mutateAsync: addUpdateReceipt } = addUpdateDeleteReceiptMutation();

  const [startYear, setStartYear] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [tableData, setTableData] = useState<ReceiptType[]>(
    [] as ReceiptType[]
  );

  const { data: receiptData } = getReceiptData(
    startYear,
    invoiceNo,
    startYear !== "" && invoiceNo !== ""
  );

  const { data: bankMasterDrawnData } = getBankMasterDrawnOn();
  const { data: bankMasterDepositData } = getBankMasterDeposit();
  const { data: paymentModeData } = getPaymentMode();

  const receiptSummary = useCalculateReceiptAmounts(tableData);
  useEffect(() => {
    if (startYear !== "" && invoiceNo !== "") {
      setValue(
        receiptFormFields.amountRecd.config.name,
        receiptSummary.amountRecd
      );
      setValue(receiptFormFields.tdsDed.config.name, receiptSummary.tdsDed);
      setValue(receiptFormFields.expense.config.name, receiptSummary.expense);
      setValue(
        receiptFormFields.otherCharges.config.name,
        receiptSummary.otherCharges
      );
      setValue(receiptFormFields.total.config.name, receiptSummary.total);
      setValue(
        receiptFormFields.due.config.name,
        receiptData?.billAmount - receiptSummary.total
      );
    }
  }, [receiptSummary]);

  const columns = useMemo<ColumnDef<ReceiptType>[]>(
    () => [
      {
        id: "remove",
        header: () => <i className="fa fa-trash-alt fa-1x" />,
      },
      {
        id: "srNo",
        cell: (info) => info.getValue(),
        header: () => <>SRNO</>,
      },
      {
        accessorFn: (row) => row.recDate,
        id: "recDate",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellDatePicker
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Recd. Date</>,
      },
      {
        accessorFn: (row) => row.paymentModeId,
        id: "paymentModeId",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellSelect
              options={{
                array: paymentModeData || [],
                label: "paymentMode",
                value: "paymentModeId",
              }}
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Payment Mode</>,
      },
      {
        accessorFn: (row) => row.chqNo,
        id: "chqNo",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Cheque No</>,
      },
      {
        accessorFn: (row) => row.chqDate,
        id: "chqDate",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellDatePicker
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Cheque Date</>,
      },
      {
        accessorFn: (row) => row.chqAmount,
        id: "chqAmount",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Cheque Amt</>,
      },
      {
        accessorFn: (row) => row.bankId,
        id: "bankId",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellSelect
              options={{
                array: bankMasterDrawnData || [],
                label: "bankName",
                value: "bankId",
              }}
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Bank</>,
      },
      {
        accessorFn: (row) => row.depositBankId,
        id: "depositBankId",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellSelect
              options={{
                array: bankMasterDepositData || [],
                label: "bankName",
                value: "id",
              }}
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Deposit Bank</>,
      },
      {
        accessorFn: (row) => row.amount,
        id: "amount",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Amount</>,
      },
      {
        accessorFn: (row) => row.tds,
        id: "tds",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>TDS</>,
      },
      {
        accessorFn: (row) => row.expense,
        id: "expense",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Expense</>,
      },
      {
        accessorFn: (row) => row.otherCharges,
        id: "otherCharges",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Dis./ Chg.</>,
      },
      {
        accessorFn: (row) => row.netAmount,
        id: "netAmount",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Net Amount</>,
      },
      {
        accessorFn: (row) => row.remarks,
        id: "remarks",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Remarks</>,
      },
      {
        accessorFn: (row) => row.advTransId,
        id: "advTransId",
        cell: ({ getValue, row, column: { id } }) => {
          let value: any = getValue();
          return (
            <TableCellFormFields.CellInput
              value={value}
              onBlur={(newValue) => cellMapDataHandler(row, id, newValue)}
            />
          );
        },
        header: () => <>Adv. Transaction</>,
      },
    ],
    [paymentModeData, bankMasterDepositData, bankMasterDrawnData]
  );

  useEffect(() => {
    if (startYear !== "" && invoiceNo !== "") {
      setValue(
        receiptFormFields.client.config.name,
        receiptData?.client?.clientName
      );
      setValue(
        receiptFormFields.clientAddress.config.name,
        receiptData?.client?.address
      );
      setValue(
        receiptFormFields.invoiceDate.config.name,
        receiptData?.invoiceDate
      );
      setValue(
        receiptFormFields.currency.config.name,
        receiptData?.currencyName
      );
      setValue(receiptFormFields.grsAmount.config.name, receiptData?.subTotal);
      setValue(
        receiptFormFields.cgst.config.name,
        receiptData?.cgstAmount || 0
      );
      setValue(
        receiptFormFields.sgst.config.name,
        receiptData?.sgstAmount || 0
      );
      setValue(
        receiptFormFields.igst.config.name,
        receiptData?.igstAmount || 0
      );
      setValue(
        receiptFormFields.invAmount.config.name,
        receiptData?.billAmount
      );
      const localTableData = [...receiptData?.receipts];
      setTableData(localTableData);
    }
  }, [receiptData]);

  const cellMapDataHandler = (rowData: any, id: any, value: any) => {
    if (value == "" || value == null) return;
    setTableData((prevData: Array<any>) => {
      const updatedData = [...prevData];
      updatedData[rowData.index][id] = value;
      return updatedData;
    });
  };

  const onSubmit = handleSubmit((receiptData): void => {
    setStartYear(receiptData.finYearID.value);
    setInvoiceNo(receiptData.invoiceNoId);
    setTableData([]);
  });

  const handleAddRow = () => {
    setTableData((prevData) => [
      ...prevData,
      {
        advTransId: "",
        amount: "",
        bankId: "",
        chqAmount: "",
        chqDate: new Date().toISOString(),
        chqNo: "",
        depositBankId: "",
        otherCharges: "",
        expense: "",
        netAmount: "",
        paymentModeId: "",
        recDate: new Date().toISOString(),
        remarks: "",
        tds: "",
        transactionId: +Math.random().toFixed(2),
      },
    ]);
  };

  const handleRemoveRow = (tableDataObj: ReceiptType) => {
    const updatedData = tableData.filter(
      (data: ReceiptType) => tableDataObj.transactionId !== data.transactionId
    );
    setTableData(updatedData);
  };

  const tableConfig: TableType<ReceiptType> = {
    config: {
      tableName: "Receipt Master",
      columns: columns,
      tableData: tableData || [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: false,
      sorting: false,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: false,
        tableMetaDataShow: false,
      },
      onRemoveRow: handleRemoveRow,
    },
  };

  const handleSaveEditClick = () => {
    console.log(tableData);
    addUpdateReceipt({
      clientId: receiptData?.client?.clientId,
      fYear: receiptData?.finYear,
      invoiceNo: receiptData?.invoiceNo,
      receipts: tableData,
    });
  };

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form noValidate autoComplete="off" className="p-t-20">
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="row">
                <div className="col-md-5 col-xs-12">
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={receiptFormFields.finYear}
                  />
                </div>
                <div className="col-md-5 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={receiptFormFields.invoiceNo}
                  />
                </div>
                <div className="col-md-2 col-xs-12">
                  <Button
                    type={"button"}
                    className={"btn btn-danger btn-sm"}
                    onClick={onSubmit}
                  >
                    View
                  </Button>
                </div>
              </div>
              <NewInput
                errors={errors}
                register={register}
                config={receiptFormFields.client}
              />
              <NewInput
                errors={errors}
                register={register}
                config={receiptFormFields.clientAddress}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={receiptFormFields.invoiceDate}
              />
              <NewInput
                errors={errors}
                register={register}
                config={receiptFormFields.currency}
              />
              <NewInput
                errors={errors}
                register={register}
                config={receiptFormFields.grsAmount}
              />
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={receiptFormFields.cgst}
                  />
                </div>
                <div className="col-md-4 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={receiptFormFields.sgst}
                  />
                </div>
                <div className="col-md-4 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={receiptFormFields.igst}
                  />
                </div>
              </div>
              <NewInput
                errors={errors}
                register={register}
                config={receiptFormFields.invAmount}
              />
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.formListConfig.heading}>
          {tableData.length > 0 && (
            <Button
              className="btn addMoreBtn"
              onClick={handleAddRow}
              type="button"
            >
              <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
              <span>Click here to add more row</span>
            </Button>
          )}
          <Table config={tableConfig.config} />
        </BorderLayout>
        <div className="row justify-content-center my-4">
          <div className="col-10">
            <div className="row">
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={receiptFormFields.amountRecd}
                  isVertical
                />
              </div>
              <div className="col">
                <NewInput
                  errors={errors}
                  register={register}
                  config={receiptFormFields.tdsDed}
                  isVertical
                />
              </div>
              <div className="col">
                <NewInput
                  errors={errors}
                  register={register}
                  config={receiptFormFields.expense}
                  isVertical
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={receiptFormFields.otherCharges}
                  isVertical
                />
              </div>
              <div className="col-3">
                <NewInput
                  errors={errors}
                  register={register}
                  config={receiptFormFields.total}
                  isVertical
                />
              </div>
              <div className="col">
                <NewInput
                  errors={errors}
                  register={register}
                  config={receiptFormFields.due}
                  isVertical
                />
              </div>
            </div>
          </div>
        </div>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          <div className="text-center">
            <Button
              type="button"
              className="btn btn-danger  waves-effect waves-light mr-2"
              onClick={handleSaveEditClick}
            >
              <i className="far fa-save pr-1"></i> Save / Edit
            </Button>
            <Button
              type="button"
              className="btn btn-danger  waves-effect waves-light mr-2"
              // onClick={routeHandler}
            >
              <i className="far fa-save pr-1"></i> Delete
            </Button>
            <Button
              type="button"
              className="btn btn-secondary  waves-effect waves-light"
              // onClick={routeHandler}
            >
              <i className="fa fa-close pr-1"></i> Cancel
            </Button>
          </div>
        </BorderLayout>
      </form>
      {/* <Tableex /> */}
    </Card>
  );
};

// import React from "react";

// interface TableRow {
//   id: number;
//   amount: number;
//   discount: number;
// }

// const Tableex: React.FC = () => {
//   const [rows, setRows] = useState<TableRow[]>([
//     { id: 1, amount: 0, discount: 0 },
//   ]);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [totalDiscount, setTotalDiscount] = useState<number>(0);

//   const handleAmountChange = (id: number, amount: number) => {
//     const updatedRows = rows.map((row) =>
//       row.id === id ? { ...row, amount } : row
//     );
//     setRows(updatedRows);
//     recalculateTotals(updatedRows);
//   };

//   const handleDiscountChange = (id: number, discount: number) => {
//     const updatedRows = rows.map((row) =>
//       row.id === id ? { ...row, discount } : row
//     );
//     setRows(updatedRows);
//     recalculateTotals(updatedRows);
//   };

//   const recalculateTotals = (updatedRows: TableRow[]) => {
//     const newTotalAmount = updatedRows.reduce(
//       (acc, row) => acc + row.amount,
//       0
//     );
//     const newTotalDiscount = updatedRows.reduce(
//       (acc, row) => acc + row.discount,
//       0
//     );
//     setTotalAmount(newTotalAmount);
//     setTotalDiscount(newTotalDiscount);
//   };

//   const handleAddRow = () => {
//     const newRow: TableRow = { id: Date.now(), amount: 0, discount: 0 };
//     setRows([...rows, newRow]);
//   };

//   const handleRemoveRow = (id: number) => {
//     const updatedRows = rows.filter((row) => row.id !== id);
//     setRows(updatedRows);
//     recalculateTotals(updatedRows);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Amount</th>
//             <th>Discount</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row) => (
//             <tr key={row.id}>
//               <td>
//                 <input
//                   type="number"
//                   value={row.amount}
//                   onChange={(e) => handleAmountChange(row.id, +e.target.value)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="number"
//                   value={row.discount}
//                   onChange={(e) =>
//                     handleDiscountChange(row.id, +e.target.value)
//                   }
//                 />
//               </td>
//               <td>
//                 <button onClick={() => handleRemoveRow(row.id)}>Remove</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div>
//         <p>Total Amount: {totalAmount}</p>
//         <p>Total Discount: {totalDiscount}</p>
//       </div>
//       <button onClick={handleAddRow}>Add New Row</button>
//     </div>
//   );
// };

// export default Tableex;
