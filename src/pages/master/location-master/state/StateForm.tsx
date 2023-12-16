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
  CountryType,
  StateFormType,
  StateType,
  stateFormFields,
  useCountryApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { selectOptionsMaker } from "@utils/index";

export const StateForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<StateFormType>();
  const { addStateMutation, updateStateMutation, getStateData } =
    useStateApiCallHook();
  const params = useParams();
  const { state: localStateData } = useLocation();
  const { mutateAsync: addState } = addStateMutation();
  const { mutateAsync: updateState } = updateStateMutation();
  const { getCountry } = useCountryApiCallHook();
  const [countryOptions, setCountryOptions] = useState<CountryType[]>();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update State" : "Add State",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: stateData } = getStateData(
    "" + params.id,
    !localStateData && params.id !== undefined
  );

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
    stateFormFields.country.config.options = options;
  }

  useEffect(() => {
    if (params.id) {
      if (stateData && Object.values(stateData).length > 0) {
        reset(mapFromStateData(stateData));
      }
    }
  }, [params.id, countryOptions, stateData]);

  useEffect(() => {
    if (params.id) {
      if (localStateData !== null) {
        reset(mapFromStateData(localStateData));
      }
    }
  }, [params.id, countryOptions, localStateData]);

  const mapFromStateData = (stateData: StateType) => {
    let formStateData: Partial<StateFormType> = {
      stateName: stateData.stateName,
      stateCodeN: stateData.stateCodeN,
      stateCodeA: stateData.stateCodeA,
    };
    if (countryData && stateData?.countryId) {
      let country = countryData[stateData.countryId];
      formStateData.countryId = {
        label: country.countryName,
        value: country.countryId,
      };
    }
    return formStateData;
  };

  const mapFromStateForm = (formUserData: StateFormType) => {
    let stateData: Partial<StateType> = {
      state: formUserData.stateName,
      stateCodeN: formUserData.stateCodeN,
      stateCodeA: formUserData.stateCodeA,
    };
    if (formUserData.countryId) {
      stateData.countryId = formUserData.countryId.value;
    }
    return stateData;
  };

  const onSubmit = handleSubmit((stateData): void => {
    let stateReqData: Partial<StateType> = mapFromStateForm(stateData);
    if (params.id && stateReqData) {
      updateState({ id: +params.id, ...stateReqData });
    } else {
      addState(stateReqData);
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
                config={stateFormFields.stateField}
              />
              <NewInput
                errors={errors}
                register={register}
                config={stateFormFields.numbericCodeField}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={stateFormFields.stateCodeField}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={stateFormFields.country}
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
