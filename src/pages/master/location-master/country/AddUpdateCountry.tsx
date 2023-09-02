import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  Select,
} from "@shared/index";
import {
  AddUpdateCountryType,
  ContinentType,
  addCoutryFormFields,
  useContinentApiCallHook,
  useCountryApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";

export const AddUpdateCountry: React.FC = () => {
  const methods = useForm<AddUpdateCountryType>();
  const params = useParams();
  const { addCountryMutation, updateCountryMutation, getCountryData } =
    useCountryApiCallHook();
  const { mutate: addCountry } = addCountryMutation();
  const { mutate: updateCountry } = updateCountryMutation();
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

  const { data: continentData, isSuccess: getContinentSuccess } =
    getContinent();

  if (continentData) {
    addCoutryFormFields.continentCountryField.config.options =
      selectOptionsMaker(continentData, "id", "continent");
  }

  const valueFromId = (continentData: ContinentType[], id: number) =>
    continentData.find((continent) => continent.id === id);

  const onSubmit = methods.handleSubmit((countryData) => {
    let data: any = { ...countryData };
    data.continentId = +data.continentId["value"];
    if (params.id && countryData) {
      updateCountry({ id: params.id, ...data });
    } else {
      addCountry(data);
    }
  });

  if (params.id) {
    const { data: countryData, isSuccess: countryDataSuccess } = getCountryData(
      "" + params.id
    );
    if (countryDataSuccess) {
      if (getContinentSuccess) {
        let id = countryData?.continentId;
        let data = valueFromId(continentData, id);
        addCoutryFormFields.continentCountryField.config.setData = data
          ? {
              label: data?.continent,
              value: data?.id,
            }
          : [];
      }
      addCoutryFormFields.countryField.config.setData = countryData.countryName;
      addCoutryFormFields.countryCodeField.config.setData =
        countryData.countryCode;
    }
  }

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
            className="p-t-20"
          >
            <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <Input config={addCoutryFormFields.countryField.config} />
                  <Select
                    config={addCoutryFormFields.continentCountryField.config}
                  />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={addCoutryFormFields.countryCodeField.config} />
                  {/* <Select
                    config={addCoutryFormFields.localSourceField.config}
                  /> */}
                </div>
              </div>
            </BorderLayout>
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <ActionButtons />
            </BorderLayout>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
