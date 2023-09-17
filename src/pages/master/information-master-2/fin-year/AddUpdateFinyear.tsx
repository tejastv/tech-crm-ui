import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateFinYearType,
  addFinYearFormFields,
  useFinYearApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateFinYear: React.FC = () => {
  const methods = useForm<AddUpdateFinYearType>();
  const {
    addFinYearMutation,
    getFinYearData,
    updateFinYearMutation,
    getLastFinYear,
  } = useFinYearApiCallHook();
  const { mutateAsync: addFinYear } = addFinYearMutation();
  const { mutateAsync: updateFinYear } = updateFinYearMutation();
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Fin Year" : "Add Fin Year",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  if (params.id) {
    const { data: finYearData, isSuccess: finYearDataSuccess } = getFinYearData(
      "" + params.id
    );
    if (finYearDataSuccess) {
      console.log(finYearData);
      addFinYearFormFields.finyear.config.setData = finYearData.finYear;
      // addFinYearFormFields.totaltax.config.setData = finYearData.;
      addFinYearFormFields.stax.config.setData = finYearData.stax;
      addFinYearFormFields.edcess.config.setData = finYearData.eduCess;
      addFinYearFormFields.cgst.config.setData = finYearData.cgstper;
      addFinYearFormFields.sgst.config.setData = finYearData.sgstper;
      addFinYearFormFields.igst.config.setData = finYearData.igstper;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
    const { data: lastFinYearData, isSuccess: lastFinYearDataSuccess } =
      getLastFinYear();
    if (lastFinYearDataSuccess) {
      addFinYearFormFields.finyear.config.setData = lastFinYearData.data;
    }
  }

  const onSubmit = methods.handleSubmit((finYearData): void => {
    let data: any = { ...finYearData };
    console.log(data);

    // if (params.id && finYearData) {
    //   updateFinYear({ id: params.id, ...data });
    // } else {
    //   addFinYear(data);
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
                    <Input config={addFinYearFormFields.finyear.config} />
                    {/* <div className="d-flex justify-content-end mb-2">
                      <Button
                        type="button"
                        className="btn btn-danger waves-effect waves-light"
                        onClick={getFinYear}
                      >
                        {" "}
                        Get Fin Year
                      </Button>
                    </div> */}

                    <Input config={addFinYearFormFields.totaltax.config} />
                    <Input config={addFinYearFormFields.stax.config} />
                    <Input config={addFinYearFormFields.edcess.config} />
                  </div>
                </div>

                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Input config={addFinYearFormFields.cgst.config} />
                    <Input config={addFinYearFormFields.sgst.config} />
                    <Input config={addFinYearFormFields.igst.config} />
                    {/* <Input config={addFinYearFormFields.startinvno.config} /> */}
                    {/* <Input config={addFinYearFormFields.startrefno.config} /> */}
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
