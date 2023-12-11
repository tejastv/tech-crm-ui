// AddCompany.tsx
import React, { useEffect, useState } from "react";
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
  ActualBuyerFormType,
  CityType,
  ClientType,
  CountryType,
  StateType,
  actualBuyersFormFields,
  useActualBuyerApiCallHook,
  useCityApiCallHook,
  useClientApiCallHook,
  useCountryApiCallHook,
  useStateApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { cleanupObject } from "@utils/cleanUpObject";
import { useParams } from "react-router-dom";

export const ActualBuyerForm: React.FC = () => {
  const methods = useForm<ActualBuyerFormType>();
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Actual Buyer",
      heading: "Company Details",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const { getClient } = useClientApiCallHook();
  const { data: clientData } = getClient();
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

  const [cityOptions, setCityOptions] = useState<CityType[]>();
  const [clientOptions, setClientOptions] = useState<ClientType[]>();

  useEffect(() => {
    if (cityData) {
      setCityOptions(Object.values(cityData));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "id", "cityName");
    actualBuyersFormFields.cityactualbuyer.config.options = options;
  }

  const [stateOptions, setStateOptions] = useState<StateType[]>();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    actualBuyersFormFields.stateactualbuyer.config.options = options;
  }

  const [countryOptions, setCountryOptions] = useState<CountryType[]>();

  useEffect(() => {
    if (countryData) {
      setCountryOptions(Object.values(countryData));
    }
  }, [countryData]);

  if (countryOptions?.length) {
    let options = selectOptionsMaker(
      countryOptions,
      "countryId",
      "countryName"
    );
    actualBuyersFormFields.countryactualbuyer.config.options = options;
  }

  useEffect(() => {
    if (clientData) {
      setClientOptions(Object.values(clientData));
    }
  }, [clientData]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientId", "clientName");
    actualBuyersFormFields.clientactualbuyer.config.options = options;
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
    if (data.clientId) {
      data.clientId = data.clientId.value;
    }
    console.log(data);
    if (params.id && data) {
      updateActualBuyer({ id: params.id, ...data });
    } else {
      addActualBuyer(data);
    }
  });

  return (
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
                    config={actualBuyersFormFields.clientactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.nameactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.addressactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.telnoactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.emailactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.contactactualbuyer.config}
                  />
                  <Input
                    config={
                      actualBuyersFormFields.designationactualbuyer.config
                    }
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="card-body">
                  <Select
                    config={actualBuyersFormFields.cityactualbuyer.config}
                  />
                  <Select
                    config={actualBuyersFormFields.stateactualbuyer.config}
                  />
                  <Input config={actualBuyersFormFields.PIN.config} />
                  <Select
                    config={actualBuyersFormFields.countryactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.faxnoactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.websiteactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.cstactualbuyer.config}
                  />
                  <Input
                    config={actualBuyersFormFields.gstnactualbuyer.config}
                  />
                  {/* <div className="col-md-12"> */}

                  {/* <p
                      id="name45"
                      className="form-text text-red text-red-custom"
                    > */}
                  <InputWithText
                    config={actualBuyersFormFields.actualbuyergstnote.config}
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
  );
};
