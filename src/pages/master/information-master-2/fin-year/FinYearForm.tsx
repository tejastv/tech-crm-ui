import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  FinYearFormType,
  finYearFormFields,
  useFinYearApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const FinYearForm: React.FC = () => {
  const methods = useForm<FinYearFormType>();
  const {
    addFinYearMutation,
    getFinYearData,
    updateFinYearMutation,
    getLastFinYear,
  } = useFinYearApiCallHook();
  const { mutateAsync: addFinYear } = addFinYearMutation();
  const { mutateAsync: updateFinYear } = updateFinYearMutation();
  const params = useParams();
  const [lastFinYear, setLastFinYear] = useState<number>();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Fin Year" : "Add Fin Year",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  finYearFormFields.finyear.config.setData = lastFinYear;

  if (params.id) {
    const { data: finYearData, isSuccess: finYearDataSuccess } = getFinYearData(
      "" + params.id
    );
    if (finYearDataSuccess) {
      console.log(finYearData);
      finYearFormFields.finyear.config.setData = finYearData.finYear;
      finYearFormFields.totaltax.config.setData = finYearData.serviceTax;
      finYearFormFields.stax.config.setData = finYearData.stax;
      finYearFormFields.edcess.config.setData = finYearData.eduCess;
      finYearFormFields.cgst.config.setData = finYearData.cgstper;
      finYearFormFields.sgst.config.setData = finYearData.sgstper;
      finYearFormFields.igst.config.setData = finYearData.igstper;
    }
  } else {
    useEffect(() => {
      methods.reset();
      getLastFinYear().then((finYear) => {
        if (finYear) {
          setLastFinYear(finYear.data);
        }
      });
    }, []);
  }

  const onSubmit = methods.handleSubmit((finYearData): void => {
    let data: any = { ...finYearData };
    console.log(data);
    if (params.id && finYearData) {
      updateFinYear({ id: params.id, ...data });
    } else {
      addFinYear(data);
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
                    <Input config={finYearFormFields.finyear.config} />
                    <Input config={finYearFormFields.stax.config} />
                    <Input config={finYearFormFields.edcess.config} />
                    <Input config={finYearFormFields.totaltax.config} />
                  </div>
                </div>

                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Input config={finYearFormFields.cgst.config} />
                    <Input config={finYearFormFields.sgst.config} />
                    <Input config={finYearFormFields.igst.config} />
                    {/* <Input config={finYearFormFields.startinvno.config} /> */}
                    {/* <Input config={finYearFormFields.startrefno.config} /> */}
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
