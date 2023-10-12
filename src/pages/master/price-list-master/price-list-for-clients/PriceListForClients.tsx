import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BorderLayout, Card, Select, Button } from "@shared/index";
import {
  addPriceClientFormFields,
  useCityApiCallHook,
  useClientApiCallHook,
  useClientGroupApiCallHook,
  usePriceListForClientsApiCallHook,
  usePriceListGroupApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const PriceListForClients: React.FC = () => {
  const getPriceFromOtherGroupForm = useForm();
  const otherFormGroupForm = useForm();
  const getPriceForm = useForm();

  const { getCity } = useCityApiCallHook();
  const { getClientsByCityId } = useClientApiCallHook();
  const { getClientGroup } = useClientGroupApiCallHook();
  const { getGroupWiseCurrencyData } = usePriceListGroupApiCallHook();
  const { getCurrencyAndGroupByClientID } = usePriceListForClientsApiCallHook();
  const { data: cityData } = getCity();
  const [city, setCity] = useState<number>(-2);
  const [group, setGroup] = useState<number>(-2);
  const [client, setClient] = useState<number>(-2);
  const [client2, setClient2] = useState<number>(-2);
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Client)",
      heading: "Action Buttons",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Table",
    },
  };

  if (cityData) {
    let cityArray = selectOptionsMaker(cityData, "id", "cityName");
    cityArray.unshift({
      label: "All",
      value: -1,
    });
    addPriceClientFormFields.pricecity.config.options = cityArray;
  }

  const { data: clientGroupData } = getClientGroup();
  if (clientGroupData) {
    addPriceClientFormFields.priceGroup2.config.options = selectOptionsMaker(
      clientGroupData,
      "groupId",
      "groupName"
    );
  }

  const { data: cityWiseClientsData } = getClientsByCityId(city, city != -2);
  if (cityWiseClientsData) {
    let groupArray = selectOptionsMaker(
      cityWiseClientsData,
      "clientID",
      "clientName"
    );
    addPriceClientFormFields.priceClient.config.options = groupArray;
    addPriceClientFormFields.priceClient2.config.options = groupArray;
  }

  const cityChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setCity(selectedOption.value);
      // setIsStdPriceBtnClicked(false);
    }
  };

  const { data: groupWiseCurrencyData } = getGroupWiseCurrencyData(
    group,
    group != -2
  );
  if (groupWiseCurrencyData) {
    let currencyData = selectOptionsMaker(
      [groupWiseCurrencyData],
      "currencyId",
      "currecnyName"
    );
    addPriceClientFormFields.priceCurrencyClient.config.options = currencyData;
  }

  const groupChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setGroup(selectedOption.value);
      // setIsStdPriceBtnClicked(false);
    }
  };

  const { data: clientWiseCurrencyAndGroup } = getCurrencyAndGroupByClientID(
    client,
    client != -2
  );

  if (clientWiseCurrencyAndGroup) {
    let currency = [
      {
        value: clientWiseCurrencyAndGroup.currencyId,
        label: clientWiseCurrencyAndGroup.currencyName,
      },
    ];
    let group = [
      {
        value: clientWiseCurrencyAndGroup.groupId,
        label: clientWiseCurrencyAndGroup.groupName,
      },
    ];
    addPriceClientFormFields.priceClientCurrency.config.options = currency;
    addPriceClientFormFields.priceGroup.config.options = group;
  }

  const clientChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setClient(selectedOption.value);
      // setIsStdPriceBtnClicked(false);
    }
  };

  const { data: clientWiseCurrency } = getCurrencyAndGroupByClientID(
    client2,
    client2 != -2
  );

  if (clientWiseCurrency) {
    let currency = [
      {
        value: clientWiseCurrency.currencyId,
        label: clientWiseCurrency.currencyName,
      },
    ];

    addPriceClientFormFields.priceCurrencyGroup.config.options = currency;
  }

  const client2ChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setClient2(selectedOption.value);
      // setIsStdPriceBtnClicked(false);
    }
  };

  const onGetPriceFromOtherGroupFormSubmit =
    getPriceFromOtherGroupForm.handleSubmit((data): void => {
      console.log("value", data);
    });

  const onOtherFormGroupFormSubmit = otherFormGroupForm.handleSubmit(
    (data): void => {
      console.log("value", data);
    }
  );

  const onGetPriceFormSubmit = getPriceForm.handleSubmit((data): void => {
    console.log("value", data);
  });

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <div className="p-t-20">
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <FormProvider {...getPriceFromOtherGroupForm}>
              <form
                onSubmit={onGetPriceFromOtherGroupFormSubmit}
                noValidate
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.pricecity.config}
                      onChangeHandler={cityChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.priceClient.config}
                      onChangeHandler={clientChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={
                        addPriceClientFormFields.priceClientCurrency.config
                      }
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.priceGroup.config}
                    />
                  </div>
                </div>

                <div className="row justify-content-end">
                  <div className="col-md-2 col-xs-12 text-right">
                    <Button
                      type={"submit"}
                      className={"btn btn-danger btn-sm mb-2"}
                    >
                      <i className="far fa-save"></i> Get Price(From Group)
                    </Button>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-12 col-xs-12 text-right">
                    <Button
                      type={"submit"}
                      className={"btn btn-danger btn-sm mb-2"}
                    >
                      <i className="far fa-save"></i> Get Std. Price
                    </Button>
                  </div>
                </div>
              </form>
            </FormProvider>
            <FormProvider {...otherFormGroupForm}>
              <form
                noValidate
                onSubmit={onOtherFormGroupFormSubmit}
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.priceGroup2.config}
                      onChangeHandler={groupChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={
                        addPriceClientFormFields.priceCurrencyClient.config
                      }
                    />
                  </div>
                  <div className="col-md-6 col-xs-12 text-right">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i> Get Price(From Other
                      Group)
                    </Button>
                  </div>
                </div>
              </form>
            </FormProvider>
            <FormProvider {...getPriceForm}>
              <form
                noValidate
                onSubmit={onGetPriceFormSubmit}
                autoComplete="off"
              >
                <div className="row">
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={addPriceClientFormFields.priceClient2.config}
                      onChangeHandler={client2ChangeHandler}
                    />
                  </div>
                  <div className="col-md-3 col-xs-12">
                    <Select
                      config={
                        addPriceClientFormFields.priceCurrencyGroup.config
                      }
                    />
                  </div>
                  <div className="col-md-6 col-xs-12 text-right">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i> Get Price
                    </Button>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-2 col-xs-12 text-right">
                    <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                      <i className="far fa-save"></i> Save All
                    </Button>
                  </div>
                </div>
              </form>
            </FormProvider>
          </BorderLayout>
        </div>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {/* <Table></Table> */}
        </BorderLayout>
      </Card>
    </>
  );
};
