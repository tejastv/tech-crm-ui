import React, { useEffect } from "react";
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
  AddUpdateExecutiveType,
  addExecutiveFormFields,
  useCityApiCallHook,
  useExecutiveApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID } from "@utils/returnObjectBasedOnID";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const AddUpdateExecutive: React.FC = () => {
  const methods = useForm<AddUpdateExecutiveType>();
  const { addExecutiveMutation, getExecutiveData, updateExecutiveMutation } =
    useExecutiveApiCallHook();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { mutate: addExecutive } = addExecutiveMutation();
  const { mutate: updateExecutive } = updateExecutiveMutation();
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Sales Executive",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { data: cityData, isLoading: cityDataSuccess } = getCity();
  if (cityData) {
    addExecutiveFormFields.cityInformation2.config.options = selectOptionsMaker(
      cityData,
      "id",
      "cityName"
    );
  }

  const { data: stateData, isLoading: stateDataSuccess } = getState();
  if (stateData) {
    addExecutiveFormFields.stateInformation2.config.options =
      selectOptionsMaker(stateData, "stateId", "state");
  }

  if (params.id) {
    const { data: executiveData, isSuccess: executiveDataSuccess } =
      getExecutiveData("" + params.id);

    if (executiveDataSuccess) {
      addExecutiveFormFields.executiveInfomation2.config.setData =
        executiveData?.executive;
      addExecutiveFormFields.emailInformation2.config.setData =
        executiveData?.email;
      if (cityData) {
        let id = executiveData?.cityId;
        console.log(cityData);

        let data: any = returnObjectBasedOnID(
          cityData,
          "id",
          id,
          "id",
          "cityName"
        );
        console.log(data);

        addExecutiveFormFields.cityInformation2.config.setData = data
          ? {
              label: data?.cityName,
              value: data?.id,
            }
          : [];
      }
      if (stateData && stateDataSuccess) {
        let id = executiveData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateData,
          "stateId",
          id,
          "stateId",
          "state"
        );
        addExecutiveFormFields.stateInformation2.config.setData = data
          ? {
              label: data?.continent,
              value: data?.id,
            }
          : [];
      }
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((executiveData) => {
    let data: any = { ...executiveData };
    data.cityId = +data.cityId["value"];
    data.stateId = +data.stateId["value"];
    console.log(data);

    // if (params.id && executiveData) {
    //   updateExecutive({ id: params.id, ...data });
    // } else {
    //   addExecutive(data);
    // }
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
                      config={
                        addExecutiveFormFields.executiveInfomation2.config
                      }
                    />
                    <Input
                      config={addExecutiveFormFields.emailInformation2.config}
                    />
                    <Select
                      config={addExecutiveFormFields.cityInformation2.config}
                    />
                    {/* <Input
                      config={addExecutiveFormFields.cityInformation2.config}
                    /> */}
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Checkbox
                      config={
                        addExecutiveFormFields.checkboxInformation2.config
                      }
                    />
                    <Select
                      config={addExecutiveFormFields.stateInformation2.config}
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
