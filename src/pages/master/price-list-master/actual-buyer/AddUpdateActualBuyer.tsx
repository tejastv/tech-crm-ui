// AddCompany.tsx
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  InputWithText,
  Select,
} from "@shared/index";
import {
  AddUpdateActualBuyerType,
  addActualBuyersFormFields,
  useActualBuyerApiCallHook,
  useCityApiCallHook,
  useClientApiCallHook,
  useCountryApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { cleanupObject } from "@utils/cleanUpObject";
import { useParams } from "react-router-dom";

export const AddUpdateActualBuyer: React.FC = () => {
  const methods = useForm<AddUpdateActualBuyerType>();
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Company Master",
      heading: "Company Details",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  // const { getClient } = useClientApiCallHook();
  // const { data: clientData } = getClient();
  const { addActualBuyerMutation, updateActualBuyerMutation } =
    useActualBuyerApiCallHook();
  const { mutateAsync: updateActualBuyer } = updateActualBuyerMutation();
  const { mutateAsync: addActualBuyer } = addActualBuyerMutation();
  const { getCity } = useCityApiCallHook();
  const { data: cityData } = getCity();
  const { getState } = useStateApiCallHook();
  const { data: stateData } = getState();
  const { getCountry } = useCountryApiCallHook();
  const { data: countryData } = getCountry();

  if (cityData) {
    addActualBuyersFormFields.cityactualbuyer.config.options =
      selectOptionsMaker(cityData, "id", "cityName");
  }

  if (stateData) {
    addActualBuyersFormFields.stateactualbuyer.config.options =
      selectOptionsMaker(stateData, "stateId", "state");
  }

  if (countryData) {
    addActualBuyersFormFields.countryactualbuyer.config.options =
      selectOptionsMaker(countryData, "countryId", "countryName");
  }

  if ([]) {
    addActualBuyersFormFields.clientactualbuyer.config.options =
      selectOptionsMaker([], "clientID", "clientName");
  }

  const onSubmit = methods.handleSubmit((actualBuyerData): void => {
    let data: any = { ...cleanupObject(actualBuyerData) };
    if (data.stateId) {
      data.stateId = data.stateId.value;
    }
    if (data.countryId) {
      data.countryId = data.countryId.value;
    }
    if (data.cityId) {
      data.cityId = data.cityId.value;
    }
    console.log(data);
    if (params.id && data) {
      updateActualBuyer({ id: params.id, ...data });
    } else {
      addActualBuyer(data);
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
                    <Select
                      config={
                        addActualBuyersFormFields.clientactualbuyer.config
                      }
                    />
                    <Input
                      config={addActualBuyersFormFields.nameactualbuyer.config}
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.addressactualbuyer.config
                      }
                    />
                    <Input
                      config={addActualBuyersFormFields.telnoactualbuyer.config}
                    />
                    <Input
                      config={addActualBuyersFormFields.emailactualbuyer.config}
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.contactactualbuyer.config
                      }
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.designationactualbuyer.config
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Select
                      config={addActualBuyersFormFields.cityactualbuyer.config}
                    />
                    <Select
                      config={addActualBuyersFormFields.stateactualbuyer.config}
                    />
                    <Input config={addActualBuyersFormFields.PIN.config} />
                    <Select
                      config={
                        addActualBuyersFormFields.countryactualbuyer.config
                      }
                    />
                    <Input
                      config={addActualBuyersFormFields.faxnoactualbuyer.config}
                    />
                    <Input
                      config={
                        addActualBuyersFormFields.websiteactualbuyer.config
                      }
                    />
                    <Input
                      config={addActualBuyersFormFields.cstactualbuyer.config}
                    />
                    <Input
                      config={addActualBuyersFormFields.gstnactualbuyer.config}
                    />
                    {/* <div className="col-md-12"> */}

                    {/* <p
                      id="name45"
                      className="form-text text-red text-red-custom"
                    > */}
                    <InputWithText
                      config={
                        addActualBuyersFormFields.actualbuyergstnote.config
                      }
                    />
                    {/* </p> */}
                    {/* </div> */}
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
