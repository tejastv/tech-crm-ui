import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  Select,
  Button,
  InputWithText,
  ActionButtons,
  SingleCheckbox,
} from "@shared/index";
import { addEnqPiFormFields } from "@proforma/index";
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
  CompanyType,
  CityType,
  CountryType,
  StateType,
  FinYearType,
  LocalSourceType,
  SourceType,
} from "@master/index";
import {
  returnFormatedObjectElseEmptyArray,
  selectOptionsMaker,
} from "@utils/index";
import {
  ServiceType,
  useAddEnquiryApiCallHook,
} from "@transaction-search/index";
import { useParams } from "react-router-dom";

export const AddEnqPi: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>();
  const { getRefNo, getServiceType } =
    useAddEnquiryApiCallHook();
  const params = useParams();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getSource } = useSourceApiCallHook();
  const { getLocalSource } = useLocalSourceApiCallHook();
  const { getClient, getClientData } = useClientApiCallHook();
  const { getCompany } = useCompanyApiCallHook();
  const { getFinYear } = useFinYearApiCallHook();
  const [cityOptions, setCityOptions] = useState<CityType[]>();
  const [stateOptions, setStateOptions] = useState<StateType[]>();
  const [countryOptions, setCountryOptions] = useState<CountryType[]>();
  const [clientOptions, setClientOptions] = useState<ClientType[]>();
  const [finYearOptions, setFinYearOptions] = useState<FinYearType[]>();
  const [sourceOptions, setSourceOptions] = useState<SourceType[]>();
  const [localSourceOptions, setLocalSourceOptions] =
    useState<LocalSourceType[]>();
  const [companyOptions, setCompanyOptions] = useState<CompanyType[]>();
  const [serviceOptions, setServiceOptions] = useState<ServiceType[]>();

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

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    addEnqPiFormFields.cityField.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();
  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    addEnqPiFormFields.stateField.config.options = options;
  }

  // country api call
  const { data: countryData } = getCountry();
  useEffect(() => {
    if (countryData) {
      setCountryOptions(Object.values(countryData));
    }
  }, [countryData && Object.values(countryData).length]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    addEnqPiFormFields.countryField.config.options = options;
  }

  //  Client api call
  const { data: clientData } = getClient();

  useEffect(() => {
    if (clientData) {
      setClientOptions(Object.values(clientData));
    }
  }, [clientData]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientID", "clientName");
    addEnqPiFormFields.clientField.config.options = options;
  }

  //  Fyear  api call
  const { data: fYearData } = getFinYear();

  useEffect(() => {
    if (fYearData) {
      setFinYearOptions(Object.values(fYearData));
    }
  }, [fYearData]);

  if (finYearOptions?.length) {
    let options = selectOptionsMaker(finYearOptions, "finYear", "finYear");
    addEnqPiFormFields.fYearField.config.options = options;
  }

  // Source api call
  const { data: sourceData } = getSource();

  useEffect(() => {
    if (sourceData) {
      setSourceOptions(Object.values(sourceData));
    }
  }, [sourceData]);

  if (sourceOptions?.length) {
    let options = selectOptionsMaker(sourceOptions, "sourceID", "source");
    addEnqPiFormFields.sourceField.config.options = options;
  }

  // Local Source api call
  const { data: localSourceData } = getLocalSource();

  useEffect(() => {
    if (localSourceData) {
      setLocalSourceOptions(Object.values(localSourceData));
    }
  }, [localSourceData]);

  if (localSourceOptions?.length) {
    let options = selectOptionsMaker(
      localSourceOptions,
      "localSourceId",
      "localSource"
    );
    addEnqPiFormFields.localSourceField.config.options = options;
  }

  // Company api call
  const { data: companyData } = getCompany();

  useEffect(() => {
    if (companyData) {
      setCompanyOptions(Object.values(companyData));
    }
  }, [companyData]);

  if (companyOptions?.length) {
    let options = selectOptionsMaker(
      companyOptions,
      "companyId",
      "companyName",
      true
    );
    addEnqPiFormFields.companyField.config.options = options;
  }

  // Service Type api call
  const { data: serviceData } = getServiceType();

  useEffect(() => {
    if (serviceData) {
      setServiceOptions(Object.values(serviceData));
    }
  }, [serviceData]);

  if (serviceOptions?.length) {
    let options = selectOptionsMaker(
      serviceOptions,
      "serviceTypeID",
      "serviceType"
    );
    addEnqPiFormFields.serviceTypeField.config.options = options;
  }

  const companyOnChangeHandler = (companyData: any) => {
    if (companyData.data) {
      if (addEnqPiFormFields.givenAddressField.config.name == "givenAddress") {
        setValue(
          addEnqPiFormFields.givenAddressField.config.name,
          companyData.data.address
        );
      }
      if (addEnqPiFormFields.zipField.config.name == "zip") {
        setValue(addEnqPiFormFields.zipField.config.name, companyData.data.zip);
      }
      if (addEnqPiFormFields.telNoField.config.name == "phone") {
        setValue(
          addEnqPiFormFields.telNoField.config.name,
          companyData.data.phone
        );
      }
      if (addEnqPiFormFields.faxNoField.config.name == "fax") {
        setValue(
          addEnqPiFormFields.faxNoField.config.name,
          companyData.data.fax
        );
      }
      if (addEnqPiFormFields.emailField.config.name == "email") {
        setValue(
          addEnqPiFormFields.emailField.config.name,
          companyData.data.email
        );
      }
      if (addEnqPiFormFields.websiteField.config.name == "website") {
        setValue(
          addEnqPiFormFields.websiteField.config.name,
          companyData.data.website
        );
      }
      if (addEnqPiFormFields.contactField.config.name == "contactPerson") {
        setValue(
          addEnqPiFormFields.contactField.config.name,
          companyData.data.contactPerson
        );
      }
      if (addEnqPiFormFields.designationField.config.name == "designation") {
        setValue(
          addEnqPiFormFields.designationField.config.name,
          companyData.data.designation
        );
      }
      if (addEnqPiFormFields.cityField.config.name == "cityId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.cityId,
          companyData.data,
          "cityId",
          "cityName"
        );
        data.length > 0 &&
          setValue(addEnqPiFormFields.cityField.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (addEnqPiFormFields.stateField.config.name == "stateId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.stateId,
          companyData.data,
          "stateId",
          "state"
        );
        data.length > 0 &&
          setValue(addEnqPiFormFields.stateField.config.name, data[0], {
            shouldValidate: true,
          });
      }
      if (addEnqPiFormFields.countryField.config.name == "countryId") {
        let data = returnFormatedObjectElseEmptyArray(
          companyData.data.countryId,
          companyData.data,
          "countryId",
          "countryName"
        );
        data.length > 0 &&
          setValue(addEnqPiFormFields.countryField.config.name, data[0], {
            shouldValidate: true,
          });
      }
    }
  };

  const { data: refNo } = getRefNo(params.id === undefined);

  useEffect(() => {
    if (refNo) {
      if (addEnqPiFormFields.refNoField.config.name == "refNo") {
        setValue(addEnqPiFormFields.refNoField.config.name, refNo);
      }
    }
  }, [refNo]);
  if (params.id) {
  } else {
    useEffect(() => {}, []);
  }

  const onSubmit = handleSubmit((enquiryPiData): void => {
    // let reqObj: Partial<EnquiriesType> = mapEnqRequest(enquiryData);
    // console.log(reqObj);
    // if (params.id && reqObj) {
    // } else {
    // }
  });
  
  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <form
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
          className="p-t-20"
        >
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Select
                  config={addEnqPiFormFields.companyField.config}
                  onChangeHandler={companyOnChangeHandler}
                />
              </div>
              {/* <div className="col-md-4 col-xs-12">
                  <Input config={addEnqPiFormFields.companyIdField.config} />
                </div> */}
              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.yearField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col-md-8 col-xs-12">
                    <Input config={addEnqPiFormFields.refNoField.config} />
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <small className="enquirynote">
                      <InputWithText
                        config={addEnqPiFormFields.refNote.config}
                      />
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.givenAddressField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.countryField.config} />
                <Select config={addEnqPiFormFields.stateField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.cityField.config} />
                <Input config={addEnqPiFormFields.zipField.config} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.telNoField.config} />
                <Input config={addEnqPiFormFields.faxNoField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.emailField.config} />
                <Input config={addEnqPiFormFields.websiteField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.contactField.config} />
                <Input config={addEnqPiFormFields.designationField.config} />
              </div>
            </div>
            <hr className="mt-0" />
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.recdOnField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.dueOnField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.serviceTypeField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.printStatusField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.crAmountField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.enqStatusField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.notesForField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.instructionField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.cmieField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.rocStatusField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.recordsField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.recFinField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <Select config={addEnqPiFormFields.sourceField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.priceField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.adjustField.config} />
              </div>

              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col-md-10 col-xs-12">
                    <Select
                      config={addEnqPiFormFields.localSourceField.config}
                    />
                  </div>
                  <div className="col-md-2 pt-2 col-xs-12">
                    <SingleCheckbox
                      config={addEnqPiFormFields.allField.config}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.fYearField.config} />
              </div>
              <div className="col-md-4 col-xs-12">
                <Input config={addEnqPiFormFields.bankField.config} />
              </div>
            </div>
            <hr className="m-0" />
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  {/* <Input config={addEnqPiFormFields.clientRefField.config} /> */}
                  <Select config={addEnqPiFormFields.clientField.config} />
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  <Input config={addEnqPiFormFields.requestNoField.config} />
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  {/* <Input config={addEnqPiFormFields.clientIdField.config} /> */}
                  <div className="col-md-14 col-xs-12 text-right">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i>Get Price
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </BorderLayout>
        </form>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </Card>
    </>
  );
};
