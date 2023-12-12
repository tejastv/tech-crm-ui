import React from "react";
import {  useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  DivLayout,
  Button,
  NewSelect,
  NewInput,
  NewDatePicker,
} from "@shared/index";
import { priceFormFields } from "@master/index";

export const LocalSourcePriceList: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Local Source)",
      heading: "Action Buttons",
    },
    formPurchaseConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Table",
    },
  };

  const onSubmit = handleSubmit((data): void => {
    console.log("value", data);
  });

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
          <div className="row">
            <div className="col-md-2 col-xs-12"></div>
            <div className="col-md-5 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={priceFormFields.priceLocalSource}
              />
            </div>
            <div className="col-md-5 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={priceFormFields.priceCurrency}
              />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-2 col-xs-12 text-right">
              <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                <i className="far fa-save"></i> Get Std. Price
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-2 col-xs-12">
              <DivLayout heading={cardConfig.formPurchaseConfig.heading} />
            </div>
            <div className="col-md-5 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={priceFormFields.purchaseExchangeRate}
              />
            </div>
            <div className="col-md-5 col-xs-12">
              <NewDatePicker
                errors={errors}
                register={register}
                config={priceFormFields.purchaseDate}
              />
            </div>
            <div className="col-md-2 col-xs-12">
              <DivLayout heading={cardConfig.formSellConfig.heading} />
            </div>
            <div className="col-md-5 col-xs-12">
              <NewInput
                errors={errors}
                register={register}
                config={priceFormFields.sellExchangeRate}
              />
            </div>
            <div className="col-md-5 col-xs-12">
              <NewDatePicker
                errors={errors}
                register={register}
                config={priceFormFields.sellDate}
              />
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-2 col-xs-12 text-right">
              <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                <i className="far fa-save"></i> Save All
              </Button>
            </div>
          </div>
        </BorderLayout>
      </form>
      <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
        {/* {!isLoading ? <Table config={tableConfig.config}/> :  <Loader />} */}
      </BorderLayout>
    </Card>
  );
};
