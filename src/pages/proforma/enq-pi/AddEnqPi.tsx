import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Button,
  InputWithText,
  ActionButtons,
  SingleCheckbox,
  NewSelect,
  NewInput,
} from "@shared/index";
import { addEnqPiFormFields } from "@proforma/index";
import {
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
  useFinYearApiCallHook,
  CompanyType,
  CityType,
  CountryType,
  StateType,
  FinYearType,
  LocalSourceType,
  SourceType,
  ClientType,
  useClientApiCallHook,
  useLocalSourceApiCallHook,
  useSourceApiCallHook,
  useCompanyApiCallHook,
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
    formState: { errors },
  } = useForm<any>();
  const { getRefNo, getServiceType } = useAddEnquiryApiCallHook();
  const params = useParams();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getSource } = useSourceApiCallHook();
  const { getLocalSource } = useLocalSourceApiCallHook();
  const { getClient } = useClientApiCallHook();
  const { getFinYear } = useFinYearApiCallHook();
  const { getCompany } = useCompanyApiCallHook();

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
    addEnqPiFormFields.yearField.config.options = options;
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
    console.log(companyData)
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
    console.log(enquiryPiData);
    // let reqObj: Partial<EnquiriesType> = mapEnqRequest(enquiryData);
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
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.companyField}
                  onChange={companyOnChangeHandler}
                />
              </div>
              {/* <div className="col-md-4 col-xs-12">
                  <Input config={addEnqPiFormFields.companyIdField.config} />
                </div> */}
              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.yearField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col-md-8 col-xs-12">
                    <NewInput
                      errors={errors}
                      register={register}
                      config={addEnqPiFormFields.refNoField}
                    />
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
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.givenAddressField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.stateField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.cityField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.zipField}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.telNoField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.faxNoField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.emailField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.websiteField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.contactField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.designationField}
                />
              </div>
            </div>
            <hr className="mt-0" />
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.recdOnField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.dueOnField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.serviceTypeField}
                />
              </div>

              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.printStatusField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.crAmountField}
                />
              </div>
              <div className="col-md-4 col-xs-12"></div>

              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.enqStatusField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.instructionField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.cmieField}
                />
              </div>

              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.rocStatusField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.recordsField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.recFinField}
                />
              </div>

              <div className="col-md-4 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addEnqPiFormFields.telNoField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.priceField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.adjustField}
                />
              </div>

              <div className="col-md-4 col-xs-12">
                <div className="row">
                  <div className="col-md-12 col-xs-12">
                    <NewSelect
                      errors={errors}
                      register={register}
                      control={control}
                      config={addEnqPiFormFields.localSourceField}
                    />
                  </div>
                  <div className="col-md-2 pt-2 col-xs-12">
                    {/* <SingleCheckbox
                      config={addEnqPiFormFields.allField.config}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.fYearField}
                />
              </div>
              <div className="col-md-4 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addEnqPiFormFields.bankField}
                />
              </div>
            </div>
            <hr className="m-0" />
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  {/* <Input config={addEnqPiFormFields.clientRefField.config} /> */}
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={addEnqPiFormFields.clientField}
                  />
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addEnqPiFormFields.requestNoField}
                  />
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
