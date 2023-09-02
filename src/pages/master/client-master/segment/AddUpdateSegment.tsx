import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";

import {
  AddUpdateSegmentType,
  addSegmentFormFields,
  useSegmentApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateSegment: React.FC = () => {
  const methods = useForm<AddUpdateSegmentType>();
  const { addSegmentMutation, updateSegmentMutation, getSegmentData } =
    useSegmentApiCallHook();
  const { mutate: addSegment } = addSegmentMutation();
  const { mutate: updateSegment } = updateSegmentMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Segment" : "Add Segment",
      heading: "Segment Details",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  if (params.id) {
    const { data: segmentData, isSuccess: segmentDataSuccess } = getSegmentData(
      "" + params.id
    );
    if (segmentDataSuccess) {
      addSegmentFormFields.clientSegment.config.setData =
        segmentData?.segmentName;
    }
  }

  const onSubmit = methods.handleSubmit((segmentData) => {
    if (params.id && segmentData) {
      updateSegment({ id: params.id, ...segmentData });
    } else {
      addSegment(segmentData);
    }
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
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <div className="row">
                <div className="col-6 pull-right">
                  <Input config={addSegmentFormFields.clientSegment.config} />
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
