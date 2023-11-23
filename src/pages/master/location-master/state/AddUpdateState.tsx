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
  AddUpdateStateType,
  addStateFormFields,
  useCountryApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID, selectOptionsMaker } from "@utils/index";

export const AddUpdateState: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddUpdateStateType>();
  const { addStateMutation, updateStateMutation, getStateData } =
    useStateApiCallHook();
  const params = useParams();
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
    let clonedStateData = { ...stateData };
    if (countryData && stateData) {
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
    reset(clonedStateData);
  }, [params.id, countryData, stateData]);

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

  const onSubmit = handleSubmit((stateData): void => {
    let data: any = { ...stateData };
    data.countryId = +data.countryId["value"];
    if (params.id && stateData) {
      updateState({ id: params.id, ...data });
    } else {
      addState(data);
    }
  });

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        {/* <FormProvider {...methods}> */}
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
        {/* </FormProvider> */}
      </Card>
    </>
  );
};
