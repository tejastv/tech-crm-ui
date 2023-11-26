import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  NewInput,
  NewSelect,
  Select,
} from "@shared/index";
import {
  StateFormType,
  StateType,
  addStateFormFields,
  useCountryApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { returnObjectBasedOnID, selectOptionsMaker } from "@utils/index";

export const AddUpdateState: React.FC = () => {
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

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update State" : "Add State",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: countryData } = getCountry();

  const { data: stateData } = getStateData(
    "" + params.id,
    params.id != undefined
  );

  useEffect(() => {
    let clonedStateData;
    if (Object.values(localStateData).length > 0) {
      clonedStateData = localStateData;
    } else if (stateData && Object.values(stateData).length > 0) {
      clonedStateData = stateData;
    }
    if (countryData && (stateData || localStateData)) {
      let id = stateData?.countryId;
      let data: any = returnObjectBasedOnID(
        countryData,
        "countryId",
        id,
        "countryId",
        "countryName"
      );
      data.length
        ? (clonedStateData.countryId = {
            label: data[0].label,
            value: data[0].value,
          })
        : [];
    }
    reset(mapUsertoFormUser(clonedStateData));
  }, [params.id, localStateData, countryData, stateData]);

  const mapUsertoFormUser = (stateData: StateType) => {
    let formStateData: Partial<StateType> = {
      state: stateData.state,
      stateCodeN: stateData.stateCodeN,
      stateCodeA: stateData.stateCodeA,
    };
    if (stateData.countryId) {
      stateData.countryId = stateData.countryId;
    }
    return formStateData;
  };

  useEffect(() => {
    reset();
  }, [!params.id]);

  useEffect(() => {
    if (countryData) {
      addStateFormFields.country.config.options = selectOptionsMaker(
        countryData,
        "countryId",
        "countryName"
      );
    }
  }, [countryData?.length]);

  const mapFormUsertoUser = (formUserData: StateFormType) => {
    let stateData: Partial<StateType> = {
      state: formUserData.state,
      stateCodeN: formUserData.stateCodeN,
      stateCodeA: formUserData.stateCodeA,
    };
    if (formUserData.countryId) {
      stateData.countryId = formUserData.countryId.value;
    }
    return stateData;
  };

  const onSubmit = handleSubmit((stateData): void => {
    let stateReqData: Partial<StateType> = mapFormUsertoUser(stateData);
    if (params.id && stateReqData) {
      updateState({ id: params.id, ...stateReqData });
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
                config={addStateFormFields.stateField}
              />
              <NewInput
                errors={errors}
                register={register}
                config={addStateFormFields.numbericCodeField}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={addStateFormFields.stateCodeField}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={addStateFormFields.country}
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
