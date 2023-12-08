import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Checkbox,
  Input,
  Select,
} from "@shared/index";
import {
  ExecutiveFormType,
  CityType,
  StateType,
  executiveFormFields,
  useCityApiCallHook,
  useExecutiveApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID } from "@utils/returnObjectBasedOnID";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const ExecutiveForm: React.FC = () => {
  const methods = useForm<ExecutiveFormType>();
  const { addExecutiveMutation, getExecutiveData, updateExecutiveMutation } =
    useExecutiveApiCallHook();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { mutateAsync: addExecutive } = addExecutiveMutation();
  const { mutateAsync: updateExecutive } = updateExecutiveMutation();
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Sales Executive" : "Add Sales Executive",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const [cityOptions, setCityOptions] = useState<CityType[]>();

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "id", "cityName");
    executiveFormFields.cityInformation2.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();
  const [stateOptions, setStateOptions] = useState<StateType[]>();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData && Object.values(stateData).length]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    executiveFormFields.stateInformation2.config.options = options;
  }

  if (params.id) {
    const { data: executiveData, isSuccess: executiveDataSuccess } =
      getExecutiveData("" + params.id);

    if (executiveDataSuccess) {
      executiveFormFields.executiveInfomation2.config.setData =
        executiveData?.executive;
      executiveFormFields.emailInformation2.config.setData =
        executiveData?.email;
      if (cityOptions) {
        let id = executiveData?.cityId;
        let data: any = returnObjectBasedOnID(
          cityOptions,
          "id",
          id,
          "id",
          "cityName"
        );
        executiveFormFields.cityInformation2.config.setData = data
          ? {
              label: data?.label,
              value: data?.value,
            }
          : [];
      }
      if (stateOptions) {
        let id = executiveData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateOptions,
          "stateId",
          id,
          "stateId",
          "state"
        );
        executiveFormFields.stateInformation2.config.setData = data
          ? {
              label: data?.label,
              value: data?.value,
            }
          : [];
      }
      executiveFormFields.checkboxInformation2.config.setData =
        executiveData?.invoiceRequired;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((executiveData): void => {
    let data: any = { ...executiveData };
    data.cityId = +data.cityId["value"];
    data.stateId = +data.stateId["value"];
    data.invoiceRequired = eval(data.invoiceRequired);
    if (params.id && executiveData) {
      updateExecutive({ id: params.id, ...data });
    } else {
      addExecutive(data);
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
                  <div className="card-body">
                    <Input
                      config={executiveFormFields.executiveInfomation2.config}
                    />
                    <Input
                      config={executiveFormFields.emailInformation2.config}
                    />
                    <Select
                      config={executiveFormFields.cityInformation2.config}
                    />
                    {/* <Input
                      config={executiveFormFields.cityInformation2.config}
                    /> */}
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Checkbox
                      config={executiveFormFields.checkboxInformation2.config}
                    />
                    <Select
                      config={executiveFormFields.stateInformation2.config}
                    />
                    {/*<Input config={stateSupplier.config} />
                  <Input config={countrySupplier.config} />
                  <Input config={CurrenceySupplier.config} /> */}
                  </div>
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
