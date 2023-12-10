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

  // city api call
  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      // setOptions()
      setCityOptions(Object.values(cityData));
    }
  }, [cityData && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    companyFormFields.city.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData && Object.values(stateData).length]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    companyFormFields.state.config.options = options;
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
    companyFormFields.country.config.options = options;
  }

  const { data: companyMasterData } = getCompanyData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    if (companyMasterData) {
      let clonedCompanyData = { ...companyMasterData };
      if (companyMasterData && cityOptions) {
        let id = companyMasterData?.cityId;
        let data: any = returnObjectBasedOnID(
          cityOptions,
          "cityId",
          id,
          "cityId",
          "cityName"
        );
        data.length
          ? (clonedCompanyData.cityId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (companyMasterData && stateOptions) {
        let id = companyMasterData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateOptions,
          "stateId",
          id,
          "stateId",
          "stateName"
        );
        data.length
          ? (clonedCompanyData.stateId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      if (companyMasterData && countryOptions) {
        let id = companyMasterData?.countryId;
        let data: any = returnObjectBasedOnID(
          countryOptions,
          "countryId",
          id,
          "countryId",
          "countryName"
        );
        data.length
          ? (clonedCompanyData.countryId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      reset(clonedCompanyData);
    }
  }, [params.id, companyMasterData, cityOptions, stateOptions, countryOptions]);

  useEffect(() => {
    reset();
  }, [!params.id]);

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
    let data: any = { ...cleanupObject(companyData) };
    if (data.cityId) {
      data.cityId = +data.cityId["value"];
    }
    if (data.stateId) {
      data.stateId = +data.stateId["value"];
    }
    if (data.countryId) {
      data.countryId = +data.countryId["value"];
    }
    if (data.companyType) {
      data.companyType = +data.companyType;
    }
    console.log(data);
    if (params.id && data) {
      updateCompany({ id: params.id, ...data });
    } else {
      addCompany(data);
    }
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
    </>
  );
};
