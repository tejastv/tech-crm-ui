import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  // Input,
  NewInput,
  NewSelect,
  // Select,
} from "@shared/index";
import {
  CityFormType,
  StateType,
  cityFormFields,
  useCityApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID, selectOptionsMaker } from "@utils/index";
import _ from "lodash";

export const CityForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CityFormType>();
  const { addCityMutation, getCityData, updateCityMutation } =
    useCityApiCallHook();
  const { mutateAsync: addCity } = addCityMutation();
  const { mutateAsync: updateCity } = updateCityMutation();
  const params = useParams();
  const { getState } = useStateApiCallHook();
  const [stateOptions, setStateOptions] = useState<StateType[]>();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update City" : "Add City",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: stateData } = getState();

  useEffect(() => {
    if (stateData) {
      setStateOptions(
        _.orderBy(Object.values(stateData), ["stateName"], ["asc"])
      );
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    cityFormFields.state.config.options = options;
  }

  const { data: cityData } = getCityData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    if (cityData) {
      let clonedCityData = { ...cityData };
      if (stateOptions) {
        let id = cityData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateOptions,
          "stateId",
          id,
          "stateId",
          "stateName"
        );
        data.length
          ? (clonedCityData.stateId = {
              label: data[0].label,
              value: data[0].value,
            })
          : [];
      }
      reset(clonedCityData);
    }
  }, [cityData, params.id, stateData]);

  useEffect(() => {
    reset();
  }, [!params.id]);

  const onSubmit = handleSubmit((cityData): void => {
    let data: any = { ...cityData };
    data.stateId = +data.stateId["value"];
    if (params.id && cityData) {
      updateCity({ id: params.id, ...data });
    } else {
      addCity(data);
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
              <NewInput
                errors={errors}
                register={register}
                config={cityFormFields.cityField}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={cityFormFields.osPrintField}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={cityFormFields.state}
              />
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
