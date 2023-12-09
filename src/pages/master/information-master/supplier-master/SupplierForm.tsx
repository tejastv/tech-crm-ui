import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  Select,
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
} from "@master/index";

import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID, cleanupObject } from "@utils/index";

export const SupplierForm: React.FC = () => {
  const methods = useForm<SupplierMasterFormType>();
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
  }, [cityData && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "id", "cityName");
    supplierFormFields.citySupplier.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();

  const [stateOptions, setStateOptions] = useState<StateType[]>();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData && Object.values(stateData).length]);

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
  }, [countryData && Object.values(countryData).length]);

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
    supplierFormFields.CurrenceySupplier.config.options = selectOptionsMaker(
      Object.values(CurrencyData),
      "currencyId",
      "currencyType"
    );
  }

  const onSubmit = methods.handleSubmit((currencyData) => {
    let data: any = { ...cleanupObject(currencyData) };
    data["ourRefNo"] = "String";
    if (data.cityID) {
      data.cityID = +data.cityID["value"];
    }
    if (data.stateID) {
      data.stateID = +data.stateID["value"];
    }
    if (data.countryID) {
      data.countryID = +data.countryID["value"];
    }
    if (data.currencyId) {
      data.currencyId = +data.currencyId["value"];
    }
    if (data.supplierId) {
      data.supplierId = +data.supplierId;
    }
    console.log(data);
    if (params.id && data) {
      updateSupplierMaster({ id: params.id, ...data });
    } else {
      addSupplierMaster(data);
    }
  });

  if (params.id) {
    const { data: supplierMasterData } = getSupplierMasterData("" + params.id);
    if (supplierMasterData) {
      if (cityOptions) {
        let id = supplierMasterData?.cityID;
        let data: any = returnObjectBasedOnID(
          cityOptions,
          "id",
          id,
          "id",
          "cityName"
        );
        supplierFormFields.citySupplier.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (stateOptions) {
        let id = supplierMasterData?.stateID;
        let data: any = returnObjectBasedOnID(
          stateOptions,
          "stateId",
          id,
          "stateId",
          "state"
        );
        supplierFormFields.stateSupplier.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (countryOptions) {
        let id = supplierMasterData?.countryID;
        let data: any = returnObjectBasedOnID(
          countryOptions,
          "countryId",
          id,
          "countryId",
          "countryName"
        );
        supplierFormFields.countrySupplier.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }

      if (CurrencyData) {
        let id = supplierMasterData?.currencyId;
        let data: any = returnObjectBasedOnID(
          Object.values(CurrencyData),
          "currencyId",
          id,
          "currencyId",
          "currencyType"
        );
        supplierFormFields.CurrenceySupplier.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      supplierFormFields.nameSupplier.config.setData =
        supplierMasterData.supplierName;
      supplierFormFields.nickname.config.setData = supplierMasterData.nickName;
      supplierFormFields.addressSupplier.config.setData =
        supplierMasterData.address;
      supplierFormFields.telnoSupplier.config.setData =
        supplierMasterData.phone;
      supplierFormFields.faxnoSupplier.config.setData = supplierMasterData.fax;
      supplierFormFields.emailSupplier.config.setData =
        supplierMasterData.email;
      supplierFormFields.websiteSupplier.config.setData =
        supplierMasterData.website;
      supplierFormFields.contactSupplier.config.setData =
        supplierMasterData.contactPerson;
      supplierFormFields.designationSupplier.config.setData =
        supplierMasterData.designation;
      supplierFormFields.zipSupplier.config.setData = supplierMasterData.zip;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  return (
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
                <Input config={supplierFormFields.nameSupplier.config} />
                <Input config={supplierFormFields.nickname.config} />
                <Input config={supplierFormFields.addressSupplier.config} />
                <Input config={supplierFormFields.telnoSupplier.config} />
                <Input config={supplierFormFields.faxnoSupplier.config} />
                <Input config={supplierFormFields.emailSupplier.config} />
                <Input config={supplierFormFields.websiteSupplier.config} />
                <Input config={supplierFormFields.contactSupplier.config} />
                <Input config={supplierFormFields.designationSupplier.config} />
              </div>
              <div className="col-md-6 col-xs-12">
                <Select config={supplierFormFields.citySupplier.config} />
                <Input config={supplierFormFields.zipSupplier.config} />
                <Select config={supplierFormFields.stateSupplier.config} />
                <Select config={supplierFormFields.countrySupplier.config} />
                <Select config={supplierFormFields.CurrenceySupplier.config} />
              </div>
            </div>
          </BorderLayout>
          <BorderLayout heading={cardConfig.formActionsConfig.heading}>
            <ActionButtons />
          </BorderLayout>
        </form>
      </FormProvider>
    </Card>
  );
};
