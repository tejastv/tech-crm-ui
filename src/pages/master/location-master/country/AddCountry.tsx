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
  AddCountryType,
  ContinentType,
  addCoutryFormFields,
  useContinentApiCallHook,
  useCountryApiCallHook,
} from "@master/index";
import { queryKeys } from "@constants/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useNavigate } from "react-router-dom";

export const AddCountry: React.FC = () => {
  const methods = useForm<AddCountryType>();
  const { addCountry } = useCountryApiCallHook();
  const { getContinent } = useContinentApiCallHook();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Country",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: continentData } = useQuery<ContinentType[]>({
    queryKey: [queryKeys.CONTINENT_DATA],
    queryFn: getContinent,
    staleTime: Infinity,
  });

  if (continentData) {
    addCoutryFormFields.continentCountryField.config.options =
      selectOptionsMaker(continentData, "id", "continent");
  }

  const addCountryMutation = useMutation({
    mutationFn: addCountry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.COUNTRY_DATA] });
      navigate(-1);
    },
    onError: () => {
      console.log("Error");
    },
  });

  const onSubmit = methods.handleSubmit((countryData) => {
    let data: any = { ...countryData };
    data.continentId = +data.continentId["value"];
    addCountryMutation.mutate(data);
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
