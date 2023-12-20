import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  FinYearFormType,
  FinYearType,
  finYearFormFields,
  useFinYearApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";

export const FinYearForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FinYearFormType>();
  const { state: localFinYearData } = useLocation();
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

  const { data: lastFinYear } = getLastFinYear(params.id === undefined);

  useEffect(() => {
    if (lastFinYear) {
      if (finYearFormFields.finYear.config.name == "finYear") {
        setValue(finYearFormFields.finYear.config.name, lastFinYear);
      }
    }
  }, [lastFinYear]);

  const { data: finYearData } = getFinYearData(
    "" + params.id,
    !localFinYearData && params.id !== undefined
  );

  const mapFinYearDataToFinYearForm = (finYearData: FinYearType) => {
    let finYearFormData: Partial<FinYearFormType> = {
      finYear: finYearData.finYear,
      totalTax: finYearData.serviceTax,
      stax: finYearData.stax,
      eduCess: finYearData.eduCess,
      cgstper: finYearData.cgstper,
      sgstper: finYearData.sgstper,
      igstper: finYearData.igstper,
    };
    return finYearFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (finYearData && Object.values(finYearData).length > 0) {
        reset(mapFinYearDataToFinYearForm(finYearData));
      }
    }
  }, [params.id, finYearData]);

  const mapFinYearRequest = (finYearFormData: FinYearFormType) => {
    let finYearData: Partial<FinYearType> = {
      finYear: finYearFormData.finYear,
      serviceTax: finYearFormData.totalTax,
      cgstper: finYearFormData.cgstper,
      igstper: finYearFormData.igstper,
      sgstper: finYearFormData.sgstper,
      stax: finYearFormData.stax,
      eduCess: finYearFormData.eduCess,
    };
    return cleanupObject(finYearData);
  };

  const onSubmit = handleSubmit((finYearData: FinYearFormType): void => {
    let reqObj: Partial<FinYearType> = mapFinYearRequest(finYearData);
    if (params.id && finYearData) {
      updateFinYear({ id: +params.id, ...reqObj });
    } else {
      addFinYear(reqObj);
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
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewInput
                  errors={errors}
                  register={register}
                  config={finYearFormFields.finYear}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={finYearFormFields.stax}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={finYearFormFields.edcess}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={finYearFormFields.totalTax}
                />
              </div>
            </div>

            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewInput
                  errors={errors}
                  register={register}
                  config={finYearFormFields.cgst}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={finYearFormFields.sgst}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={finYearFormFields.igst}
                />
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
    </Card>
  );
};
