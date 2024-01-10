import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  NewCheckbox,
  NewInput,
  NewSelect,
} from "@shared/index";
import {
  ExecutiveFormType,
  CityType,
  StateType,
  executiveFormFields,
  useCityApiCallHook,
  useExecutiveApiCallHook,
  useStateApiCallHook,
  ExecutiveType,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { cleanupObject } from "@utils/index";
import _ from "lodash";

export const ExecutiveForm: React.FC = () => {
  const { state: localExecutiveData } = useLocation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExecutiveFormType>();
  const { addExecutiveMutation, getExecutiveData, updateExecutiveMutation } =
    useExecutiveApiCallHook();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { mutateAsync: addExecutive } = addExecutiveMutation();
  const { mutateAsync: updateExecutive } = updateExecutiveMutation();
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Sales Executive" : "Add Sales Executive",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const [cityOptions, setCityOptions] = useState<CityType[]>();

  const { data: cityData } = getCity();

  useEffect(() => {
    if (cityData) {
      setCityOptions(_.orderBy(Object.values(cityData), ["cityName"], ["asc"]));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName");
    executiveFormFields.cityInformation.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();
  const [stateOptions, setStateOptions] = useState<StateType[]>();

  useEffect(() => {
    if (stateData) {
      setStateOptions(
        _.orderBy(Object.values(stateData), ["stateName"], ["asc"])
      );
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(stateOptions, "stateId", "stateName");
    executiveFormFields.stateInformation.config.options = options;
  }

  const { data: executiveData } = getExecutiveData(
    "" + params.id,
    !localExecutiveData && params.id !== undefined
  );

  const mapExecutiveDataToSupplierForm = (executiveData: ExecutiveType) => {
    let executiveFormData: Partial<ExecutiveFormType> = {
      email: executiveData.email,
      executiveId: executiveData.executiveId,
      executive: executiveData.executive,
      invoiceRequired: executiveData.invoiceRequired,
    };
    if (cityData && executiveData?.cityId) {
      let data = cityData[executiveData.cityId];
      data &&
        (executiveFormData.cityId = {
          label: data.cityName,
          value: data.cityId,
        });
    }
    if (stateData && executiveData?.stateId) {
      let data = stateData[executiveData.stateId];
      data &&
        (executiveFormData.stateId = {
          label: data.stateName,
          value: data.stateId,
        });
    }
    return executiveFormData;
  };

  const mapExecutiveRequest = (executiveFormData: ExecutiveFormType) => {
    let enqData: Partial<ExecutiveType> = {
      email: executiveFormData.email,
      invoiceRequired: executiveFormData.invoiceRequired,
    };
    if (cityData && executiveFormData?.cityId) {
      enqData.cityId = executiveFormData.cityId.value;
    }
    if (stateData && executiveFormData?.stateId) {
      enqData.stateId = executiveFormData.stateId.value;
    }
    return cleanupObject(enqData);
  };

  useEffect(() => {
    if (params.id) {
      if (executiveData && Object.values(executiveData).length > 0) {
        reset(mapExecutiveDataToSupplierForm(executiveData));
      }
    }
  }, [params.id, cityOptions, stateOptions, executiveData]);

  const onSubmit = handleSubmit((executiveData: ExecutiveFormType): void => {
    let reqObj: Partial<ExecutiveType> = mapExecutiveRequest(executiveData);
    if (params.id && executiveData) {
      updateExecutive({ executiveId: +params.id, ...reqObj });
    } else {
      addExecutive(reqObj);
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
                  config={executiveFormFields.executiveInformation}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={executiveFormFields.emailInformation}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={executiveFormFields.cityInformation}
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={executiveFormFields.checkboxInformation}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={executiveFormFields.stateInformation}
                />
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
