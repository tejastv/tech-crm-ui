import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";

import {
  SegmentFormType,
  SegmentType,
  segmentFormFields,
  useSegmentApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";

export const SegmentForm: React.FC = () => {
  const { state: localSegmentData } = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SegmentFormType>();
  const { addSegmentMutation, updateSegmentMutation, getSegmentData } =
    useSegmentApiCallHook();
  const { mutateAsync: addSegment } = addSegmentMutation();
  const { mutateAsync: updateSegment } = updateSegmentMutation();
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

  const { data: segmentData } = getSegmentData(
    "" + params.id,
    !localSegmentData && params.id !== undefined
  );

  useEffect(() => {
    if (params.id) {
      if (segmentData && Object.values(segmentData).length > 0) {
        reset(mapSegmentDataToSegmentForm(segmentData));
      }
    }
  }, [params.id, segmentData]);

  const mapSegmentRequest = (segmentFormData: SegmentFormType) => {
    let segmentData: Partial<SegmentType> = {
      segmentName: segmentFormData.segmentName,
    };
    return cleanupObject(segmentData);
  };

  const mapSegmentDataToSegmentForm = (segmentData: SegmentType) => {
    let segmentFormData: Partial<SegmentFormType> = {
      segmentName: segmentData.segmentName,
    };
    return segmentFormData;
  };

  const onSubmit = handleSubmit((segmentData: SegmentFormType): void => {
    let reqObj: Partial<SegmentType> = mapSegmentRequest(segmentData);
    if (params.id && reqObj) {
      updateSegment({ segmentId: +params.id, ...reqObj });
    } else {
      addSegment(reqObj);
    }
  });

  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <div className="row">
            <div className="col-6 pull-right">
              <NewInput
                errors={errors}
                register={register}
                config={segmentFormFields.clientSegment}
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
