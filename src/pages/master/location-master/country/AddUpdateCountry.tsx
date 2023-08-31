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
  addCoutryFormFields,
  useContinentApiCallHook,
  useCountryApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";

export const AddUpdateCountry: React.FC = () => {
  const methods = useForm<AddUpdateCountryType>();
  const { addCountryMutation, updateCountryMutation } = useCountryApiCallHook();
  const { getContinent } = useContinentApiCallHook();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Country",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: continentData } = getContinent();

  if (continentData) {
    addCoutryFormFields.continentCountryField.config.options =
      selectOptionsMaker(continentData, "id", "continent");
  }

  if (params.id) {
    // const { data: countryData, isSuccess: countryDataSuccess } = getCountryData(
    //   "" + params.id
    // );
    // const country = addCoutryFormFields.countryField.config.name;
    // if (getContinentSuccess && countryDataSuccess) {
    //   const continentId = addCoutryFormFields.continentCountryField.config.name;
    //   if (continentId === "continentId" && countryData?.continentId) {
    //     addCoutryFormFields.continentCountryField.config.selectedValue =
    //       countryData?.continentId;
    //   }
    // }
    // const countryField = addCoutryFormFields.countryCodeField.config.name;
    // if (country === "countryName" && countryData?.countryName) {
    //   methods.setValue(country, countryData?.countryName);
    // }
    // if (countryField === "countryCode" && countryData?.countryCode) {
    //   methods.setValue(countryField, countryData?.countryCode);
    // }
  }

  const { mutate: addCountry } = addCountryMutation();
  const { mutate: updateCountry } = updateCountryMutation();

  const onSubmit = methods.handleSubmit((countryData) => {
    let data: any = { ...countryData };
    console.log(data);
    data.continentId = +data.continentId["value"];
    if (params.id && countryData) {
      updateCountry({ id: params.id, ...data });
    } else {
      addCountry(data);
    }
  });

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
