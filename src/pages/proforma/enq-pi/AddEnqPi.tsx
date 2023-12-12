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
import { enqPiFormFields } from "@proforma/index";
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
    enqPiFormFields.cityField.config.options = options;
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
    enqPiFormFields.stateField.config.options = options;
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
    enqPiFormFields.countryField.config.options = options;
  }

  // const { data: ClientData } = getClient();
  // if (ClientData) {
  //   enqPiFormFields.clientField.config.options = selectOptionsMaker(
  //     ClientData,
  //     "clientId",
  //     "clientName"
  //   );
  // }

  const { data: fYearData } = getFinYear();
  if (fYearData) {
    enqPiFormFields.fYearField.config.options = selectOptionsMaker(
      fYearData,
      "finYear",
      "finYear"
    );
  }

  // const { data: SourceData } = getSource();
  // if (SourceData) {
  //   enqPiFormFields.sourceField.config.options = selectOptionsMaker(
  //     SourceData,
  //     "sourceId",
  //     "source"
  //   );
  // }

  // const { data: LocalSourceData } = getLocalSource();
  // if (LocalSourceData) {
  //   enqPiFormFields.localSourceField.config.options = selectOptionsMaker(
  //     LocalSourceData,
  //     "localSourceId",
  //     "localSource"
  //   );
  // }

  // const { data: companyData } = getCompany();
  // if (companyData) {
  //   enqPiFormFields.companyField.config.options = selectOptionsMaker(
  //     companyData,
  //     "companyId",
  //     "companyName",
  //     true
  //   );
  // }

  const { data: ServiceData } = getServiceType();
  if (ServiceData) {
    enqPiFormFields.serviceTypeField.config.options = selectOptionsMaker(
      ServiceData,
      "serviceTypeId",
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
    enqPiFormFields.givenAddressField.config.setData = dataObj?.address;
    enqPiFormFields.zipField.config.setData = dataObj?.zip;
    enqPiFormFields.telNoField.config.setData = dataObj?.phone;
    enqPiFormFields.faxNoField.config.setData = dataObj?.fax;
    // if (cityData) {
    //   let data: any = returnObjectBasedOnID(
    //     cityData,
    //     "cityId",
    //     dataObj?.cityId,
    //     "cityId",
    //     "cityName"
    //   );
    //   enqPiFormFields.cityField.config.setData =
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
    //   enqPiFormFields.stateField.config.setData =
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
    //   enqPiFormFields.countryField.config.setData =
    //     data.length > 0
    //       ? [
    //           {
    //             label: dataObj?.countryName,
    //             value: dataObj?.countryId,
    //           },
    //         ]
    //       : [];
    // }

    enqPiFormFields.emailField.config.setData = dataObj?.email;
    enqPiFormFields.websiteField.config.setData = dataObj?.website;
    enqPiFormFields.contactField.config.setData = dataObj?.contactPerson;
    enqPiFormFields.designationField.config.setData = dataObj?.designation;
  }

  // enqPiFormFields.refNoField.config.setData = refNo;
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
                    config={enqPiFormFields.companyField.config}
                    onChangeHandler={companyOnChangeHandler}
                  />
                </div>
                {/* <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.companyIdField.config} />
                </div> */}
                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.yearField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="row">
                    <div className="col-md-8 col-xs-12">
                      <Input config={enqPiFormFields.refNoField.config} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <small className="enquirynote">
                        <InputWithText
                          config={enqPiFormFields.refNote.config}
                        />
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.givenAddressField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.countryField.config} />
                  <Select config={enqPiFormFields.stateField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.cityField.config} />
                  <Input config={enqPiFormFields.zipField.config} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.telNoField.config} />
                  <Input config={enqPiFormFields.faxNoField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.emailField.config} />
                  <Input config={enqPiFormFields.websiteField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.contactField.config} />
                  <Input config={enqPiFormFields.designationField.config} />
                </div>
              </div>
              <hr className="mt-0" />
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.recdOnField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.dueOnField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.serviceTypeField.config} />
                </div>

                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.printStatusField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.crAmountField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.enqStatusField.config} />
                </div>

                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.notesForField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.instructionField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.cmieField.config} />
                </div>

                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.rocStatusField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.recordsField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.recFinField.config} />
                </div>

                <div className="col-md-4 col-xs-12">
                  <Select config={enqPiFormFields.sourceField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.priceField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.adjustField.config} />
                </div>

                <div className="col-md-4 col-xs-12">
                  <div className="row">
                    <div className="col-md-10 col-xs-12">
                      <Select
                        config={enqPiFormFields.localSourceField.config}
                      />
                    </div>
                    <div className="col-md-2 pt-2 col-xs-12">
                      <SingleCheckbox
                        config={enqPiFormFields.allField.config}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.fYearField.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={enqPiFormFields.bankField.config} />
                </div>
              </div>
              <hr className="m-0" />
              <div className="row">
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    {/* <Input config={enqPiFormFields.clientRefField.config} /> */}
                    <Select config={enqPiFormFields.clientField.config} />
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    <Input config={enqPiFormFields.requestNoField.config} />
                  </div>
                </div>
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                    {/* <Input config={enqPiFormFields.clientIdField.config} /> */}
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
