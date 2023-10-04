// AddUpdateCompany.tsx
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  DatePicker,
  Input,
  Radio,
  Select,
} from "@shared/index";

import {
  AddUpdateCompanyType,
  addCompanyFormFields,
  useCompanyApiCallHook,
  useCityApiCallHook,
  useStateApiCallHook,
  useCountryApiCallHook,
} from "@master/index";

import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { useParams } from "react-router-dom";
import { returnObjectBasedOnID, cleanupObject } from "@utils/index";

export const AddUpdateCompany: React.FC = () => {
  const methods = useForm<AddUpdateCompanyType>();
  const params = useParams();
  const { addCompanyMutation, updateCompanyMutation, getCompanyData } =
    useCompanyApiCallHook();
  const { mutate: addCompany } = addCompanyMutation();
  const { mutate: updateCompany } = updateCompanyMutation();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Company Master",
      heading: "Company Details",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  // city api call
  const { data: cityData } = getCity();

  if (cityData) {
    addCompanyFormFields.city.config.options = selectOptionsMaker(
      cityData,
      "id",
      "cityName"
    );
  }

  // state api call
  const { data: stateData } = getState();

  if (stateData) {
    addCompanyFormFields.state.config.options = selectOptionsMaker(
      stateData,
      "stateId",
      "state"
    );
  }

  // country api call
  const { data: CountryData } = getCountry();

  if (CountryData) {
    addCompanyFormFields.country.config.options = selectOptionsMaker(
      CountryData,
      "countryId",
      "countryName"
    );
  }

  const onSubmit = methods.handleSubmit((companyData) => {
    let data: any = { ...cleanupObject(companyData) };
    if (data.cityId) {
      data.cityId = +data.cityId["value"];
    }
    if (data.stateId) {
      data.stateId = +data.stateId["value"];
    }
    if (data.countryId) {
      data.countryId = +data.countryId["value"];
    }
    if (data.companyType) {
      data.companyType = +data.companyType;
    }
    console.log(data);
    // if (params.id && data) {
    //   updateCompany({ id: params.id, ...data });
    // } else {
    //   addCompany(data);
    // }
  });

  if (params.id) {
    const { data: companyMasterData } = getCompanyData("" + params.id);
    if (companyMasterData) {
      if (cityData) {
        let id = companyMasterData?.cityId;
        let data: any = returnObjectBasedOnID(
          cityData,
          "id",
          id,
          "id",
          "cityName"
        );
        addCompanyFormFields.city.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (stateData) {
        let id = companyMasterData?.stateId;
        let data: any = returnObjectBasedOnID(
          stateData,
          "stateId",
          id,
          "stateId",
          "state"
        );
        addCompanyFormFields.state.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      if (CountryData) {
        let id = companyMasterData?.countryId;
        let data: any = returnObjectBasedOnID(
          CountryData,
          "countryId",
          id,
          "countryId",
          "countryName"
        );
        addCompanyFormFields.country.config.setData = data
          ? {
              label: data.label,
              value: data.value,
            }
          : [];
      }
      addCompanyFormFields.nameField.config.setData =
        companyMasterData.companyName;
      addCompanyFormFields.addressField.config.setData =
        companyMasterData.address;
      addCompanyFormFields.officeAddressField.config.setData =
        companyMasterData.regdOffice;
      addCompanyFormFields.telNo.config.setData = companyMasterData.phone;
      addCompanyFormFields.faxNo.config.setData = companyMasterData.fax;
      addCompanyFormFields.emailField.config.setData = companyMasterData.email;
      addCompanyFormFields.website.config.setData = companyMasterData.website;
      addCompanyFormFields.contactPerson.config.setData =
        companyMasterData.contactPerson;
      addCompanyFormFields.designation.config.setData =
        companyMasterData.designation;
      addCompanyFormFields.zip.config.setData = companyMasterData.zip;
      addCompanyFormFields.hscode.config.setData = companyMasterData.hsCode;
      addCompanyFormFields.givenName.config.setData =
        companyMasterData.givenName;
      addCompanyFormFields.referenceno.config.setData =
        companyMasterData.ourRefNo;
      addCompanyFormFields.financialyear.config.setData =
        companyMasterData.financialYear;
      addCompanyFormFields.regno.config.setData =
        companyMasterData.companyRegNo;
      addCompanyFormFields.companyType.config.setData =
        companyMasterData.companyType;
      addCompanyFormFields.incorporationDate.config.setData =
        companyMasterData.incorporationDate;
      addCompanyFormFields.bankers.config.setData = companyMasterData.bankers;
      addCompanyFormFields.notes.config.setData = companyMasterData.notes;
      addCompanyFormFields.cmie.config.setData = companyMasterData.cmie;
      addCompanyFormFields.rocStatus.config.setData =
        companyMasterData.rocStatus;
      addCompanyFormFields.recodes.config.setData = companyMasterData.records;
      addCompanyFormFields.recfin.config.setData = companyMasterData.recFin;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

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
                    <Input config={addCompanyFormFields.nameField.config} />
                    <Input config={addCompanyFormFields.addressField.config} />
                    <Input
                      config={addCompanyFormFields.officeAddressField.config}
                    />
                    <Input config={addCompanyFormFields.telNo.config} />
                    <Input config={addCompanyFormFields.faxNo.config} />
                    <Input config={addCompanyFormFields.emailField.config} />
                    <Input config={addCompanyFormFields.website.config} />
                    <Input config={addCompanyFormFields.contactPerson.config} />
                    <Input config={addCompanyFormFields.designation.config} />
                    <Input config={addCompanyFormFields.zip.config} />
                    <Select config={addCompanyFormFields.city.config} />
                    <Select config={addCompanyFormFields.state.config} />
                    <Select config={addCompanyFormFields.country.config} />
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <Input config={addCompanyFormFields.hscode.config} />
                    <Input config={addCompanyFormFields.givenName.config} />
                    <Input config={addCompanyFormFields.referenceno.config} />
                    <Input config={addCompanyFormFields.financialyear.config} />
                    <Input config={addCompanyFormFields.regno.config} />
                    <Radio config={addCompanyFormFields.companyType.config} />
                    <DatePicker
                      config={addCompanyFormFields.incorporationDate.config}
                    />
                    <Input config={addCompanyFormFields.bankers.config} />
                    <Input config={addCompanyFormFields.notes.config} />
                    <Input config={addCompanyFormFields.cmie.config} />
                    <Input config={addCompanyFormFields.rocStatus.config} />
                    <Input config={addCompanyFormFields.recodes.config} />
                    <Input config={addCompanyFormFields.recfin.config} />
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
