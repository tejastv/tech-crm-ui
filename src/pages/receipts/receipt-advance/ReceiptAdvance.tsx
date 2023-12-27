import { useForm } from "react-hook-form";

import {
  Card,
  BorderLayout,
  Button,
  Table,
  TableType,
  NewSelect,
  NewDatePicker,
} from "@shared/index";

import { ReceiptAdvanceType, receiptAdvanceFormFields } from "@receipts/index";
import { ColumnDef } from "@tanstack/react-table";

import {
  useBankMasterDepositApiCallHook,
  useBankMasterDrawnApiCallHook,
  usePaymentModeApiCallHook,
} from "@pages/master";

const cardConfig = {
  formLayoutConfig: {
    mainHeading: "Advanced Receipt",
    heading: "Entry",
  },
  formListConfig: {
    heading: "List",
  },
  borderLayoutConfig: {
    heading: "Action Buttons",
  },
};

export const ReceiptAdvance: React.FC = () => {
  const { getPaymentMode } = usePaymentModeApiCallHook();
  const { getBankMasterDrawnOn } = useBankMasterDrawnApiCallHook();
  const { getBankMasterDeposit } = useBankMasterDepositApiCallHook();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const { data: paymentModeData } = getPaymentMode();
  const { data: bankMasterDrawnData } = getBankMasterDrawnOn();
  const { data: bankMasterDepositData } = getBankMasterDeposit();

  const onSubmit = handleSubmit((receiptAdvanceData): void => {
    console.log(receiptAdvanceData);
  });

  const columns: ColumnDef<ReceiptAdvanceType>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>SRNO</>,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>ClientName</>,
    },
    {
      accessorFn: (row) => row.recDate,
      id: "recDate",
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
      accessorFn: (row) => row.remarks,
      id: "remarks",
      cell: (info) => <input value={info.row.original.remarks} />,
      header: () => <>Remarks</>,
    },
    {
      accessorFn: (row) => row.adjAmount,
      id: "adjAmount",
      cell: (info) => info.getValue(),
      header: () => <>Adj. Amount</>,
    },
    {
      accessorFn: (row) => row.balAmount,
      id: "balAmount",
      cell: (info) => info.getValue(),
      header: () => <>Bal. Amount</>,
    },
    {
      accessorFn: (row) => row.adjInv,
      id: "adjInv",
      cell: (info) => info.getValue(),
      header: () => <>Adj. Inv.</>,
    },
    {
      accessorFn: (row) => row.currency,
      id: "currency",
      cell: (info) => info.getValue(),
      header: () => <>Currency</>,
    },
    {
      id: "save",
      cell: () => <i className="fa fa-save fa-1x" />,
      header: () => <>Save</>,
    },
    {
      id: "delete",
      cell: () => <i className="fa fa-close fa-1x" />,
      header: () => <>Delete</>,
    },
  ];

  const tableConfig: TableType<ReceiptAdvanceType> = {
    config: {
      tableName: "Receipt Advance Master",
      columns,
      tableData: [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: true,
      sorting: false,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
      },
      // onDeleteClick: deleteClientGroupClick,
      // onEditClick: editClientGroupClick,
    },
  };

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form noValidate autoComplete="off" className="p-t-20">
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={receiptAdvanceFormFields.finYear}
              />
              <div className="row">
                <div className="col-6">
                  <NewDatePicker
                    errors={errors}
                    register={register}
                    config={receiptAdvanceFormFields.fromDate}
                  />
                </div>
                <div className="col-6">
                  <NewDatePicker
                    errors={errors}
                    register={register}
                    config={receiptAdvanceFormFields.toDate}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={receiptAdvanceFormFields.city}
              />
              <div className="row">
                <div className="col">
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={receiptAdvanceFormFields.client}
                  />
                </div>
                <div className="col-2 col-xs-12">
                  <Button
                    type={"button"}
                    className={"btn btn-danger btn-sm"}
                    onClick={onSubmit}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.formListConfig.heading}>
          <div
            className="d-flex align-items-center"
            //   onClick={onAddClick}
          >
            <i className="fa fa-plus fa-2x pr-2"></i>
            <small>Click here to add more row</small>
          </div>
          <Table config={tableConfig.config} />
        </BorderLayout>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          <div className="text-center">
            <Button
              type="button"
              className="btn btn-danger  waves-effect waves-light mr-2"
              // onClick={routeHandler}
            >
              <i className="far fa-save pr-1"></i> Export
            </Button>
          </div>
        </BorderLayout>
      </form>
    </Card>
  );
};
