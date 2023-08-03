// AddCompany.tsx
import React from "react";
import {
  ActionButtons,
  BorderLayout,
  Card,
  InputType,
  Select,
} from "../../../../../shared";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../../../shared";
import { selectOptionsMaker } from "../../../../../utils";

type PersonScore = {
  name: string;
  email: string;
};

export const AddCompany: React.FC = () => {
  const methods = useForm();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Company Master",
      heading: "Company Details",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const onSubmit = methods.handleSubmit((data) => {
    console.log("value", data);
  });

  const name_validation: InputType = {
    config: {
      name: "name",
      label: "Name",
      type: "text",
      id: "name",
      placeholder: "write your name ...",
      validation: {
        required: {
          value: true,
          message: "required",
        },
        maxLength: {
          value: 30,
          message: "30 characters max",
        },
      },
    },
  };
  const address_validation: InputType = {
    config: {
      name: "address",
      label: "Address",
      id: "Address",
      multiline: true,
      placeholder: "write your Address ...",
      validation: {
        required: {
          value: true,
          message: "required",
        },
      },
    },
  };
  const email_validation: InputType = {
    config: {
      name: "email",
      label: "Email Address",
      type: "email",
      id: "email",
      placeholder: "write a random email address",
      validation: {
        required: {
          value: true,
          message: "required",
        },
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "not valid",
        },
      },
    },
  };

  const options = [
    { value: "chocolate33", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const select_validation: InputType = {
    config: {
      name: "chocolate",
      label: "Select Box",
      id: "chocolate",
      options: selectOptionsMaker(options, "value", "label"),
      placeholder: "write a random Select Box",
      validation: {
        required: {
          value: true,
          message: "required",
        },
      },
    },
  };

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
                  <Input config={name_validation.config} />
                  <Input config={email_validation.config} />
                  <Input config={address_validation.config} />
                  <Select config={select_validation.config} />
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
