import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  Select,
  Button,
  InputWithText,
  ActionButtons,
  Table,
  TableType,
  SingleCheckbox,
} from "@shared/index";
import { addEnqPiFormFields } from "@proforma/index";
import { ColumnDef } from "@tanstack/react-table";
import {
  ClientType,
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
  useSourceApiCallHook,
  useLocalSourceApiCallHook,
  useClientApiCallHook,
  useCompanyApiCallHook,
  useFinYearApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/index";
import { useAddEnquiryApiCallHook } from "@transaction-search/index";
import { useParams } from "react-router-dom";

export const AddEnqPi: React.FC = () => {
  const {
    getEnqStatus,
    getRefNo,
    getServiceType,
    getPrice,
  } = useAddEnquiryApiCallHook();
  const params = useParams();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getSource } = useSourceApiCallHook();
  const { getLocalSource } = useLocalSourceApiCallHook();
  const { getClient, getClientData } = useClientApiCallHook();
  const { getCompany } = useCompanyApiCallHook();
  const { getFinYear } = useFinYearApiCallHook();

  const [refNo, setRefNo] = useState<any>();
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Enquiry",
      heading: "Enquiry",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Action Button",
    },
  };

  const columns: ColumnDef<ClientType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      // accessorFn: (row) => row.stateCodeN,
      id: "Address",
      // cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
    },
    {
      id: "Instruction",
      // cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
    },
  ];

  const tableConfig: TableType<ClientType> = {
    config: {
      tableName: "State",
      columns: columns,
      tableData: [],
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
    },
  };

  const onSubmit = methods.handleSubmit((data) => {
    console.log("value", data);
  });

  const { data: cityData } = getCity();
  if (cityData) {
    addEnqPiFormFields.cityField.config.options = selectOptionsMaker(
      cityData,
      "id",
      "cityName"
    );
  }

  const { data: stateData } = getState();
  if (stateData) {
    addEnqPiFormFields.stateField.config.options = selectOptionsMaker(
      stateData,
      "stateId",
      "stateName"
    );
  }

  const { data: CountryData } = getCountry();
  if (CountryData) {
    addEnqPiFormFields.countryField.config.options = selectOptionsMaker(
      CountryData,
      "countryId",
      "countryName"
    );
  }

  const { data: ClientData } = getClient();
  if (ClientData) {
    addEnqPiFormFields.clientField.config.options = selectOptionsMaker(
      ClientData,
      "clientID",
      "clientName"
    );
  }

  const { data: fYearData } = getFinYear();
  if (fYearData) {
    console.log(fYearData)
    addEnqPiFormFields.fYearField.config.options = selectOptionsMaker(
      fYearData,
      "finYear",
      "finYear"
    );
  }

  const { data: SourceData } = getSource();
  if (SourceData) {
    addEnqPiFormFields.sourceField.config.options = selectOptionsMaker(
      SourceData,
      "sourceID",
      "source"
    );
  }

  const { data: LocalSourceData } = getLocalSource();
  if (LocalSourceData) {
    addEnqPiFormFields.localSourceField.config.options = selectOptionsMaker(
      LocalSourceData,
      "localSourceId",
      "localSource"
    );
  }

  const { data: companyData } = getCompany();
  if (companyData) {
    addEnqPiFormFields.companyField.config.options = selectOptionsMaker(
      companyData,
      "companyId",
      "companyName",
      true
    );
  }

  const { data: ServiceData } = getServiceType();
  if (ServiceData) {
    addEnqPiFormFields.serviceTypeField.config.options = selectOptionsMaker(
      ServiceData,
      "serviceTypeID",
      "serviceType"
    );
  }

  addEnqPiFormFields.refNoField.config.setData = refNo;
  if (params.id) {
   
  } else {
    useEffect(() => {
      methods.reset();
      getRefNo().then((refNo: any) => {
        if (refNo) {
          setRefNo(refNo.data);
        }
      });
    }, []);
  }

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
            className="p-t-20"
          >
            <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    <Input config={addEnqPiFormFields.companyField.config} />

                    <Select config={addEnqPiFormFields.yearField.config} />

                    <Input config={addEnqPiFormFields.refNoField.config} />

                    <div className="col-md-12 col-xs-12 text-right">
                      <small className="enquirynote">
                        <InputWithText
                          config={addEnqPiFormFields.refNote.config}
                        />
                      </small>
                    </div>

                    <Select config={addEnqPiFormFields.sourceField.config} />

                    <Input
                      config={addEnqPiFormFields.givenAddressField.config}
                    />

                    <Select config={addEnqPiFormFields.stateField.config} />

                    <Input config={addEnqPiFormFields.telNoField.config} />

                    <Input config={addEnqPiFormFields.faxNoField.config} />

                    <Input config={addEnqPiFormFields.emailField.config} />

                    <Input config={addEnqPiFormFields.websiteField.config} />

                    <Input config={addEnqPiFormFields.contactField.config} />

                    <Input
                      config={addEnqPiFormFields.designationField.config}
                    />
                  </div>
                </div>
                {/* 2 Column */}
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    {/* Blank Field  */}

                    <Input config={addEnqPiFormFields.blankField.config} />

                    <Input config={addEnqPiFormFields.recdOnField.config} />

                    <Input config={addEnqPiFormFields.priceField.config} />

                    <Input config={addEnqPiFormFields.adjustField.config} />

                    <Select config={addEnqPiFormFields.cityField.config} />

                    <Input config={addEnqPiFormFields.zipField.config} />

                    <Select config={addEnqPiFormFields.countryField.config} />

                    <Select
                      config={addEnqPiFormFields.localSourceField.config}
                    />

                    <div className="col-md-14 col-xs-12 text-right">
                      <SingleCheckbox
                        config={addEnqPiFormFields.allField.config}
                      />
                    </div>

                    <Input config={addEnqPiFormFields.fYearField.config} />

                    <Input config={addEnqPiFormFields.bankField.config} />
                  </div>
                </div>

                {/* 3 Column  */}
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    <Input config={addEnqPiFormFields.companyIdField.config} />

                    <Select
                      config={addEnqPiFormFields.serviceTypeField.config}
                    />

                    <Input config={addEnqPiFormFields.dueOnField.config} />

                    <Select
                      config={addEnqPiFormFields.printStatusField.config}
                    />

                    <Input config={addEnqPiFormFields.crAmountField.config} />

                    <Select config={addEnqPiFormFields.enqStatusField.config} />

                    <Input config={addEnqPiFormFields.notesForField.config} />

                    <Select
                      config={addEnqPiFormFields.instructionField.config}
                    />

                    <Input config={addEnqPiFormFields.cmieField.config} />

                    <Input config={addEnqPiFormFields.rocStatusField.config} />

                    <Input config={addEnqPiFormFields.recordsField.config} />

                    <Input config={addEnqPiFormFields.recFinField.config} />
                  </div>
                </div>

                {/* 4th Column */}
                <div className="card-title">
                  <InputWithText
                    config={addEnqPiFormFields.clientDetailsNote.config}
                  />
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    <Input config={addEnqPiFormFields.clientRefField.config} />

                    <Select config={addEnqPiFormFields.clientField.config} />

                    <div className="col-md-14 col-xs-12 text-right">
                      <Button
                        type={"submit"}
                        className={"btn btn-danger btn-sm"}
                      >
                        <i className="far fa-save"></i>Get Price
                      </Button>
                    </div>
                  </div>
                </div>
                {/* 5th column */}
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    <Input config={addEnqPiFormFields.requestNoField.config} />

                    <Input config={addEnqPiFormFields.clientIdField.config} />
                  </div>
                </div>
                {/* Table */}
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    <Table config={tableConfig.config}>null</Table>
                  </div>
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </Card>
    </>
  );
};
