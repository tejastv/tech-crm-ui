import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  NewInput,
  DivLayout,
  ActionButtons,
} from "@shared/index";
import {
  currencyFormFields,
  CurrencyFormType,
  CurrencyType,
  useCurrencyApiCallHook,
} from "@master/index";
import { useParams, useLocation } from "react-router-dom";

export const CurrencyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CurrencyFormType>();
  const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } =
    useCurrencyApiCallHook();
  const { mutateAsync: addCurrency } = addCurrencyMutation();
  const { mutateAsync: updateCurrency } = updateCurrencyMutation();
  const params = useParams();
  const { state: localCurrencyData } = useLocation();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Currency" : "Add Currency",
      heading: "Entry",
    },
    formPurchaseConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },

    formActionsConfig: {
      heading: "Action Button",
    },
  };
  useEffect(() => {
    // This code will run when the component is about to unmount
    return () => {
      reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  const { data: currencyData } = getCurrencyData(
    "" + params.id,
    !localCurrencyData && params.id !== undefined
  );

  const mapCurrencyDataToCurrencyForm = (currencyData: CurrencyType) => {
    let currencyFormData: Partial<CurrencyFormType> = {
      currencySymbol: currencyData.currencySymbol,
      currencyInWord: currencyData.currencyInWord,
      currencyType: currencyData.currencyType,
      entryDate: currencyData.entryDate,
      exchangeRateRs: currencyData.exchangeRateRs,
      entryDateSell: currencyData.entryDateSell,
      exchangeRateRsSell: currencyData.exchangeRateRsSell,
    };
    return currencyFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (currencyData && Object.values(currencyData).length > 0) {
        reset(mapCurrencyDataToCurrencyForm(currencyData));
      }
    }
  }, [params.id, currencyData]);

  useEffect(() => {
    if (params.id) {
      if (localCurrencyData !== null) {
        reset(mapCurrencyDataToCurrencyForm(localCurrencyData));
      }
    }
  }, [params.id, localCurrencyData]);

  const onSubmit = handleSubmit((currencyData) => {
    if (params.id && currencyData) {
      updateCurrency({ id: params.id, ...currencyData });
    } else {
      addCurrency(currencyData);
    }
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
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-12 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={currencyFormFields.currencyField}
                  />
                </div>
                <div className="col-md-12 col-xs-12">
                  <NewInput
                    errors={errors}
                    register={register}
                    config={currencyFormFields.symbolField}
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={currencyFormFields.currencyWordField}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="card-title col-md-12 m-t-40 text-center">
                    <DivLayout heading={cardConfig.formPurchaseConfig.heading} />
                    <hr />
                  </div>
                  <div className="col-md-12 col-xs-12">
                    <NewInput
                      errors={errors}
                      register={register}
                      config={currencyFormFields.purchaseExchangeField}
                    />
                    <NewInput
                      errors={errors}
                      register={register}
                      config={currencyFormFields.pDateField}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="card-title col-md-12 m-t-40 text-center">
                    <DivLayout heading={cardConfig.formSellConfig.heading} />
                    <hr />
                  </div>
                  <div className="col-md-12 col-xs-12">
                    <NewInput
                      errors={errors}
                      register={register}
                      config={currencyFormFields.sellExchangeField}
                    />
                    <NewInput
                      errors={errors}
                      register={register}
                      config={currencyFormFields.sDateField}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
