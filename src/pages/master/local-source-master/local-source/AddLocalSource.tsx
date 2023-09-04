import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  Select,
} from "@shared/index";
import { ContinentType, addCoutryFormFields, addLocalSrouceFormFields, useContinentApiCallHook } from "@master/index";
import { queryKeys } from "@constants/query-keys";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const AddSource: React.FC = () => {
  const methods = useForm();
  const { getContinent } = useContinentApiCallHook();
  const queryClient = useQueryClient();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Local Source",
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
    addLocalSrouceFormFields.continentLocalSourceField.config.options =
      selectOptionsMaker(continentData, "id", "continent");
  }

  // const addCountryMutation = useMutation({
  //   mutationFn: addCountry,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: [queryKeys.COUNTRY_DATA] });
  //     navigate(-1);
  //   },
  //   onError: () => {
  //     console.log("Error");
  //   },
  // });

  const onSubmit = methods.handleSubmit((countryData) => {
    let data: any = { ...countryData };
    data.continentId = +data.continentId["value"];
    // addCountryMutation.mutate(data);
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
                  <div className="card-body">
                    <Input
                      config={addLocalSrouceFormFields.localSource.config}
                    />
                    <Input config={addLocalSrouceFormFields.email.config} />
                    <Input config={addLocalSrouceFormFields.emailCC.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Select
                      config={addLocalSrouceFormFields.currencey.config}
                    />
                    <Select
                      config={addLocalSrouceFormFields.continentLocalSourceField.config}
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
        </FormProvider>
      </Card>
    </>
  );
};

