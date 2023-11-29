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
  AddUpdateCompanyType,
  addCompanyFormFields,
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

export const AddUpdateCompany: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<AddUpdateCompanyType>();
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
      setCityOptions(Object.values(cityData));
    }
  }, [cityData?.length && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName", true);
    addCompanyFormFields.city.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();

  useEffect(() => {
    if (stateData) {
      setStateOptions(stateData);
    }
  }, [stateData?.length && Object.values(stateData).length]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    addCompanyFormFields.state.config.options = options;
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
    addCompanyFormFields.country.config.options = options;
  }

  const { data: companyMasterData } = getCompanyData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    if (companyMasterData) {
      let clonedCompanyData = { ...companyMasterData };
      if (companyMasterData && cityData) {
        let id = companyMasterData?.cityId;
        let data: any = returnObjectBasedOnID(
          cityData,
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
      if (companyMasterData && stateData) {
        let id = companyMasterData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateData,
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
      if (companyMasterData && countryData) {
        let id = companyMasterData?.countryId;
        let data: any = returnObjectBasedOnID(
          countryData,
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
  }, [params.id, companyMasterData, countryData, stateData, cityData]);

  useEffect(() => {
    reset();
  }, [!params.id]);

  const handleSelectChange = (selectedOption: any) => {
    if (selectedOption) {
      console.log(selectedOption);
      if (addCompanyFormFields.state.config.name === "stateId") {
        let data = returnFormatedObjectElseEmptyArray(
          selectedOption.data.stateId,
          selectedOption.data,
          "stateId",
          "stateName"
        );
        data.length > 0 &&
          setValue(addCompanyFormFields.state.config.name, data[0]);
      }
      if (addCompanyFormFields.country.config.name === "countryId") {
        let data = returnFormatedObjectElseEmptyArray(
          selectedOption.data.countryId,
          selectedOption.data,
          "countryId",
          "countryName"
        );
        data.length > 0 &&
          setValue(addCompanyFormFields.country.config.name, data[0]);
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
                    config={addCompanyFormFields.nameField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.addressField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.zip}
                  />
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    onChange={handleSelectChange}
                    config={addCompanyFormFields.city}
                  />
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={addCompanyFormFields.state}
                  />
                  <NewSelect
                    errors={errors}
                    register={register}
                    control={control}
                    config={addCompanyFormFields.country}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.officeAddressField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.telNo}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.faxNo}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.emailField}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.website}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.contactPerson}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.designation}
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="card-body">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.hscode}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.givenName}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.referenceno}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.financialyear}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.regno}
                  />
                  <NewRadio
                    errors={errors}
                    register={register}
                    control={control}
                    config={addCompanyFormFields.companyType}
                  />
                  <NewDatePicker
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.incorporationDate}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.bankers}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.notes}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.cmie}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.rocStatus}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.recodes}
                  />
                  <NewInput
                    errors={errors}
                    register={register}
                    config={addCompanyFormFields.recfin}
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
