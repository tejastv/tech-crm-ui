// AddCompany.tsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  NewInput,
  NewSelect,
} from "@shared/index";
import {
  ActualBuyerFormType,
  ActualBuyerType,
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
import { useLocation, useParams } from "react-router-dom";
import { usePagination } from "@hooks/usePagination";
import _ from "lodash";

export const ActualBuyerForm: React.FC = () => {
  const params = useParams();
  const { state: localActualBuyerData } = useLocation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ActualBuyerFormType>();
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

  const { limit, offset } = usePagination();

  const { data: clientData } = getClient({
    limit,
    offset,
  });

  const {
    addActualBuyerMutation,
    updateActualBuyerMutation,
    getActualBuyerData,
  } = useActualBuyerApiCallHook();
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
      setCityOptions(_.orderBy(Object.values(cityData), ["cityName"], ["asc"]));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName");
    actualBuyersFormFields.cityActualBuyer.config.options = options;
  }

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
    actualBuyersFormFields.stateActualBuyer.config.options = options;
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
    actualBuyersFormFields.countryActualBuyer.config.options = options;
  }

  useEffect(() => {
    if (clientData?.data) {
      setClientOptions(Object.values(clientData.data));
    }
  }, [clientData]);

  if (clientOptions?.length) {
    let options = selectOptionsMaker(clientOptions, "clientId", "clientName");
    actualBuyersFormFields.clientActualBuyer.config.options = options;
  }

  const { data: actualBuyerData } = getActualBuyerData(
    "" + params.id,
    !localActualBuyerData && params.id !== undefined
  );

  const mapActualBuyerDataToActualBuyerForm = (
    actualBuyerData: ActualBuyerType
  ) => {
    let actualBuyerFormData: Partial<ActualBuyerFormType> = {
      partyId: actualBuyerData.partyId,
      partyName: actualBuyerData.partyName,
      partyAddress: actualBuyerData.partyAddress,
      pin: actualBuyerData.pin,
      telNo: actualBuyerData.telNo,
      faxNo: actualBuyerData.faxNo,
      email: actualBuyerData.email,
      website: actualBuyerData.website,
      personResponsible: actualBuyerData.personResponsible,
      personDesg: actualBuyerData.personDesg,
      refNo: actualBuyerData.refNo,
      active: actualBuyerData.active,
      revisionCntr: actualBuyerData.revisionCntr,
      gstn: actualBuyerData.gstn,
      locked: actualBuyerData.locked,
    };
    if (cityData && actualBuyerData?.cityId) {
      let data = cityData[actualBuyerData.cityId];
      data &&
        (actualBuyerFormData.cityId = {
          label: data.cityName,
          value: data.cityId,
        });
    }
    if (stateData && actualBuyerData?.stateId) {
      let data = stateData[actualBuyerData.stateId];
      data &&
        (actualBuyerFormData.stateId = {
          label: data.stateName,
          value: data.stateId,
        });
    }
    if (countryData && actualBuyerData?.countryId) {
      let data = countryData[actualBuyerData.countryId];
      data &&
        (actualBuyerFormData.countryId = {
          label: data.countryName,
          value: data.countryId,
        });
    }
    if (clientData && actualBuyerData?.clientId) {
      let data = clientData.data[actualBuyerData.clientId];
      data &&
        (actualBuyerFormData.clientId = {
          label: data.clientName,
          value: data.clientId,
        });
    }
    return actualBuyerFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (actualBuyerData && Object.values(actualBuyerData).length > 0) {
        reset(mapActualBuyerDataToActualBuyerForm(actualBuyerData));
      }
    }
  }, [
    params.id,
    cityOptions,
    stateOptions,
    countryOptions,
    clientOptions,
    actualBuyerData,
  ]);

  const mapActualBuyerRequest = (actualBuyerFormData: ActualBuyerFormType) => {
    let actualBuyerData: Partial<ActualBuyerType> = {
      partyName: actualBuyerFormData.partyName,
      partyAddress: actualBuyerFormData.partyAddress,
      pin: actualBuyerFormData.pin,
      telNo: actualBuyerFormData.telNo,
      faxNo: actualBuyerFormData.faxNo,
      email: actualBuyerFormData.email,
      website: actualBuyerFormData.website,
      personResponsible: actualBuyerFormData.personResponsible,
      personDesg: actualBuyerFormData.personDesg,
      refNo: actualBuyerFormData.refNo,
      active: actualBuyerFormData.active,
      revisionCntr: actualBuyerFormData.revisionCntr,
      gstn: actualBuyerFormData.gstn,
      locked: actualBuyerFormData.locked,
    };
    if (cityData && actualBuyerFormData?.cityId) {
      actualBuyerData.cityId = actualBuyerFormData.cityId.value;
    }
    if (stateData && actualBuyerFormData?.stateId) {
      actualBuyerData.stateId = actualBuyerFormData.stateId.value;
    }
    if (countryData && actualBuyerFormData?.countryId) {
      actualBuyerData.countryId = actualBuyerFormData.countryId.value;
    }
    if (clientData && actualBuyerFormData?.clientId) {
      actualBuyerData.clientId = actualBuyerFormData.clientId.value;
    }
    return cleanupObject(actualBuyerData);
  };

  const onSubmit = handleSubmit(
    (actualBuyerData: ActualBuyerFormType): void => {
      let reqObj: Partial<ActualBuyerType> =
        mapActualBuyerRequest(actualBuyerData);
      if (params.id && reqObj) {
        updateActualBuyer({ partyId: +params.id, ...reqObj });
      } else {
        addActualBuyer(reqObj);
      }
    }
  );

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
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={actualBuyersFormFields.clientActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.nameActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.addressActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.telNoActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.emailActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.contactActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.designationActualBuyer}
                />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="card-body">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={actualBuyersFormFields.cityActualBuyer}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={actualBuyersFormFields.stateActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.pin}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={actualBuyersFormFields.countryActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.faxNoActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.websiteActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.cstActualBuyer}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={actualBuyersFormFields.gstnActualBuyer}
                />
                {/* <InputWithText
                  config={actualBuyersFormFields.actualbuyergstnote.config}
                /> */}
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
