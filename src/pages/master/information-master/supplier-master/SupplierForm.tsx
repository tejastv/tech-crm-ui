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
  CurrencyType,
} from "@master/index";

import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";
import _ from "lodash";

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
      setCityOptions(_.orderBy(Object.values(cityData), ["cityName"], ["asc"]));
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
      setStateOptions(
        _.orderBy(Object.values(stateData), ["stateName"], ["asc"])
      );
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

  const { data: currencyData } = getCurrency();
  const [currencyOptions, setCurrencyOptions] = useState<CurrencyType[]>();

  useEffect(() => {
    if (currencyData) {
      setCurrencyOptions(Object.values(currencyData));
    }
  }, [currencyData]);

  if (currencyOptions?.length) {
    let options = selectOptionsMaker(
      currencyOptions,
      "currencyId",
      "currencyType"
    );
    supplierFormFields.currencySupplier.config.options = options;
  }

  const onSubmit = handleSubmit((supplierFormData: SupplierMasterFormType) => {
    let reqObj: Partial<SupplierMasterType> =
      mapSupplierRequest(supplierFormData);
    if (params.id && reqObj) {
      updateSupplierMaster({ supplierId: +params.id, ...reqObj });
    } else {
      addSupplierMaster(reqObj);
    }
  });

  const { data: supplierMasterData } = getSupplierMasterData(
    "" + params.id,
    !localSupplierData && params.id !== undefined
  );

  const mapSupplierRequest = (supplierFormData: SupplierMasterFormType) => {
    let supplierData: Partial<SupplierMasterType> = {
      address: supplierFormData.address,
      zip: supplierFormData.zip,
      fax: supplierFormData.fax,
      supplierId: supplierFormData.supplierId,
      supplierName: supplierFormData.supplierName,
      email: supplierFormData.email,
      nickName: supplierFormData.nickName,
      website: supplierFormData.website,
      phone: supplierFormData.phone,
      contactPerson: supplierFormData.contactPerson,
      designation: supplierFormData.designation,
      ourRefNo: supplierFormData.ourRefNo,
    };
    if (cityData && supplierFormData?.cityId) {
      supplierData.cityId = supplierFormData.cityId.value;
    }
    if (stateData && supplierFormData?.stateId) {
      supplierData.stateId = supplierFormData.stateId.value;
    }
    if (countryData && supplierFormData?.countryId) {
      supplierData.countryId = supplierFormData.countryId.value;
    }
    if (currencyData && supplierFormData?.currencyId) {
      supplierData.currencyId = supplierFormData.currencyId.value;
    }
    // industryId: formEnqData.industryId.value,
    return cleanupObject(supplierData);
  };

  const mapSupplierDataToSupplierForm = (supplierData: SupplierMasterType) => {
    let supplierFormData: Partial<SupplierMasterFormType> = {
      address: supplierData.address,
      zip: supplierData.zip,
      fax: supplierData.fax,
      supplierId: supplierData.supplierId,
      supplierName: supplierData.supplierName,
      email: supplierData.email,
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
    if (currencyData && supplierData?.currencyId) {
      let data = currencyData[supplierData.currencyId];
      data &&
        (supplierFormData.currencyId = {
          label: data.currencyType,
          value: data.currencyId,
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
  }, [
    params.id,
    cityOptions,
    stateOptions,
    countryOptions,
    currencyOptions,
    supplierMasterData,
  ]);

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
