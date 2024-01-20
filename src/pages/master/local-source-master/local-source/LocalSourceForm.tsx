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
  CurrencyType,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useLocation, useParams } from "react-router-dom";
import _ from "lodash";

export const LocalSourceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<LocalSourceFormType>();
  const params = useParams();
  const { state: localLocalSourceData } = useLocation();
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
  const [currencyOption, setCurrencyOption] = useState<CurrencyType[]>();

  useEffect(() => {
    if (countryData) {
      setCountryOptions(
        _.orderBy(Object.values(countryData), ["countryName"], ["asc"])
      );
    }
  }, [countryData]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    localSourceFormFields.sourcecountryField.config.options = options;
  }

  const { data: currencyData } = getCurrency();

  useEffect(() => {
    if (currencyData) {
      setCurrencyOption(Object.values(currencyData));
    }
  }, [currencyData && Object.values(currencyData).length]);

  if (currencyOption?.length) {
    let options = selectOptionsMaker(
      currencyOption,
      "currencyId",
      "currencyType"
    );
    localSourceFormFields.localsourcecurrenceyField.config.options = options;
  }

  const { data: localsourceData } = getLocalSourceData(
    "" + params.id,
    !localLocalSourceData && params.id !== undefined
  );

  const reqBodyMap = (localSourceFormData: LocalSourceFormType) => {
    let localSourceData: Partial<LocalSourceType> = {
      localSource: localSourceFormData.localSource,
      email: localSourceFormData.email,
      emailCc: localSourceFormData.emailCc,
    };
    if (currencyData && localSourceFormData?.currencyId) {
      localSourceData.currencyId = localSourceFormData.currencyId.value;
    }
    if (countryData && localSourceFormData?.countryId) {
      localSourceData.countryId = localSourceFormData.countryId.value;
    }
    return localSourceData;
  };

  const mapLocalSourceToLocalSourceFrom = (
    localSourceData: LocalSourceType
  ) => {
    let localSourceFormData: Partial<LocalSourceFormType> = {
      localSource: localSourceData.localSource,
      email: localSourceData.email,
      emailCc: localSourceData?.emailCc,
    };
    if (currencyData && localSourceData?.currencyId) {
      let data = currencyData[localSourceData.currencyId];
      data &&
        (localSourceFormData.currencyId = {
          label: data.currencySymbol,
          value: data.currencyId,
        });
    }
    if (countryData && localSourceData?.countryId != null) {
      let data = countryData[localSourceData.countryId];
      data &&
        (localSourceFormData.countryId = {
          label: data.countryName,
          value: data.countryId,
        });
    }
    return localSourceFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (localLocalSourceData !== null) {
        reset(mapLocalSourceToLocalSourceFrom(localLocalSourceData));
      }
    }
  }, [params.id, localLocalSourceData, countryOptions, currencyOption]);

  useEffect(() => {
    if (params.id) {
      if (localsourceData && Object.values(localsourceData).length > 0) {
        reset(mapLocalSourceToLocalSourceFrom(localsourceData));
      }
    }
  }, [params.id, localsourceData, countryOptions, currencyOption]);

  const onSubmit = handleSubmit((localsourceData) => {
    let localSourceData: Partial<LocalSourceType> = reqBodyMap(localsourceData);
    if (params.id && localsourceData) {
      updateLocalSource({ id: +params.id, ...localSourceData });
    } else {
      addLocalSource(localSourceData);
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
