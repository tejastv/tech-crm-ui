import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  ActionButtons,
  NewSelect,
  NewInput,
  NewCheckbox,
} from "@shared/index";
import { useParams } from "react-router-dom";
import { addPurchaseBillsFormFields } from "@transaction-search/index";

export const AddUpdatePurchase: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<any>();
  //   const methods = useForm<AddUpdatePurchaseType>();
  //   const { addCurrencyMutation, getCurrencyData, updateCurrencyMutation } = useCurrencyApiCallHook();
  //   const { mutateAsync: addCurrency } = addCurrencyMutation();
  //   const { mutateAsync: updateCurrency } = updateCurrencyMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update PurchaseBills" : "Add PurchaseBills",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Button",
    },
  };
  useEffect(() => {
    // This code will run when the component is about to unmount
    return () => {
      //   methods.reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  const methods = useForm();
  const onSubmit = methods.handleSubmit((data): void => {
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
            <div className="col-4 col-xs-12">
              <div className="card-body">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addPurchaseBillsFormFields.fYearField}
                />

                <NewInput
                  errors={errors}
                  register={register}
                  config={addPurchaseBillsFormFields.invoiceDateField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addPurchaseBillsFormFields.invoiceDateField}
                />
                <div className="col-md-7 col-xs-12">
                  <NewCheckbox
                    errors={errors}
                    register={register}
                    control={control}
                    config={addPurchaseBillsFormFields.calculateField}
                  />
                </div>
                <NewInput
                  errors={errors}
                  register={register}
                  config={addPurchaseBillsFormFields.stField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addPurchaseBillsFormFields.edCessField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addPurchaseBillsFormFields.invoiceAmountField}
                />
              </div>
            </div>

            <div className="col-4 col-xs-12">
              <div className="card-body">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addPurchaseBillsFormFields.supplierNameField}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addPurchaseBillsFormFields.notesField}
                />
              </div>
            </div>

            <div className="col-4 col-xs-12">
              <div className="card-body">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addPurchaseBillsFormFields.invoiceNoField}
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
    </Card>
  );
};
