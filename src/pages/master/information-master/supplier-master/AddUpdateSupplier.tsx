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
  AddUpdateSupplierMasterType,
  addSupplierFormFields,
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

export const AddSupplier: React.FC = () => {
  const methods = useForm<AddUpdateSupplierMasterType>();
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
  }, [cityData?.length && Object.values(cityData).length]);

  if (cityOptions?.length) {
    let options = selectOptionsMaker(cityOptions, "id", "cityName");
    addSupplierFormFields.citySupplier.config.options = options;
  }

  // state api call
  const { data: stateData } = getState();

  const [stateOptions, setStateOptions] = useState<StateType[]>();

  useEffect(() => {
    if (stateData) {
      setStateOptions(Object.values(stateData));
    }
  }, [stateData?.length && Object.values(stateData).length]);

  if (stateOptions?.length) {
    let options = selectOptionsMaker(
      stateOptions,
      "stateId",
      "stateName",
      true
    );
    addSupplierFormFields.stateSupplier.config.options = options;
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
    addSupplierFormFields.countrySupplier.config.options = options;
  }

  const { data: CurrencyData } = getCurrency();

  if (CurrencyData) {
    addSupplierFormFields.CurrenceySupplier.config.options = selectOptionsMaker(
      CurrencyData,
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
    if (data.currencyID) {
      data.currencyID = +data.currencyID["value"];
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
        addSupplierFormFields.citySupplier.config.setData = data
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
        addSupplierFormFields.stateSupplier.config.setData = data
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
        addSupplierFormFields.countrySupplier.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }

      if (CurrencyData) {
        let id = supplierMasterData?.currencyID;
        let data: any = returnObjectBasedOnID(
          CurrencyData,
          "currencyId",
          id,
          "currencyId",
          "currencyType"
        );
        addSupplierFormFields.CurrenceySupplier.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      addSupplierFormFields.nameSupplier.config.setData =
        supplierMasterData.supplierName;
      addSupplierFormFields.nickname.config.setData =
        supplierMasterData.nickName;
      addSupplierFormFields.addressSupplier.config.setData =
        supplierMasterData.address;
      addSupplierFormFields.telnoSupplier.config.setData =
        supplierMasterData.phone;
      addSupplierFormFields.faxnoSupplier.config.setData =
        supplierMasterData.fax;
      addSupplierFormFields.emailSupplier.config.setData =
        supplierMasterData.email;
      addSupplierFormFields.websiteSupplier.config.setData =
        supplierMasterData.website;
      addSupplierFormFields.contactSupplier.config.setData =
        supplierMasterData.contactPerson;
      addSupplierFormFields.designationSupplier.config.setData =
        supplierMasterData.designation;
      addSupplierFormFields.zipSupplier.config.setData = supplierMasterData.zip;
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
                <Input config={addSupplierFormFields.nameSupplier.config} />
                <Input config={addSupplierFormFields.nickname.config} />
                <Input config={addSupplierFormFields.addressSupplier.config} />
                <Input config={addSupplierFormFields.telnoSupplier.config} />
                <Input config={addSupplierFormFields.faxnoSupplier.config} />
                <Input config={addSupplierFormFields.emailSupplier.config} />
                <Input config={addSupplierFormFields.websiteSupplier.config} />
                <Input config={addSupplierFormFields.contactSupplier.config} />
                <Input
                  config={addSupplierFormFields.designationSupplier.config}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                <Select config={addSupplierFormFields.citySupplier.config} />
                <Input config={addSupplierFormFields.zipSupplier.config} />
                <Select config={addSupplierFormFields.stateSupplier.config} />
                <Select config={addSupplierFormFields.countrySupplier.config} />
                <Select
                  config={addSupplierFormFields.CurrenceySupplier.config}
                />
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
