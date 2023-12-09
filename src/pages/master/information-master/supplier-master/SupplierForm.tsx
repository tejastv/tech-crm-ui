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
  SupplierMasterFormType,
  supplierFormFields,
  useSupplierMasterApiCallHook,
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
  useCurrencyApiCallHook,
  CityType,
  CountryType,
  StateType,
  SupplierMasterType,
} from "@master/index";

import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useLocation, useParams } from "react-router-dom";
import { returnObjectBasedOnID, cleanupObject } from "@utils/index";

export const SupplierForm: React.FC = () => {
  const { state: localSupplierData } = useLocation();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupplierMasterFormType>();
  const params = useParams();
  const {
    addSupplierMasterMutation,
    updateSupplierMasterMutation,
    getSupplierMasterData,
  } = useSupplierMasterApiCallHook();
  const { mutate: addSupplierMaster } = addSupplierMasterMutation();
  const { mutate: updateSupplierMaster } = updateSupplierMasterMutation();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getCurrency } = useCurrencyApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Supplier Master",
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
      setCityOptions(Object.values(cityData));
    }
  }, [cityData]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "cityId", "cityName");
    supplierFormFields.citySupplier.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();

  const [stateOptions, setStateOptions] = useState<StateType[]>();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    supplierFormFields.stateSupplier.config.options = options;
  }

  // country api call
  const { data: countryData } = getCountry();

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
    supplierFormFields.countrySupplier.config.options = options;
  }

  const { data: CurrencyData } = getCurrency();

  if (CurrencyData) {
    supplierFormFields.currencySupplier.config.options = selectOptionsMaker(
      Object.values(CurrencyData),
      "currencyId",
      "currencyType"
    );
  }

  const onSubmit = handleSubmit((currencyData) => {
    let data: any = { ...cleanupObject(currencyData) };
    data["ourRefNo"] = "String";
    if (data.cityId) {
      data.cityId = +data.cityId["value"];
    }
    if (data.stateId) {
      data.stateId = +data.stateId["value"];
    }
    if (data.countryId) {
      data.countryId = +data.countryId["value"];
    }
    if (data.currencyId) {
      data.currencyId = +data.currencyId["value"];
    }
    if (data.supplierId) {
      data.supplierId = +data.supplierId;
    }
    if (params.id && data) {
      updateSupplierMaster({ id: params.id, ...data });
    } else {
      addSupplierMaster(data);
    }
  });


  const { data: supplierMasterData } = getSupplierMasterData(
    "" + params.id,
    !localSupplierData && params.id !== undefined
  );

  const mapSupplierDataToSupplierForm = (supplierData: SupplierMasterType) => {
    let supplierFormData: Partial<SupplierMasterFormType> = {
      address: supplierData.address,
      zip: supplierData.zip,
      fax: supplierData.fax,
      supplierId: supplierData.supplierId,
      supplierName: supplierData.supplierName,
      email: supplierData.email,
      currencyId: supplierData.currencyId,
      nickName: supplierData.nickName,
      website: supplierData.website,
      phone: supplierData.phone,
      contactPerson: supplierData.contactPerson,
      designation: supplierData.designation,
      ourRefNo: supplierData.ourRefNo,
    };
    if (cityData && supplierData?.cityId) {
      let data = cityData[supplierData.cityId];
      data &&
        (supplierFormData.cityId = {
          label: data.cityName,
          value: data.cityId,
        });
    }
    if (stateData && supplierData?.stateId) {
      let data = stateData[supplierData.stateId];
      data &&
        (supplierFormData.stateId = {
          label: data.stateName,
          value: data.stateId,
        });
    }
    if (countryData && supplierData?.countryId) {
      let data = countryData[supplierData.countryId];
      data &&
        (supplierFormData.countryId = {
          label: data.countryName,
          value: data.countryId,
        });
    }
    return supplierFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (supplierMasterData && Object.values(supplierMasterData).length > 0) {
        reset(mapSupplierDataToSupplierForm(supplierMasterData));
      }
    }
  }, [params.id, cityOptions, stateOptions, countryOptions]);

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
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.nameSupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.nickname}
              />

              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.addressSupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.telNoSupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.faxNoSupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.emailSupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.websiteSupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.contactSupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.designationSupplier}
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={supplierFormFields.citySupplier}
              />
              <NewInput
                errors={errors}
                register={register}
                config={supplierFormFields.zipSupplier}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={supplierFormFields.stateSupplier}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={supplierFormFields.countrySupplier}
              />
              <NewSelect
                errors={errors}
                register={register}
                control={control}
                config={supplierFormFields.currencySupplier}
              />
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
