import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logoImage from "@assets/images/logo.png";
import { useAuth } from "@hooks/index";
import { DASHBOARD, LOGIN, MASTER_ROUTES } from "constants";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const logoutHandler = (): void => {
    logout();
    navigate(LOGIN);
  };
  return (
    <>
      <header className="topbar" data-navbarbg="skin1">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header" data-logobg="skin1">
            <a
              className="nav-toggler waves-effect waves-light d-block d-md-none"
              href="#"
            >
              <i className="ti-menu ti-close"></i>
            </a>
            <Link to={DASHBOARD} className="navbar-brand">
              <span className="logo-text">
                <img src={logoImage} alt="homepage" className="dark-logo" />
                <img
                  src={logoImage}
                  className="light-logo"
                  width="170"
                  alt="homepage"
                />
              </span>
            </Link>
            <a
              className="topbartoggler d-block d-md-none waves-effect waves-light nav-toggler"
              href="#"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ti-more"></i>
            </a>
          </div>
          <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
              <nav className="sidebar-nav">
                <ul id="sidebarnav">
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      aria-expanded="false"
                    >
                      <i className="fa fa-asterisk"></i>
                      <span className="hide-menu">Master</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.COMPANY_ROUTES.COMPANY}`}
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Company</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">Client Master</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_MASTER_ROUTE}${MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Client</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_MASTER_ROUTE}${MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENTGROUP}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Client Group</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.CLIENT_MASTER_ROUTES.CLIENT_MASTER_ROUTE}${MASTER_ROUTES.CLIENT_MASTER_ROUTES.SEGMENT}`}
                            >

                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Segment</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">Price List Master</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="price_list_for_clients.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Price List(for Clients)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="price_list_group_wise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Price List(Group wise)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="std_price_list_for_clients.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Std.Price List(for Clients)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="actual_buyer_master.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Actual Buyer Master
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">Location Master</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.LOCATION_MASTER_ROUTE}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.CITY}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">City</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.LOCATION_MASTER_ROUTE}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.STATE}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">State</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.LOCATION_MASTER_ROUTE}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.COUNTRY}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Country</span>
                              {/* </Link> */}
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.LOCATION_MASTER_ROUTE}${MASTER_ROUTES.LOCATION_MASTER_ROUTES.CONTINENT}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Continent</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* Working */}
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">LocalSource Master</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTE}${MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.LOCALSOURCE}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Local Source</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTE}${MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.PRICE}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Price List(for local source)
                              </span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTE}${MASTER_ROUTES.LOCALSOURCEM_MASTER_ROUTES.STDPRICE}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Std Price List(for local source)
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">
                            Information Master 1
                          </span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.INFORMATION_MASTER_ROUTE}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.PAYMENTMODE}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Payment Mode
                              </span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.INFORMATION_MASTER_ROUTE}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.BANKDRAWN}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Bank Master(Drawn On)
                              </span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.INFORMATION_MASTER_ROUTE}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.BANKDEPOSIT}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Bank Master (Deposit)
                              </span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.INFORMATION_MASTER_ROUTE}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.SOURCE}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Source
                              </span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.INFORMATION_MASTER_ROUTE}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.CURRENCY}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Currency
                              </span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.INFORMATION_MASTER_ROUTE}${MASTER_ROUTES.INFORMATION_MASTER_ROUTES.SUPPLIER}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Supplier Master
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">
                            Information Master 2
                          </span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link" href="executive.php">
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link" href="fin_year.php">
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Fin. year</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <Link
                              className="sidebar-link"
                              to={`${MASTER_ROUTES.MASTER}${MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.INFORMATION_2_MASTER_ROUTE}${MASTER_ROUTES.INFORMATION_2_MASTER_ROUTES.INDUSTRY}`}
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Industry</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link" href="calltype.php">
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Call type</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="purpose_master.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Purpose Master</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link" href="creditdays.php">
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Credit Days</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link" href="site_status.php">
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Site Status</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link" href="user_rights.php">
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Users Master</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">Update HS Code</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_1.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive1</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_2.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive2</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_3.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive3</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_4.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive4</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_5.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive5</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_6.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive6</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_7.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive7</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_8.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive8</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_9.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive9</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="executive_update_hs_code_10.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Executive10</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="user_wise_activity.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">User Wise Activity</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="mirainform_report.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Mirainform Report</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#"
                      aria-expanded="false"
                    >
                      <i className="fa fa-list"></i>
                      <span className="hide-menu ">Transaction / Search</span>
                    </a>
                    <ul className="collapse first-level">
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="add_enquiry_detail.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Add New Enquiry</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="enq_details.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">All Enquiries</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="enquiry_search.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Enquiry Search</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="crm_search.php"
                          target="_blank"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">CRM Search</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="pro_search.php"
                          target="_blank"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">PRO Search</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="expr_search.php"
                          target="_blank"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Exec-PR Search</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="purchase_bills_of_suppliers.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Purchase Bills(of Suppliers)
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="bulk_enquiries.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Add Bulk Enquiries</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#"
                      aria-expanded="false"
                    >
                      <i className="fa fa-folder-open"></i>
                      <span className="hide-menu ">Proforma</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="enq_details_pi.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Enq. (PI)</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="generate_invoice_pi.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Generate PI</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#"
                      aria-expanded="false"
                    >
                      <i className="fa fa-bar-chart"></i>
                      <span className="hide-menu">Reports</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-collage"></i>
                          <span className="hide-menu">Enquiries</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="report_no_of_enquiries.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                No. of Enquiries
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="report_no_of_enquiries_group_country_wise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                No. of Enquiries - Group - Country
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="report_no_of_enquiries_graph.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                No. of Enquiries(Graph)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="report_no_of_enquiries_graph_groupwise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                No. of Enquiries(Graph)-Group wise
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="report_no_of_invoice_based_segment_country.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            No. of Reports(INVOICE based)-Segment-Country
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="sales_summary_segment_wise.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Sales Summary (Segment wise)
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link " href="abc_analysis.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">ABC Analysis</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link " href="ledger.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Ledger</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link " href="summery_clients.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Summary (Clients)</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="summery_with_address_tds.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Summary (With Address & TDS)
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link " href="bank_slip.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Bank Slip</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="generate_tds_cer_req_letter.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Generate TDS Certificate Request Letter
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="generate_comission.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Generate Comission</span>
                        </a>
                      </li>

                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="enquiry_reminder_ls.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Enquiry Reminder (Local Source)
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="renewal_reminder_client.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Renewal Reminder (Client)
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="renewal_reminder_exec.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Renewal Reminder (Exec.)
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="client_list_csc_all.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Client List(City / State / Country / ALL)
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="client_wise_last_enquiry_received.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Client wise Last Enquiry Received
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="follow_up_history.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Follow-up History </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="follow_up_reminder.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Follow-up Reminder</span>
                        </a>
                      </li>

                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link " href="activity_log.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Activity Log</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#"
                      aria-expanded="false"
                    >
                      <i className="fa fa-file-text"></i>
                      <span className="hide-menu ">Invoices</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      {" "}
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-receipt"></i>
                          <span className="hide-menu ">
                            Generate Invoice Master
                          </span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="generate_invoice_for_client_gst.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Generate Invoice(GST)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="generate_invoice_auto_gst.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Generate Invoice(Auto) - GST
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="generate_invoice_actbuyer_auto_gst.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Generate Invoice - Actual Buyer (Auto) - GST
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-receipt"></i>
                          <span className="hide-menu ">
                            Invoice Detail Master
                          </span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_list.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Invoice List</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_detail_report.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice Detail Report
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_detail_report_pro.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice Detail Report PRO
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_detail_report_grpwise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice Detail Report(Group wise)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_list_with_tds.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice List (With TDS)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a className="sidebar-link " href="#">
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice List(With Service Tax)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_list_proforma.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice List(Proforma)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_list_executive_wise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice List(Exec. wise)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_settled.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Invoice Settled
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-receipt"></i>
                          <span className="hide-menu ">Outstanding Master</span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invoice_list.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invoice_list_state_wise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List(State wise)
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invlist_executive_wise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List - Executive
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invlist_group_wise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List - Group
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invoice_list_summary.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List - Summary
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invoice_list_bulk.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List - Bulk
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invoice_list_bulk_print.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List - Bulk - Print
                              </span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="outstanding_invoice_list_bulk_state_wise.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">
                                Outstanding Invoice List - Bulk(State wise)
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="invoice_list_with_payment_status.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Invoice List with Payment Status{" "}
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link "
                          href="sales_summary_with_pay_status_tds.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Sales Summary with Payment
                            <br /> Status and TDS
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-receipt"></i>
                          <span className="hide-menu ">
                            Invoice(for Local Source)
                          </span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="invoice_entry.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Invoice Entry</span>
                            </a>
                          </li>
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link "
                              href="inv_for_localsource_invoice_list.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Invoice List</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link has-arrow waves-effect waves-dark"
                          href="#"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-receipt"></i>
                          <span className="hide-menu ">
                            Invoice(for Executive)
                          </span>
                        </a>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level"
                        >
                          <li className="sidebar-item">
                            {" "}
                            <a
                              className="sidebar-link"
                              href="invoice_entry_for_executive.php"
                            >
                              <i className="mdi mdi-creation"></i>
                              <span className="hide-menu ">Invoice Entry</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#"
                      aria-expanded="false"
                    >
                      <i className="fa fa-money"></i>
                      <span className="hide-menu ">Receipts / Payments</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="payment_receipt.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Receipt</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="multiple_payment_receipt.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Receipt(Multiple Entries){" "}
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="advanced_receipt.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Receipt(ADVANCE)</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="total_collection.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">TOTAL COLLECTION</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="executive_wise_total_collection.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Executive Wise TOTAL COLLECTION
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="bank_statement.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Bank Statement</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="bank_statement_details.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Bank Statement Details
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="debit_notes.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Debit Notes</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="credit_notes.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Credit Notes</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    {" "}
                    <a
                      className="sidebar-link has-arrow waves-effect waves-dark"
                      href="#"
                      aria-expanded="false"
                    >
                      <i className="fa fa-cogs"></i>
                      <span className="hide-menu ">Utility</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="merge_client.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Merge Client</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a
                          className="sidebar-link"
                          href="merge_actual_buyer.php"
                        >
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">Merge Actual Buyer</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        {" "}
                        <a className="sidebar-link" href="skipped_invoices.php">
                          <i className="mdi mdi-creation"></i>
                          <span className="hide-menu ">
                            Skipped Invoice List
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item c-pointer">
                    <a className="sidebar-link" onClick={logoutHandler}>
                      <i className="fas fa-sign-out-alt"></i>
                      <span className="hide-menu ">Exit</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </nav>
      </header>
    </>
  );
};
