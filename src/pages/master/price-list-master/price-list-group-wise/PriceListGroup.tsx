import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BorderLayout, Card, Select, Button } from "@shared/index";
import {
  addPriceGroupFormFields,
  useCityApiCallHook,
  usePriceListGroupApiCallHook,
} from "@master/index";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const PriceListGroup: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Group)",
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

  const { getCity } = useCityApiCallHook();
  const { data: cityData } = getCity();
  const { getCityWiseGroupData } = usePriceListGroupApiCallHook();
  const [city, setCity] = useState<number>();
  const [group, setGroup] = useState<number>();

  if (cityData) {
    addPriceGroupFormFields.pricegroupcity.config.options = selectOptionsMaker(
      cityData,
      "id",
      "cityName"
    );
  }

  // const onSubmit = methods.handleSubmit((data): void => {
  //   console.log("value", data);
  // });

  const cityChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setCity(selectedOption.value);
    }
  };

  const groupChangeHandler = (selectedOption: any) => {
    if (selectedOption) {
      setGroup(selectedOption.value);
    }
  };

  if (city) {
    const { data: cityWiseGroupData } = getCityWiseGroupData(city);
    if (cityWiseGroupData) {
      addPriceGroupFormFields.priceGroupSelect.config.options =
        selectOptionsMaker(cityWiseGroupData, "groupId", "groupName");
    }
  }

  if (group) {
    const { data: groupWiseCurrencyData } = getCityWiseGroupData(group);
    if (groupWiseCurrencyData) {
      addPriceGroupFormFields.priceGroupCurrency.config.options =
        selectOptionsMaker(groupWiseCurrencyData, "currencyId", "currecnyName");
    }
  }

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form noValidate autoComplete="off" className="p-t-20">
            <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
              <div className="row">
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.pricegroupcity.config}
                    onChangeHandler={cityChangeHandler}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupSelect.config}
                    onChangeHandler={groupChangeHandler}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupCurrency.config}
                  />
                </div>

                <div className="col-md-3 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Std. Price
                  </Button>
                </div>
                {/* <div className="pt-lg-3"></div> */}
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupSelect2.config}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupCurrency2.config}
                  />
                </div>
                {/* <div className="pt-lg-1"></div> */}
                <div className="col-md-6 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price
                  </Button>
                </div>

                <div className="col-md-12 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Save All
                  </Button>
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {/* <Table></Table> */}
        </BorderLayout>
      </Card>
    </>
  );
};
