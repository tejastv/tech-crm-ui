// AddCompany.tsx
import React from "react";
import {
  ActionButtons,
  BorderLayout,
  Card,
  InputType,
} from "../../../../../shared";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../../../../../shared";

type PersonScore = {
  name: string;
  email: string;
};

export const AddCompany: React.FC = () => {
  const { handleSubmit } = useForm<PersonScore>();
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
    // console.log(data)
    // methods.reset()
    console.log("value", data);
    // setSuccess(true)
  });

  // const onSubmit = (values: PersonScore) => {
  //   console.log("value", values);
  //   console.log("name", values.name);
  //   console.log("email", values.email);
  // };

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
                  <Input config={name_validation.config}></Input>
                  <Input config={email_validation.config}></Input>
                  <Input config={address_validation.config}></Input>
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
