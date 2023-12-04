import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  NewInput,
  NewSelect,
} from "@shared/index";
import {
  LocalSourceFormType,
  localSourceFormFields,
  useLocalSourceApiCallHook,
  useCountryApiCallHook,
  useCurrencyApiCallHook,
  CountryType,
  LocalSourceType,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID } from "@utils/returnObjectBasedOnID";

export const LocalSourceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LocalSourceFormType>();
  const params = useParams();
  const {
    addLocalSourceMutation,
    updateLocalSourceMutation,
    getLocalSourceData,
  } = useLocalSourceApiCallHook();
  const { mutateAsync: addLocalSource } = addLocalSourceMutation();
  const { mutateAsync: updateLocalSource } = updateLocalSourceMutation();
  const { getCountry } = useCountryApiCallHook();
  const { getCurrency } = useCurrencyApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update LocalSource" : "Add Local Source",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

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
    localSourceFormFields.sourcecountryField.config.options = options;
  }

  const { data: currencyData, isSuccess: getCurrencySuccess } = getCurrency();
  if (currencyData) {
    localSourceFormFields.localsourcecurrenceyField.config.options =
      selectOptionsMaker(currencyData, "currencyId", "currencyType");
  }

  const onSubmit = handleSubmit((localsourceData) => {
    let data: any = { ...localsourceData };
    data.countryId = +data.countryId["value"];
    data.currencyId = +data.currencyId["value"];
    if (params.id && localsourceData) {
      updateLocalSource({ id: params.id, ...data });
    } else {
      addLocalSource(data);
    }
  });

  const { data: localsourceData, isSuccess: localsourceDataSuccess } =
    getLocalSourceData("" + params.id, params.id != undefined);

  if (params.id) {
    if (localsourceDataSuccess) {
      if (countryOptions && getCurrencySuccess) {
        let id = localsourceData?.countryId;
        let currencyId = localsourceData?.currencyId;
        let countrynamedata: any = returnObjectBasedOnID(
          countryOptions,
          "countryId",
          id,
          "countryId",
          "countryName"
        );
        let currencydata: any = returnObjectBasedOnID(
          currencyData,
          "currencyId",
          currencyId,
          "currencyId",
          "currencyType"
        );
        localSourceFormFields.sourcecountryField.config.setData =
          countrynamedata
            ? {
                label: countrynamedata.label,
                value: countrynamedata.value,
              }
            : [];
        localSourceFormFields.localsourcecurrenceyField.config.setData =
          currencydata
            ? {
                label: currencydata.label,
                value: currencydata.value,
              }
            : [];
      }
      localSourceFormFields.localSourceField.config.setData =
        localsourceData.localSource;
      localSourceFormFields.emailField.config.setData = localsourceData.email;
      localSourceFormFields.emailCCField.config.setData =
        localsourceData.emailCc;
    }
  }

  const mapLocalSourceFromToLocalSource = (formUserData: LocalSourceFormType) => {
    let localSourceData: Partial<LocalSourceType> = {
      localSourceId: ;
      localSource: ;
      email: formUserData.email;
      emailCc: formUserData.emailCc;
      countryName: formUserData.;
      currency: ;
      currencyId: ;
      countryId: ;
    };
    return localSourceData;
  };

  const mapUsertoFormUser = (userData: UserType) => {
    let formUserData: Partial<FormUserType> = {
      loginId: userData.user,
      password: userData.password,
      userName: userData.username,
      userType: addUserFormFields.userTypeData[userData.usertype],
    };
    return formUserData;
  };

  useEffect(() => {
    if (params.id) reset(mapUsertoFormUser(userData));
  }, [params.id]);

  useEffect(() => {
    reset();
  }, []);

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
                  config={localSourceFormFields.localSourceField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={localSourceFormFields.emailField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={localSourceFormFields.emailCCField}
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={localSourceFormFields.localsourcecurrenceyField}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={localSourceFormFields.sourcecountryField}
                />
              </div>
            </div>
          </div>
        </BorderLayout>
        <div className="card-body">
          <BorderLayout heading={cardConfig.formActionsConfig.heading}>
            <ActionButtons />
          </BorderLayout>
        </div>
      </form>
    </Card>
  );
};
