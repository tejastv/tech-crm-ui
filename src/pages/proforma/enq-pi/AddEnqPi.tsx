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
  SingleCheckbox,
} from "@shared/index";
import { addEnqPiFormFields } from "@proforma/index";
import {
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
  // useSourceApiCallHook,
  // useLocalSourceApiCallHook,
  // useClientApiCallHook,
  // useCompanyApiCallHook,
  useFinYearApiCallHook,
  CompanyType,
  CityType,
  CountryType,
  StateType,
} from "@master/index";
import { cleanupObject, selectOptionsMaker } from "@utils/index";
import { useAddEnquiryApiCallHook } from "@transaction-search/index";
import { useParams } from "react-router-dom";

export const AddEnqPi: React.FC = () => {
  const { getServiceType } = useAddEnquiryApiCallHook();
  const params = useParams();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  // const { getSource } = useSourceApiCallHook();
  // const { getLocalSource } = useLocalSourceApiCallHook();
  // const { getClient } = useClientApiCallHook();
  const { getFinYear } = useFinYearApiCallHook();
  const [isCompanyChange, setIsCompanyChange] = useState<boolean>(false);

  // const [refNo, setRefNo] = useState<any>();
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

  const onSubmit = methods.handleSubmit((data) => {
    console.log("value", data);
  });

  const { data: cityData } = getCity();

  const [cityOptions, setCityOptions] = useState<CityType[]>();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName");
    addEnqPiFormFields.cityField.config.options = options;
  }

  const { data: stateData } = getState();

  // state api call
  const [stateOptions, setStateOptions] = useState<StateType[]>();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData && Object.values(stateData).length]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    addEnqPiFormFields.stateField.config.options = options;
  }

  // country api call
  const { data: countryData } = getCountry();
  const [countryOptions, setCountryOptions] = useState<CountryType[]>();

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

  // const { data: ClientData } = getClient();
  // if (ClientData) {
  //   addEnqPiFormFields.clientField.config.options = selectOptionsMaker(
  //     ClientData,
  //     "clientID",
  //     "clientName"
  //   );
  // }

  const { data: fYearData } = getFinYear();
  if (fYearData) {
    addEnqPiFormFields.fYearField.config.options = selectOptionsMaker(
      fYearData,
      "finYear",
      "finYear"
    );
  }

  // const { data: SourceData } = getSource();
  // if (SourceData) {
  //   addEnqPiFormFields.sourceField.config.options = selectOptionsMaker(
  //     SourceData,
  //     "sourceID",
  //     "source"
  //   );
  // }

  // const { data: LocalSourceData } = getLocalSource();
  // if (LocalSourceData) {
  //   addEnqPiFormFields.localSourceField.config.options = selectOptionsMaker(
  //     LocalSourceData,
  //     "localSourceId",
  //     "localSource"
  //   );
  // }

  // const { data: companyData } = getCompany();
  // if (companyData) {
  //   addEnqPiFormFields.companyField.config.options = selectOptionsMaker(
  //     companyData,
  //     "companyId",
  //     "companyName",
  //     true
  //   );
  // }

  const { data: ServiceData } = getServiceType();
  if (ServiceData) {
    addEnqPiFormFields.serviceTypeField.config.options = selectOptionsMaker(
      ServiceData,
      "serviceTypeID",
      "serviceType"
    );
  }

  const [selectedCompanyData, setCompanyData] = useState<CompanyType>();

  const companyOnChangeHandler = (companyData: any) => {
    if (companyData.data) {
      setIsCompanyChange(true);
      setCompanyData(companyData.data);
    }
  };

  if (isCompanyChange) {
    let dataObj = cleanupObject(selectedCompanyData);
    addEnqPiFormFields.givenAddressField.config.setData = dataObj?.address;
    addEnqPiFormFields.zipField.config.setData = dataObj?.zip;
    addEnqPiFormFields.telNoField.config.setData = dataObj?.phone;
    addEnqPiFormFields.faxNoField.config.setData = dataObj?.fax;
    // if (cityData) {
    //   let data: any = returnObjectBasedOnID(
    //     cityData,
    //     "cityId",
    //     dataObj?.cityId,
    //     "cityId",
    //     "cityName"
    //   );
    //   addEnqPiFormFields.cityField.config.setData =
    //     data.length > 0
    //       ? [
    //           {
    //             label: data?.label,
    //             value: data?.value,
    //           },
    //         ]
    //       : [];
    // }
    // if (stateData) {
    //   let data: any = returnObjectBasedOnID(
    //     stateData,
    //     "stateId",
    //     dataObj?.stateId,
    //     "stateId",
    //     "stateName"
    //   );
    //   addEnqPiFormFields.stateField.config.setData =
    //     data.length > 0
    //       ? [
    //           {
    //             label: dataObj?.stateName,
    //             value: dataObj?.stateId,
    //           },
    //         ]
    //       : [];
    // }
    // if (countryData) {
    //   let data: any = returnObjectBasedOnID(
    //     countryData,
    //     "countryId",
    //     dataObj?.countryId,
    //     "countryId",
    //     "countryName"
    //   );
    //   addEnqPiFormFields.countryField.config.setData =
    //     data.length > 0
    //       ? [
    //           {
    //             label: dataObj?.countryName,
    //             value: dataObj?.countryId,
    //           },
    //         ]
    //       : [];
    // }

    addEnqPiFormFields.emailField.config.setData = dataObj?.email;
    addEnqPiFormFields.websiteField.config.setData = dataObj?.website;
    addEnqPiFormFields.contactField.config.setData = dataObj?.contactPerson;
    addEnqPiFormFields.designationField.config.setData = dataObj?.designation;
  }

  // addEnqPiFormFields.refNoField.config.setData = refNo;
  if (params.id) {
  } else {
    useEffect(() => {
      methods.reset();
      // getRefNo().then((refNo: any) => {
      //   if (refNo) {
      //     setRefNo(refNo.data);
      //   }
      // });
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
                      <Button
                        type={"submit"}
                        className={"btn btn-danger btn-sm"}
                      >
                        <i className="far fa-save"></i>Get Price
                      </Button>
                    </div>
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
