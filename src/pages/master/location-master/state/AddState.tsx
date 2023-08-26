import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddStateType,
  addStateFormFields,
  queryKeys,
  useLocationMasterApiCall,
} from "@master/index";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const AddState: React.FC = () => {
  const methods = useForm<AddStateType>();
  const { addState } = useLocationMasterApiCall();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add State",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const addStateMutation = useMutation({
    mutationFn: addState,
    onSuccess: (data) => {
      // Invalidate and refetch
      console.log(data);
      queryClient.invalidateQueries({ queryKey: [queryKeys.STATE_DATA] });
      navigate(-1);
    },
    onError: () => {
      console.log("Error");
    },
  });

  const onSubmit = methods.handleSubmit((stateData) => {
    addStateMutation.mutate(stateData);
  });

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
                  <Input config={addStateFormFields.stateField.config} />
                  <Input config={addStateFormFields.numbericCodeField.config} />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input config={addStateFormFields.stateCodeField.config} />
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
