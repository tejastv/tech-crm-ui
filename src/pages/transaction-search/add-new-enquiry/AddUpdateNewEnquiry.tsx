import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  Select,
  Button,
  InputWithText,
  ActionButtons,
  Table,
  Loader,
  TableType,
} from "@shared/index";
import { AddUpdateEnquiryType, ClientType, addEnquiryFormFields, useEnquiryApiCallHook, useServiceTypeApiCallHook } from "@transaction-search/index";
import { Link, useParams } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
import { useActualBuyerApiCallHook, useCityApiCallHook, useClientApiCallHook, useClientGroupApiCallHook, useCompanyApiCallHook, useCountryApiCallHook, useCreditDaysApiCallHook, useCurrencyApiCallHook, useExecutiveApiCallHook, useFinYearApiCallHook, useLocalSourceApiCallHook, useSegmentApiCallHook, useSourceApiCallHook, useStateApiCallHook } from "@pages/master";
import { cleanupObject, selectOptionsMaker } from "@utils/index";
// import {useStateApiCallHook } from "@pages/master";

export const AddEnquiry: React.FC = () => {
  // const { getState } = useStateApiCallHook();
  // const { data: stateData, isLoading } = getState();
  const methods = useForm<AddUpdateEnquiryType>();
  const { addEnquiryMutation, updateEnquiryMutation,getEnquiryData} =
     useEnquiryApiCallHook();
  const params = useParams();
  const { mutateAsync: addEnquiry } = addEnquiryMutation();
  const { mutateAsync: updateEnquiry } = updateEnquiryMutation();
  const { getCity } = useCityApiCallHook();
  const { getState } = useStateApiCallHook();
  const { getCountry } = useCountryApiCallHook();
  const { getServiceType } = useServiceTypeApiCallHook();
  const { getEnqType } = useServiceTypeApiCallHook();
  const { getSource } = useSourceApiCallHook();
  const { getLocalSource } = useLocalSourceApiCallHook();
  const { getClient } = useClientApiCallHook();
  const { getCompany } = useCompanyApiCallHook();
  const { getActualBuyer } = useActualBuyerApiCallHook();
  const { getFinYear } = useFinYearApiCallHook();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Enquiry",
      heading: "Enquiry",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Action Button",
    },
  };

   // city api call
   const { data: cityData } = getCity();
   if (cityData) {
     addEnquiryFormFields.cityenquiry.config.options = selectOptionsMaker(
       cityData,
       "id",
       "cityName"
     );
   }
 
   // state api call
   const { data: stateData } = getState();
   if (stateData) {
     addEnquiryFormFields.stateenquiry.config.options = selectOptionsMaker(
       stateData,
       "stateId",
       "state"
     );
   }
 
   // country api call
   const { data: CountryData } = getCountry();
   if (CountryData) {
     addEnquiryFormFields.countryenquiry.config.options = selectOptionsMaker(
       CountryData,
       "countryId",
       "countryName"
     );
   }
 
  //  Client api call
   const { data: ClientData } = getClient();
   if (ClientData) {
     addEnquiryFormFields.clientenquiry.config.options = selectOptionsMaker(
       ClientData,
       "clientID",
       "clientName"
     );
   }
  //  Fyear  api call
   const { data: fYearData } = getFinYear();
   if (fYearData) {
     addEnquiryFormFields.yearenquiry.config.options = selectOptionsMaker(
      fYearData,
       "id",
       "finYear"
     );
   }
  //  Actual buyer api call
   const { data: ActualBuyerData } = getActualBuyer();
   if (ActualBuyerData) {
     addEnquiryFormFields.actualbureyenquiry.config.options = selectOptionsMaker(
      ActualBuyerData,
       "partyId",
       "partyName"
     );
   }
 
   // Source api call
   const { data: SourceData } = getSource();
   if (SourceData) {
     addEnquiryFormFields.sourceenquiry.config.options = selectOptionsMaker(
       SourceData,
       "sourceID",
       "source"
     );
   }
 
   // Local Source api call
   const { data: LocalSourceData } = getLocalSource();
   if (LocalSourceData) {
     addEnquiryFormFields.localsourceenquiry.config.options = selectOptionsMaker(
       LocalSourceData,
       "localSourceId",
       "localSource"
     );
   }
 
   // Company api call
   const { data: CompanyData } = getCompany();
   if (CompanyData) {
     addEnquiryFormFields.companyenquiry.config.options = selectOptionsMaker(
      CompanyData,
       "companyId",
       "companyName"
     );
   }
 
   // Service Type api call
   const { data: ServiceData } = getServiceType();
   if (ServiceData) {
     addEnquiryFormFields.servicetype.config.options = selectOptionsMaker(
      ServiceData,
       "serviceTypeID",
       "serviceType"
     );
   }
 
   // enq Type api call
   const { data: enqtypeData } = getEnqType();
   if (enqtypeData) {
     addEnquiryFormFields.enqtype.config.options = selectOptionsMaker(
      enqtypeData,
       "enquiryStatusID",
       "enquiryStatus"
     );
   }

   const onSubmit = methods.handleSubmit((enquiryData): void => {
    let data: any = { ...cleanupObject(enquiryData) };
    if (data.stateId) {
      data.stateId = data.stateId.value;
    }
    if (data.countryId) {
      data.countryId = data.countryId.value;
    }
    if (data.cityId) {
      data.cityId = data.cityId.value;
    }
    if (data.clientId) {
      data.clientId = data.clientId.value;
    }
    if (data.localSourceId) {
      data.localSourceId = data.localSourceId.value;
    }
    if (data.sourceID) {
      data.sourceID = data.sourceID.value;
    }
    if (data.partyId) {
      data.partyId = data.partyId.value;
    }
    if (data.fYearid) {
      data.fYearid = data.fYearid.value;
    }

    console.log(data);
    if (params.id && data) {
      updateEnquiry({ id: params.id, ...data });
    } else {
      addEnquiry(data);
    }
  });
  const columns: ColumnDef<ClientType>[] = [
    {
      id: "srNo",
      // cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      // accessorFn: (row) => row.state,
      id: "Client Name",
      // cell: (info) => info.getValue(),
      header: () => <>Client Name</>,
    },
    {
      // accessorFn: (row) => row.stateCodeN,
      id: "Address",
      // cell: (info) => info.getValue(),
      header: () => <>Address</>,
    },
    {
      // accessorFn: (row) => row.stateCodeA,
      id: "Country Name",
      // cell: (info) => info.getValue(),
      header: () => <>Country Name</>,
    },
    {
      id: "Instruction",
      // cell: (info) => info.getValue(),
      header: () => <>Instruction</>,
    },
  ];

  const tableConfig: TableType<ClientType> = {
    config: {
      tableName: "State",
      columns: columns,
      tableData : [],
      copyBtn: true,
      csvBtn: true,
      excelBtn: true,
      pdfBtn: true,
      printBtn: true,
      globalSearchBox: true,
      pagination: {
        pageSize: 10,
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
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
                  <div className="card-body">
            
                  <Select config={addEnquiryFormFields.companyenquiry.config} />

                  <Select config={addEnquiryFormFields.yearenquiry.config} />
                  
                  <Input config={addEnquiryFormFields.refnoenquiry.config} />

                  <div className="col-md-12 col-xs-12 text-right">
                    
                  <small className="enquirynote">
                    <InputWithText config={addEnquiryFormFields.refnote.config} />
                  </small>

                  </div>

                  <Select config={addEnquiryFormFields.sourceenquiry.config}/>

                  <Input config={addEnquiryFormFields.givenaddressEnquiry.config} />

                  <Select config={addEnquiryFormFields.cityenquiry.config} />

                  <Select config={addEnquiryFormFields.stateenquiry.config} />

                  <Select config={addEnquiryFormFields.countryenquiry.config} />

                  <Input config={addEnquiryFormFields.zipenquiry.config} />

                  <Input config={addEnquiryFormFields.telnoenquiry.config} />

                  <Input config={addEnquiryFormFields.faxnoenquiry.config} />
                  
                  <Input config={addEnquiryFormFields.emailenquiry.config} />

                  <Input config={addEnquiryFormFields.websiteenquiry.config} />

                  <Input config={addEnquiryFormFields.contactenquiry.config} />

                  <Input config={addEnquiryFormFields.designationenquiry.config} />
                </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
  
                  <Input config={addEnquiryFormFields.givenname.config} />

                  <Input config={addEnquiryFormFields.recdon.config} />
                  
                  <Select config={addEnquiryFormFields.enqtype.config} />

                  <Select config={addEnquiryFormFields.localsourceenquiry.config} />
                  
                  <Select config={addEnquiryFormFields.servicetype.config} />
                  
                  <Input config={addEnquiryFormFields.dueon.config} />

                  <Select config={addEnquiryFormFields.printstatus.config} />

                  <Select config={addEnquiryFormFields.enqstatus.config} />

                  <Select config={addEnquiryFormFields.svisit.config} />

                  <Input config={addEnquiryFormFields.notesforenquiry.config} />

                  <Input config={addEnquiryFormFields.notesforadj.config} />

                  <Input config={addEnquiryFormFields.instructionenquiry.config} />
                </div>
                </div>

                <h6 className="card-title col-12">Client Details</h6>
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  <Input config={addEnquiryFormFields.clientrefenquiry.config} />
                  {/* <div className="col-sm-9"> */}
                  <Select config={addEnquiryFormFields.clientenquiry.config} />
                  {/* </div> */}
                  <div className="col-md-14 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price
                  </Button>
                </div>
                  <Input config={addEnquiryFormFields.requestnoenquiry.config} />
                </div>
                </div>
                
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  <Input config={addEnquiryFormFields.clientIdenquiry.config} />
                  {/* <div className="col-md-12"> */}
                  {/* <div className="col-sm-9"> */}
                  <Select config={addEnquiryFormFields.actualbureyenquiry.config} />
                  {/* </div> */}
                  {/* <div className="col-sm-1"> */}
                  <div className="col-md-14 col-xs-12 text-right">
                  <i className="fa fa-refresh"></i>
                  </div>
                  {/* </div> */}
                  {/* </div> */}
                  <div className="col-md-11 col-xs-12 text-right">
                  <Link to={""} className="card-title"><InputWithText  config={addEnquiryFormFields.actualbuyeraddnote.config} /></Link>
                  </div>
                  <Input config={addEnquiryFormFields.priceenquiry.config} />
                </div>
                </div>
                
                <div className="col-md-4 col-xs-12">
                  <div className="card-body">
                  
                 <Table config={tableConfig.config}>
                  null
                 </Table>
                </div> 
                </div>

                <div className="col-md-4 col-xs-12">
                  <div className="card-body"></div>
                  </div>
                
                <div className="card-title">
                <InputWithText  config={addEnquiryFormFields.discountcommissionnote.config} />
                </div>
                <div className="col-3">
                <Input  config={addEnquiryFormFields.disenquiry.config} />
                </div>
                <div className="col-3">
                <Input  config={addEnquiryFormFields.discountenquiry.config} />
                </div>
                {/* <Input  config={addEnquiryFormFields.discountenquiry.config} /> */}
                <div className="col-3">
                <Input  config={addEnquiryFormFields.adjustenquiry.config} />
                <div className="col-md-14 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>View Adjust
                  </Button>
                </div>
                </div>
                <div className="col-3">
                <Input  config={addEnquiryFormFields.commenquiry.config} />
                </div>
                <div className="card-title col-12">
                <InputWithText  config={addEnquiryFormFields.discounttypenote .config} />
                </div>
                </div>
                
            </BorderLayout>
          </form>
        </FormProvider>
       
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
              <ActionButtons />
            </BorderLayout>
      </Card>
    </>
  );
};


