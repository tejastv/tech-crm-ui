// AddUpdateCompany.tsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  NewDatePicker,
  NewInput,
  NewSelect,
  NewRadio,
} from "@shared/index";

import {
  CompanyFormType,
  companyFormFields,
  useCompanyApiCallHook,
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
  CityType,
  StateType,
  CountryType,
  ClientFormType,
  ClientType,
  CompanyType,
} from "@master/index";

import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";
import {
  returnObjectBasedOnID,
  cleanupObject,
  returnFormatedObjectElseEmptyArray,
} from "@utils/index";

export const CompanyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<CompanyFormType>();
  const params = useParams();
  const { addCompanyMutation, updateCompanyMutation, getCompanyData } =
    useCompanyApiCallHook();
  const { mutate: addCompany } = addCompanyMutation();
  const { mutate: updateCompany } = updateCompanyMutation();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const [cityOptions, setCityOptions] = useState<CityType[]>();
  const [stateOptions, setStateOptions] = useState<StateType[]>();
  const [countryOptions, setCountryOptions] = useState<CountryType[]>();

  // const [options, setOptions] = useState<{
  //   cityOptions: CityType;
  //   stateOptions: StateType;
  //   countryOptions: CountryType;
  // }>();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Company Master",
      heading: "Company Details",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    companyFormFields.city.config.options = options;
  }

  const { data: stateData } = getState();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    companyFormFields.state.config.options = options;
  }

  const { data: countryData } = getCountry();

  useEffect(() => {
    if (countryData) {
      setCountryOptions(Object.values(countryData));
    }
  }, [countryData]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    companyFormFields.country.config.options = options;
  }

  const { data: companyMasterData } = getCompanyData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    if (params.id) {
      if (companyMasterData && Object.values(companyMasterData).length > 0) {
        reset(mapCompanyToCompanyForm(companyMasterData));
      }
    }
  }, [params.id, companyMasterData, cityOptions, stateOptions, countryOptions]);

  const mapCompanyToCompanyForm = (clientData: CompanyType) => {
    let clientFormData: Partial<CompanyFormType> = {
      address: clientData.address,
      bankers: clientData.bankers,
      bulkEnquiryId: clientData.bulkEnquiryId,
      cityName: clientData.cityName,
      cmie: clientData.cmie,
      companyName: clientData.companyName,
      companyRegNo: clientData.companyRegNo,
      companyType: clientData.companyType,
      contactPerson: clientData.contactPerson,
      countryName: clientData.countryName,
      designation: clientData.designation,
      email: clientData.email,
      enteredBy: clientData.enteredBy,
      fax: clientData.fax,
      financialYear: clientData.financialYear,
      givenName: clientData.givenName,
      hsCode: clientData.hsCode,
      incorporationDate: clientData.incorporationDate,
      modifiedBy: clientData.modifiedBy,
      notes: clientData.notes,
      ourRefNo: clientData.ourRefNo,
      phone: clientData.phone,
      recFin: clientData.recFin,
      records: clientData.records,
      regdOffice: clientData.regdOffice,
      reportFileName: clientData.reportFileName,
      reportFilePath: clientData.reportFilePath,
      rocStatus: clientData.rocStatus,
      state: clientData.state,
      status: clientData.status,
      website: clientData.website,
      zip: clientData.zip,
    };
    if (cityData && clientData?.cityId) {
      let data = cityData[clientData.cityId];
      data &&
        (clientFormData.cityId = {
          label: data.cityName,
          value: data.cityId,
        });
    }
    if (stateData && clientData?.stateId) {
      let data = stateData[clientData.stateId];
      data &&
        (clientFormData.stateId = {
          label: data.stateName,
          value: data.stateId,
        });
    }
    if (countryData && clientData?.countryId) {
      let data = countryData[clientData.countryId];
      data &&
        (clientFormData.countryId = {
          label: data.countryName,
          value: data.countryId,
        });
    }
    return clientFormData;
  };

  const mapCompanyFormToCompanyReq = (clientFormData: CompanyFormType) => {
    let clientReqData: Partial<CompanyType> = {
      address: clientFormData.address,
      bankers: clientFormData.bankers,
      bulkEnquiryId: clientFormData.bulkEnquiryId,
      cityName: clientFormData.cityName,
      cmie: clientFormData.cmie,
      companyName: clientFormData.companyName,
      companyRegNo: clientFormData.companyRegNo,
      companyType: clientFormData.companyType,
      contactPerson: clientFormData.contactPerson,
      countryName: clientFormData.countryName,
      designation: clientFormData.designation,
      email: clientFormData.email,
      enteredBy: clientFormData.enteredBy,
      fax: clientFormData.fax,
      financialYear: clientFormData.financialYear,
      givenName: clientFormData.givenName,
      hsCode: clientFormData.hsCode,
      incorporationDate: clientFormData.incorporationDate,
      modifiedBy: clientFormData.modifiedBy,
      notes: clientFormData.notes,
      ourRefNo: clientFormData.ourRefNo,
      phone: clientFormData.phone,
      recFin: clientFormData.recFin,
      records: clientFormData.records,
      regdOffice: clientFormData.regdOffice,
      reportFileName: clientFormData.reportFileName,
      reportFilePath: clientFormData.reportFilePath,
      rocStatus: clientFormData.rocStatus,
      state: clientFormData.state,
      status: clientFormData.status,
      website: clientFormData.website,
      zip: clientFormData.zip,
    };
    if (cityData && clientFormData?.cityId) {
      clientReqData.cityId = clientFormData.cityId.value;
    }
    if (stateData && clientFormData?.stateId) {
      clientReqData.stateId = clientFormData.stateId.value;
    }
    if (countryData && clientFormData?.countryId) {
      clientReqData.countryId = clientFormData.countryId.value;
    }
    return cleanupObject(clientReqData);
  };

  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      console.log(selectedOption);
      if (companyFormFields.state.config.name === "stateId") {
        let data = returnFormatedObjectElseEmptyArray(
          selectedOption.data.stateId,
          selectedOption.data,
          "stateId",
          "stateName"
        );
        data.length > 0 &&
          setValue(companyFormFields.state.config.name, data[0]);
      }
      if (companyFormFields.country.config.name === "countryId") {
        let data = returnFormatedObjectElseEmptyArray(
          selectedOption.data.countryId,
          selectedOption.data,
          "countryId",
          "countryName"
        );
        data.length > 0 &&
          setValue(companyFormFields.country.config.name, data[0]);
      }
    }
  };

  const onSubmit = handleSubmit((companyData) => {
    let reqObj: Partial<CompanyType> = mapCompanyFormToCompanyReq(companyData);
    console.log(reqObj);
    if (params.id && reqObj) {
      updateCompany({ companyId: +params.id, ...reqObj });
    } else {
      addCompany(reqObj);
    }
  });

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.nameField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.addressField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.zip}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  onChange={handleSelectChange}
                  config={companyFormFields.city}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={companyFormFields.state}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={companyFormFields.country}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.officeAddressField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.telNo}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.faxNo}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.emailField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.website}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.contactPerson}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.designation}
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.hscode}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.givenName}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.referenceno}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.financialyear}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.regno}
                />
                <NewRadio
                  errors={errors}
                  register={register}
                  control={control}
                  config={companyFormFields.companyType}
                />
                <NewDatePicker
                  errors={errors}
                  register={register}
                  config={companyFormFields.incorporationDate}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.bankers}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.notes}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.cmie}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.rocStatus}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.recodes}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={companyFormFields.recfin}
                />
              </div>
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
