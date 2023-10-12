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
} from "@shared/index";
import {
  AddUpdateEnquiryType,
  ClientType,
  addEnquiryFormFields,
  useAllEnquiriesApiCallHook,
  useServiceTypeApiCallHook,
} from "@transaction-search/index";
import { Link, useParams } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
import {
  useActualBuyerApiCallHook,
  useCityApiCallHook,
  useClientApiCallHook,
  useClientGroupApiCallHook,
  useCompanyApiCallHook,
  useCountryApiCallHook,
  useCreditDaysApiCallHook,
  useCurrencyApiCallHook,
  useExecutiveApiCallHook,
  useFinYearApiCallHook,
  useLocalSourceApiCallHook,
  useSegmentApiCallHook,
  useSourceApiCallHook,
  useStateApiCallHook,
} from "@pages/master";
import {
  cleanupObject,
  returnObjectBasedOnID,
  selectOptionsMaker,
} from "@utils/index";
// import {useStateApiCallHook } from "@pages/master";

export const AddEnquiry: React.FC = () => {
  // const { getState } = useStateApiCallHook();
  // const { data: stateData, isLoading } = getState();
  const methods = useForm<AddUpdateEnquiryType>();
  const { addEnquiryMutation, updateEnquiryMutation, getEnquiryData } =
    useAllEnquiriesApiCallHook();
  const params = useParams();
  const { mutateAsync: addEnquiry } = addEnquiryMutation();
  const { mutateAsync: updateEnquiry } = updateEnquiryMutation();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getServiceType } = useServiceTypeApiCallHook();
  const { getEnqStatus } = useServiceTypeApiCallHook();
  const { getRefNo } = useServiceTypeApiCallHook();
  const { getSource } = useSourceApiCallHook();
  const { getLocalSource } = useLocalSourceApiCallHook();
  const { getClient, getClientData } = useClientApiCallHook();
  const { getCompany } = useCompanyApiCallHook();
  const { getActualBuyer } = useActualBuyerApiCallHook();
  const { getFinYear } = useFinYearApiCallHook();
  const { getClientDetails } = useServiceTypeApiCallHook();

  const [clientId, setClientId] = useState<number>(-2);
  const [refNo, setRefNo] = useState<any>();
  const [clientIdData, setClientIdData] = useState<any>();
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

  // city api call
  const { data: cityData } = getCity();
  if (cityData) {
    addEnquiryFormFields.cityenquiry.config.options = selectOptionsMaker(
      cityData,
      "id",
      "cityName"
    );
  }

  // state api call
  const { data: stateData } = getState();
  if (stateData) {
    addEnquiryFormFields.stateenquiry.config.options = selectOptionsMaker(
      stateData,
      "stateId",
      "state"
    );
  }

  // country api call
  const { data: CountryData } = getCountry();
  if (CountryData) {
    addEnquiryFormFields.countryenquiry.config.options = selectOptionsMaker(
      CountryData,
      "countryId",
      "countryName"
    );
  }

  //  Client api call
  const { data: ClientData } = getClient();
  if (ClientData) {
    addEnquiryFormFields.clientenquiry.config.options = selectOptionsMaker(
      ClientData,
      "clientID",
      "clientName"
    );
  }
  //  Fyear  api call
  const { data: fYearData } = getFinYear();
  if (fYearData) {
    addEnquiryFormFields.yearenquiry.config.options = selectOptionsMaker(
      fYearData,
      "id",
      "finYear"
    );
  }
  //  Actual buyer api call
  const { data: ActualBuyerData } = getActualBuyer();
  if (ActualBuyerData) {
    addEnquiryFormFields.actualbureyenquiry.config.options = selectOptionsMaker(
      ActualBuyerData,
      "partyId",
      "partyName"
    );
  }

  // Source api call
  const { data: SourceData } = getSource();
  if (SourceData) {
    addEnquiryFormFields.sourceenquiry.config.options = selectOptionsMaker(
      SourceData,
      "sourceID",
      "source"
    );
  }

  // Local Source api call
  const { data: LocalSourceData } = getLocalSource();
  if (LocalSourceData) {
    addEnquiryFormFields.localsourceenquiry.config.options = selectOptionsMaker(
      LocalSourceData,
      "localSourceId",
      "localSource"
    );
  }

  // Company api call
  const { data: CompanyData } = getCompany();
  if (CompanyData) {
    addEnquiryFormFields.companyenquiry.config.options = selectOptionsMaker(
      CompanyData,
      "companyId",
      "companyName"
    );
  }

  // Service Type api call
  const { data: ServiceData } = getServiceType();
  if (ServiceData) {
    addEnquiryFormFields.servicetype.config.options = selectOptionsMaker(
      ServiceData,
      "serviceTypeID",
      "serviceType"
    );
  }

  // enq Status api call
  const { data: enqstatusData } = getEnqStatus();
  if (enqstatusData) {
    addEnquiryFormFields.enqstatus.config.options = selectOptionsMaker(
      enqstatusData,
      "enquiryStatusID",
      "enquiryStatus"
    );
  }

  //RefNo api call

  addEnquiryFormFields.refnoenquiry.config.setData = refNo;

  const onSubmit = methods.handleSubmit((enquiryData): void => {
    let data: any = { ...cleanupObject(enquiryData) };
    delete data.state;

    if (data.stateId) {
      data.stateId = +data.stateId["value"];
    }
    if (data.countryId) {
      data.countryId = +data.countryId["value"];
    }
    if (data.cityId) {
      data.cityId = +data.cityId["value"];
    }
    if (data.clientId) {
      data.clientId = +data.clientId["value"];
    }
    if (data.localSourceId) {
      data.localSourceId = +data.localSourceId["value"];
    }
    if (data.sourceID) {
      data.sourceID = +data.sourceID["value"];
    }
    if (data.partyId) {
      data.partyId = +data.partyId["value"];
    }
    if (data.fYearid) {
      data.fYearid = +data.fYearid["value"];
    }

    console.log(data);
    if (params.id && data) {
      updateEnquiry({ id: params.id, ...data });
    } else {
      addEnquiry(data);
    }
  });

  if (params.id) {
    const { data: EnquiryMasterData } = getEnquiryData("" + params.id);
    if (EnquiryMasterData) {
      if (cityData) {
        let id = EnquiryMasterData?.cityId;
        let data: any = returnObjectBasedOnID(
          cityData,
          "id",
          id,
          "id",
          "cityName"
        );
        addEnquiryFormFields.cityenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (stateData) {
        let id = EnquiryMasterData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateData,
          "stateId",
          id,
          "stateId",
          "state"
        );
        addEnquiryFormFields.stateenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (CountryData) {
        let id = EnquiryMasterData?.countryId;
        let data: any = returnObjectBasedOnID(
          CountryData,
          "countryId",
          id,
          "countryId",
          "countryName"
        );
        addEnquiryFormFields.countryenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (ClientData) {
        let id = EnquiryMasterData?.clientID;
        let data: any = returnObjectBasedOnID(
          ClientData,
          "clientId",
          id,
          "clientId",
          "clientName"
        );
        addEnquiryFormFields.clientenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }

      if (fYearData) {
        let id = EnquiryMasterData?.fyearId;
        let data: any = returnObjectBasedOnID(
          fYearData,
          "id",
          id,
          "id",
          "finYear"
        );
        addEnquiryFormFields.yearenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (ActualBuyerData) {
        let id = EnquiryMasterData?.actualBuyerId;
        let data: any = returnObjectBasedOnID(
          ActualBuyerData,
          "partyId",
          id,
          "partyId",
          "partyName"
        );
        addEnquiryFormFields.actualbureyenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (SourceData) {
        let id = EnquiryMasterData?.sourceID;
        let data: any = returnObjectBasedOnID(
          SourceData,
          "sourceID",
          id,
          "sourceID",
          "source"
        );
        addEnquiryFormFields.sourceenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (LocalSourceData) {
        let id = EnquiryMasterData?.localSourceId;
        let data: any = returnObjectBasedOnID(
          LocalSourceData,
          "localSourceId",
          id,
          "localSourceId",
          "localSource"
        );
        addEnquiryFormFields.localsourceenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }

      if (CompanyData) {
        let id = EnquiryMasterData?.companyID;
        let data: any = returnObjectBasedOnID(
          CompanyData,
          "companyId",
          id,
          "companyId",
          "companyName"
        );
        addEnquiryFormFields.companyenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (ServiceData) {
        let id = EnquiryMasterData?.serviceTypeID;
        let data: any = returnObjectBasedOnID(
          ServiceData,
          "serviceTypeID",
          id,
          "serviceTypeID",
          "serviceTypeName"
        );
        addEnquiryFormFields.companyenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (enqstatusData) {
        let id = EnquiryMasterData?.enqStatusID;
        let data: any = returnObjectBasedOnID(
          enqstatusData,
          "enquiryStatusID",
          id,
          "enquiryStatusID",
          "enquiryStatus"
        );
        addEnquiryFormFields.companyenquiry.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      addEnquiryFormFields.zipenquiry.config.setData = EnquiryMasterData.zip;
      addEnquiryFormFields.telnoenquiry.config.setData =
        EnquiryMasterData.phone;
      addEnquiryFormFields.givenaddressEnquiry.config.setData =
        EnquiryMasterData.givenAddress;
      addEnquiryFormFields.faxnoenquiry.config.setData = EnquiryMasterData.fax;
      addEnquiryFormFields.emailenquiry.config.setData =
        EnquiryMasterData.email;
      addEnquiryFormFields.websiteenquiry.config.setData =
        EnquiryMasterData.website;
      addEnquiryFormFields.contactenquiry.config.setData =
        EnquiryMasterData.contactPerson;
      addEnquiryFormFields.designationenquiry.config.setData =
        EnquiryMasterData.designation;
      addEnquiryFormFields.givenname.config.setData =
        EnquiryMasterData.givenName;
      addEnquiryFormFields.notesforenquiry.config.setData =
        EnquiryMasterData.noteforenq;
      addEnquiryFormFields.notesforadj.config.setData =
        EnquiryMasterData.noteforadj;
      addEnquiryFormFields.clientrefenquiry.config.setData =
        EnquiryMasterData.clientRefNo;
    }
  } else {
    useEffect(() => {
      methods.reset();
      getRefNo().then((refno: any) => {
        if (refno) {
          setRefNo(refno.data);
        }
      });
    }, []);
  }

  const { data: clientData } = getClientData(clientId, clientId != -2);

  const handleSelectChange = (selectedOption: any) => {
    debugger;
    if (selectedOption) {
      setClientId(selectedOption.value);
    }
  };

  const columns: ColumnDef<any>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.clientName,
      id: "clientName",
      cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      accessorFn: (row) => row.address,
      id: "address",
      cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },
    {
      accessorFn: (row) => row.countryName,
      id: "countryName",
      cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
    },
    {
      accessorFn: (row) => row.instruction,
      id: "instruction",
      cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
    },
  ];

  const tableConfig: TableType<any> = {
    config: {
      tableName: "State",
      columns: columns,
      tableData: clientData ? [clientData] : [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: false,
      pagination: {
        pageSize: 1,
        nextPreviousBtnShow: false,
        tableMetaDataShow: false,
      },
    },
  };

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
                <div className="col-md-6 col-xs-12">
                  <Select config={addEnquiryFormFields.companyenquiry.config} />
                  <Select config={addEnquiryFormFields.yearenquiry.config} />
                  <Input config={addEnquiryFormFields.refnoenquiry.config} />
                  <small className="enquirynote text-right">
                    <InputWithText
                      config={addEnquiryFormFields.refnote.config}
                    />
                  </small>
                  <Select config={addEnquiryFormFields.sourceenquiry.config} />
                  <Input
                    config={addEnquiryFormFields.givenaddressEnquiry.config}
                  />
                  <Select config={addEnquiryFormFields.cityenquiry.config} />
                  <Select config={addEnquiryFormFields.stateenquiry.config} />
                  <Select config={addEnquiryFormFields.countryenquiry.config} />
                  <Input config={addEnquiryFormFields.zipenquiry.config} />
                  <Input config={addEnquiryFormFields.telnoenquiry.config} />
                  <Input config={addEnquiryFormFields.faxnoenquiry.config} />
                  <Input config={addEnquiryFormFields.emailenquiry.config} />
                  <Input config={addEnquiryFormFields.websiteenquiry.config} />
                  <Input config={addEnquiryFormFields.contactenquiry.config} />
                  <Input
                    config={addEnquiryFormFields.designationenquiry.config}
                  />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={addEnquiryFormFields.givenname.config} />
                  <Input config={addEnquiryFormFields.recdon.config} />
                  <Select config={addEnquiryFormFields.enqtype.config} />
                  <Select
                    config={addEnquiryFormFields.localsourceenquiry.config}
                  />
                  <Select config={addEnquiryFormFields.servicetype.config} />
                  <Input config={addEnquiryFormFields.dueon.config} />
                  <Select config={addEnquiryFormFields.printstatus.config} />
                  <Select config={addEnquiryFormFields.enqstatus.config} />
                  <Select config={addEnquiryFormFields.svisit.config} />
                  <Input config={addEnquiryFormFields.notesforenquiry.config} />
                  <Input config={addEnquiryFormFields.notesforadj.config} />
                  <Input
                    config={addEnquiryFormFields.instructionenquiry.config}
                  />
                </div>
                <h6 className="card-title col-12">Client Details</h6>
                <div className="col-md-4 col-xs-12">
                  <Input
                    config={addEnquiryFormFields.clientrefenquiry.config}
                  />
                  <Select
                    config={addEnquiryFormFields.clientenquiry.config}
                    onChangeHandler={handleSelectChange}
                  />
                  <div className="row justify-content-end">
                    <div className="col-md-4 col-xs-12 text-right">
                      <Button
                        type={"submit"}
                        className={"btn btn-danger btn-sm mb-2"}
                      >
                        <i className="far fa-save"></i> Get Price
                      </Button>
                    </div>
                  </div>
                  <Input
                    config={addEnquiryFormFields.requestnoenquiry.config}
                  />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={addEnquiryFormFields.clientIdenquiry.config} />
                  <Select
                    config={addEnquiryFormFields.actualbureyenquiry.config}
                  />
                  <div className="row">
                    <div className="col-md-8 col-xs-12 text-right">
                      <Link to={""} className="card-title">
                        <InputWithText
                          config={
                            addEnquiryFormFields.actualbuyeraddnote.config
                          }
                        />
                      </Link>
                    </div>
                    <div className="col-md-4 col-xs-12 text-right">
                      <i className="fa fa-refresh"></i>
                    </div>
                  </div>
                  <Input config={addEnquiryFormFields.priceenquiry.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Table config={tableConfig.config}></Table>
                </div>
                <div className="card-title">
                  <InputWithText
                    config={addEnquiryFormFields.discountcommissionnote.config}
                  />
                </div>
                <div className="col-3">
                  <Input config={addEnquiryFormFields.disenquiry.config} />
                </div>
                <div className="col-3">
                  <Input config={addEnquiryFormFields.discountenquiry.config} />
                </div>
                <div className="col-3">
                  <Input config={addEnquiryFormFields.adjustenquiry.config} />
                  <div className="row">
                    <div className="col-md-12 col-xs-12 text-right">
                      <Button
                        type={"submit"}
                        className={"btn btn-danger btn-sm"}
                      >
                        <i className="far fa-save"></i> View Adjust
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <Input config={addEnquiryFormFields.commenquiry.config} />
                </div>
                <div className="card-title col-12">
                  <InputWithText
                    config={addEnquiryFormFields.discounttypenote.config}
                  />
                </div>
              </div>
            </BorderLayout>
            <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
              <ActionButtons />
            </BorderLayout>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
