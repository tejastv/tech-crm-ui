import { useForm } from "react-hook-form";

import {
  Card,
  BorderLayout,
  Button,
  Table,
  TableType,
  NewSelect,
  NewInput,
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

const tableData: ReceiptType[] = [
  {
    advTransId: "",
    amount: "",
    bankID: "",
    chqAmount: "",
    chqDate: "",
    chqNo: "",
    depositBankId: "",
    otherCharges: "",
    expense: "",
    netAmount: "",
    paymentModeID: "",
    recDate: "",
    remarks: "",
    tds: "",
  },
];

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
  const { getReceiptData } = useReceiptApiCallHook();

  const [startYear, setStartYear] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [tableData, setTableData] = useState<ReceiptType[]>([]);

  const { data: receiptData, isFetching } = getReceiptData(
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

  const cellMapDataHandler = (row: any, id: any, value: any) => {
    const cellMap: any = tableData[row.id];
    const localTableData = [...tableData];
    if (!cellMap) {
      // tableData[row.id] = {
      //   price: row.original.price,
      //   priceHighDel: row.original.priceHighDel,
      //   priceOnline: row.original.priceOnline,
      //   priceSuperFlash: row.original.priceSuperFlash,
      //   priceSME: row.original.priceSME,
      //   countryId: row.original.countryId,
      // };
      // tableData[row.id][id] = Number(value);
    } else {
      cellMap[id] = Number(value);
      // @ts-ignore
      localTableData[row.id][id] = Number(value);
    }
    console.log(tableData);
    setTableData(localTableData);
  };

  const columns: ColumnDef<ReceiptType>[] = [
    {
      id: "action",
      cell: (info) => info.getValue(),
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
      // cell: (info) => info.getValue(),
      cell: (info) => (
        <input
          type="date"
          value={info.row.original.recDate?.split("T")[0]}
          onChange={() => null}
        />
      ),
      header: () => <>Recd. Date</>,
    },
    {
      accessorFn: (row) => row.paymentModeID,
      id: "paymentModeID",
      cell: (info) => (
        <select defaultValue={info.row.original.paymentModeID}>
          {paymentModeData?.map((paymentMode) => (
            <option
              key={paymentMode.paymentModeId}
              value={paymentMode.paymentModeId}
            >
              {paymentMode.paymentMode}
            </option>
          ))}
        </select>
      ),
      header: () => <>Payment Mode</>,
    },
    {
      accessorFn: (row) => row.chqNo,
      id: "chqNo",
      cell: (info) => <input value={info.row.original.chqNo} />,
      header: () => <>Cheque No</>,
    },
    {
      accessorFn: (row) => row.chqDate,
      id: "chqDate",
      cell: (info) => (
        <input type="date" value={info.row.original.chqDate?.split("T")[0]} />
      ),
      header: () => <>Cheque Date</>,
    },
    {
      accessorFn: (row) => row.chqAmount,
      id: "chqAmount",
      cell: (info) => <input value={info.row.original.chqAmount} />,
      header: () => <>Cheque Amt</>,
    },
    {
      accessorFn: (row) => row.bankID,
      id: "bankID",
      cell: (info) => (
        <select defaultValue={info.row.original.bankID}>
          {bankMasterDrawnData?.map((bank) => (
            <option key={bank.bankId} value={bank.bankId}>
              {bank.bankName}
            </option>
          ))}
        </select>
      ),
      header: () => <>Bank</>,
    },
    {
      accessorFn: (row) => row.depositBankId,
      id: "depositBankId",
      cell: (info) => (
        <select defaultValue={info.row.original.depositBankId}>
          {bankMasterDepositData?.map((bank) => (
            <option key={bank.id} value={bank.id}>
              {bank.bankName}
            </option>
          ))}
        </select>
      ),
      header: () => <>Deposit Bank</>,
    },
    {
      accessorFn: (row) => row.amount,
      id: "amount",
      cell: ({ getValue, row, column: { id } }) => {
        const initialValue = getValue();

        // We need to keep and update the state of the cell normally
        const [value, setValue] = useState(initialValue);

        // When the input is blurred, we'll call our table meta's updateData function
        const onBlur = () => {
          cellMapDataHandler(row, id, value);
          // table.options.meta?.updateData(index, id, value);
        };

        // If the initialValue is changed external, sync it up with our state
        useEffect(() => {
          setValue(initialValue);
        }, [initialValue]);

        return (
          <input
            value={value as number}
            type="number"
            onChange={(e) => setValue(+e.target.value)}
            onBlur={onBlur}
            // className="editable-cell-style"
          />
        );
        // <input value={info.row.original.amount} />
      },
      header: () => <>Amount</>,
    },
    {
      accessorFn: (row) => row.tds,
      id: "tds",
      cell: (info) => <input value={info.row.original.tds} />,
      header: () => <>TDS</>,
    },
    {
      accessorFn: (row) => row.expense,
      id: "expense",
      cell: (info) => <input value={info.row.original.expense} />,
      header: () => <>Expense</>,
    },
    {
      accessorFn: (row) => row.otherCharges,
      id: "otherCharges",
      cell: (info) => <input value={info.row.original.otherCharges} />,
      header: () => <>Dis./ Chg.</>,
    },
    {
      accessorFn: (row) => row.netAmount,
      id: "netAmount",
      cell: (info) => <input value={info.row.original.netAmount} />,
      header: () => <>Net Amount</>,
    },
    {
      accessorFn: (row) => row.remarks,
      id: "remarks",
      cell: (info) => <input value={info.row.original.remarks} />,
      header: () => <>Remarks</>,
    },
    {
      accessorFn: (row) => row.advTransId,
      id: "advTransId",
      cell: (info) => <input value={info.row.original.advTransId} />,
      header: () => <>Adv. Transaction</>,
    },
  ];

  const tableConfig: TableType<ReceiptType> = {
    config: {
      tableName: "Receipt Master",
      columns,
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
      // onDeleteClick: deleteClientGroupClick,
      // onEditClick: editClientGroupClick,
    },
  };

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

  const onSubmit = handleSubmit((receiptData): void => {
    setStartYear(receiptData.finYearID.value);
    setInvoiceNo(receiptData.invoiceNoId);
    setTableData([]);
  });

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
          {tableData.length && <Table config={tableConfig.config} />}
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
              // onClick={routeHandler}
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
    </Card>
  );
};
