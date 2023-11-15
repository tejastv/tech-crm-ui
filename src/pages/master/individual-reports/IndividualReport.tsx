import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Button,
  Card,
  Checkbox,
  DivLayout,
  Input,
  Loader,
  Radio,
  Select,
  SingleCheckbox,
} from "@shared/index";

import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import { COMMON_ROUTES } from "@constants/route-constants";
import { useNavigate } from "react-router-dom";
import { CardLayOut } from "@shared/components/ui/CardLayout";
import { addIndividualReportFormFields } from "@master/index";

export const IndividualReport: React.FC = () => {
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Individual Reports",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
    formclieckUpdateConfig: {
      heading: "Click to Enter / Update / View Price List",
    },
  };

  const methods = useForm();

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          {/* Inquiry Details*/}
          <CardLayOut>
            <Button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i className="fa fa-plus"></i>INQUIRY DETAILS
            </Button>

            <form noValidate autoComplete="off" className="p-t-20">
              {/* <div className="collapse" id="collapseOne" aria-labelledby="headingOne"> */}
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.preparedFor.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.yourRefNo.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.reportNo.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.inquiryDate.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.reportDate.config}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardLayOut>

          {/* RESIDENCE VERIFICATION */}
          <CardLayOut>
            <Button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i className="fa fa-plus"></i>RESIDENCE VERIFICATION
            </Button>

            <form noValidate autoComplete="off" className="p-t-20">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="text-red-custom1">Applicant Details</h4>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.rName.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields
                            .rRelationshipWithApplicant.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rMobileNumber.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.rPersonMet.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rPersonMetMobileNo
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields
                            .rRelationshipWithApplicantCoAplication.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.rEmail.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={addIndividualReportFormFields.rGender.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rMaritalStatus.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.rEducation.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rEducationProofProvided
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rNoofFamilyMembers
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rDependentMembers.config
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="text-red-custom2">
                        Residential Property Details
                      </h4>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rAddressVisited.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rNearestLandMark.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rPropertyStatus.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rNameofTheOwner.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields
                            .rRelationshipWithApplicantCoAplication.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rTypeofUnit.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rConstructionType.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.rArea.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rNoofFloors.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rFloorsLocation.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rDurationofStay.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.rFrom.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.rTo.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rDoorNamePlate.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rClassofLocality.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rAccessbility.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rPropertyInteriors
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rPropertyExteriors
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rWall.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rSofa.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rCarpet.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={
                          addIndividualReportFormFields.rRefrigerator.config
                        }
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rDining.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rPhone.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rTv.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={
                          addIndividualReportFormFields.rMusicSystem.config
                        }
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rComputer.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.rAc.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rDateOfvisit.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.rTimeOfvisit.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.rPhotograph.config
                        }
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <Button className="btn btn-primary btn-sm" type="button">
                    Add Co-Applicant{" "}
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button className="btn btn-danger btn-sm" type="button">
                    Remove Co-Applicant{" "}
                  </Button>
                </div>
              </div>
            </form>
          </CardLayOut>
          {/* 3RD */}
          <CardLayOut>
            <Button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i className="fa fa-plus"></i>BUSINESS VERIFICATION
            </Button>

            <form noValidate autoComplete="off" className="p-t-20">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.bName.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bCompnayName.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bAddressVisited.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bNearestLandMark.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.btypeOfCompany.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.bPersonMet.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bDesignation.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.bContactNo.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bNoofEmployees.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bCompanyEmail.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.bWebsite.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bDateOfvisit.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bTimeOfvisit.config
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="text-red-custom3">
                        Employement / Business Verification
                      </h4>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bEmployeesNo.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bEmpDesignation.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bNatureofEmployement
                            .config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bDateOfJoining.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bPresentSalary.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bSalaryModeofPayment
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bPersonContacted.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bEmp2Designation.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.bContactNumber.config
                        }
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <Button className="btn btn-primary btn-sm" type="button">
                    Add Co-Applicant{" "}
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button className="btn btn-danger btn-sm" type="button">
                    Remove Co-Applicant{" "}
                  </Button>
                </div>
              </div>
            </form>
          </CardLayOut>

          <CardLayOut>
            <Button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i className="fa fa-plus"></i>PROPERTY VERIFICATION
            </Button>

            <form noValidate autoComplete="off" className="p-t-20">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="text-red-custom1">Applicant Details</h4>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.proName.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields
                            .proRelationshipWithApplicant.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proMobileNumber.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proPersonMet.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.pPersonMetMobileNo
                            .config
                        }
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="text-red-custom2">
                        Residential Property Details
                      </h4>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proAddressVisited.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proNearestLandMark
                            .config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proPropertyStatus.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proNameofTheOwner.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields
                            .proPropertyRelationshipwithApplicant.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proTypeofUnit.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proConstructionType
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.proArea.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proNoofFloors.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proFloorsLocation.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proDurationofStay.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.proFrom.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.proTo.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proDoorNamePlate.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proClassofLocality
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proAccessbility.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proPropertyInteriors
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proPropertyExteriors
                            .config
                        }
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.proWall.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.proSofa.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.proCarpet.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={
                          addIndividualReportFormFields.proRefrigerator.config
                        }
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.proDining.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.proPhone.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.proTv.config}
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={
                          addIndividualReportFormFields.proMusicSystem.config
                        }
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={
                          addIndividualReportFormFields.proComputer.config
                        }
                      />
                    </div>
                    <div className="col-md-1 col-xs-12">
                      <SingleCheckbox
                        config={addIndividualReportFormFields.proAc.config}
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proDateOfvisit.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.proTimeOfvisit.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.proPhotograph.config
                        }
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <Button className="btn btn-primary btn-sm" type="button">
                    Add Co-Applicant{" "}
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button className="btn btn-danger btn-sm" type="button">
                    Remove Co-Applicant{" "}
                  </Button>
                </div>
              </div>
            </form>
          </CardLayOut>

          <CardLayOut>
            <Button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i className="fa fa-plus"></i>KYC VERIFICATION
            </Button>

            <form noValidate autoComplete="off" className="p-t-20">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <label>PAN Card</label>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.panNumber.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.panName.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.panDateOfBirth.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields
                            .panAddressAsPerVisirMatch.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.panOriginalSeen.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.panVerified.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.panVerificaionResult
                            .config
                        }
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Aadhar Card</label>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.adharNumber.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.adharName.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.adharDateOfBirth.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields
                            .adharAddressAsPerVisirMatch.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.adharOriginalSeen.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.adharVerified.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Radio
                        config={
                          addIndividualReportFormFields.adharVerificaionResult
                            .config
                        }
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <Button className="btn btn-primary btn-sm" type="button">
                    Add Co-Applicant KYC
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button className="btn btn-danger btn-sm" type="button">
                    Remove Co-Applicant KYC
                  </Button>
                </div>
              </div>
            </form>
          </CardLayOut>

          {/* PHOTOS/IMAGE */}

          <CardLayOut>
            <Button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i className="fa fa-plus"></i>PHOTOS/IMAGE
            </Button>

            <form noValidate autoComplete="off" className="p-t-20">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <Input
                      config={
                        addIndividualReportFormFields.residencePhotos.config
                      }
                    />

                    <Input
                      config={
                        addIndividualReportFormFields.propertyPhotos.config
                      }
                    />

                    <Input
                      config={
                        addIndividualReportFormFields.adharVerification.config
                      }
                    />

                    <Input
                      config={addIndividualReportFormFields.otherPhotos.config}
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardLayOut>

          <CardLayOut>
            <Button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
            >
              <i className="fa fa-plus"></i>ITR VERIFICATION
            </Button>

            <form noValidate autoComplete="off" className="p-t-20">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.name.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.pan.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.formNo.config}
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.assessmentYear.config
                        }
                      />
                    </div>

                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={
                          addIndividualReportFormFields.acknowledgementNo.config
                        }
                      />
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <Input
                        config={addIndividualReportFormFields.verified.config}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardLayOut>
        </FormProvider>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </Card>
    </>
  );
};
