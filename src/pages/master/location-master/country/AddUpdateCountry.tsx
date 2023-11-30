import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  NewInput,
  NewSelect,
} from "@shared/index";
import {
  AddUpdateCountryType,
  addCoutryFormFields,
  useContinentApiCallHook,
  useCountryApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID } from "@utils/returnObjectBasedOnID";

export const AddUpdateCountry: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddUpdateCountryType>();
  const params = useParams();
  const { addCountryMutation, updateCountryMutation, getCountryData } =
    useCountryApiCallHook();
  const { mutateAsync: addCountry } = addCountryMutation();
  const { mutateAsync: updateCountry } = updateCountryMutation();
  const { getContinent } = useContinentApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Country" : "Add Country",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const onSubmit = handleSubmit((countryData): void => {
    let data: any = { ...countryData };
    data.continentId = +data.continentId["value"];
    if (params.id && countryData) {
      updateCountry({ id: params.id, ...data });
    } else {
      addCountry(data);
    }
  });

  const { data: countryData } = getCountryData(
    "" + params.id,
    params.id != undefined
  );

  const { data: continentData } = getContinent();

  useEffect(() => {
    let clonedCountryData = { ...countryData };
    if (countryData && continentData) {
      let id = countryData?.continentId;
      let data: any = returnObjectBasedOnID(
        continentData,
        "id",
        id,
        "id",
        "continent"
      );
      data.length
        ? (clonedCountryData.continentId = {
            label: data[0].label,
            value: data[0].value,
          })
        : [];
    }
    reset(clonedCountryData);
  }, [params.id, countryData, continentData]);

  useEffect(() => {
    if (continentData) {
      addCoutryFormFields.continentCountryField.config.options =
        selectOptionsMaker(continentData, "id", "continent");
    }
  }, [continentData?.length]);

  useEffect(() => {
    reset();
  }, [!params.id]);

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
                <NewInput
                  errors={errors}
                  register={register}
                  config={addCoutryFormFields.countryField}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addCoutryFormFields.continentCountryField}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addCoutryFormFields.countryCodeField}
                />
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
