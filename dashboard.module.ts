import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../angularMaterial/angularMaterial'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from '../components/admin/admin.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { BillingComponent } from '../components/billing/billing.component';
import { ImportComponent } from '../components/import/import.component';
import { ExpenseComponent } from '../components/expense/expense.component';
import { ReportComponent } from '../components/report/report.component';
import { HelpComponent } from '../components/help/help.component';
import { MasterComponent } from '../components/master/master.component';
import { OperationComponent } from '../components/operation/operation.component';
import { PODUpdateComponent } from '../components/operation/components/podupdate/podupdate.component';
import { RunSheetComponent } from '../components/operation/components/run-sheet/run-sheet.component';
import { InScanComponent } from '../components/operation/components/in-scan/in-scan.component';
import { ManifestComponent } from '../components/operation/components/manifest/manifest.component';
import { FastBookingComponent } from '../components/operation/components/fast-booking/fast-booking.component';
import { BookingComponent } from '../components/operation/components/booking/booking.component';
import { VehicleMasterComponent } from '../components/master/components/vehicle-master/vehicle-master.component';
import { RateMasterViewComponent } from '../components/master/components/rate-master-view/rate-master-view.component';
import { RateMasterGroupComponent } from '../components/master/components/rate-master-group/rate-master-group.component';
import { RateMasterFranchiseComponent } from '../components/master/components/rate-master-franchise/rate-master-franchise.component';
import { RateMasterCustomerComponent } from '../components/master/components/rate-master-customer/rate-master-customer.component';
import { ExpenseMasterComponent } from '../components/master/components/expense-master/expense-master.component';
import { ConsigneeMasterComponent } from '../components/master/components/consignee-master/consignee-master.component';
import { CustomerMasterComponent } from '../components/master/components/customer-master/customer-master.component';
import { ProductMasterComponent } from '../components/master/components/product-master/product-master.component';
import { ModeMasterComponent } from '../components/master/components/mode-master/mode-master.component';
import { ODAMasterComponent } from '../components/master/components/odamaster/odamaster.component';
import { MultipleZoneMasterComponent } from '../components/master/components/multiple-zone-master/multiple-zone-master.component';
import { ZoneMasterComponent } from '../components/master/components/zone-master/zone-master.component';
import { CountryMasterComponent } from '../components/master/components/country-master/country-master.component';
import { StateMasterComponent } from '../components/master/components/state-master/state-master.component';
import { PincodeMasterComponent } from '../components/master/components/pincode-master/pincode-master.component';
import { DestinationMasterComponent } from '../components/master/components/destination-master/destination-master.component';
import { FranchiseMasterComponent } from '../components/master/components/franchise-master/franchise-master.component';
import { BranchMasterComponent } from '../components/master/components/branch-master/branch-master.component';
import { CompanyMasterComponent } from '../components/master/components/company-master/company-master.component';
import { HubMasterComponent } from '../components/master/components/hub-master/hub-master.component';
import { RTOComponent } from '../components/import/components/rto/rto.component';
import { DeliveryComponent } from '../components/import/components/delivery/delivery.component';
import { SalesComponent } from '../components/import/components/sales/sales.component';
import { BranchVendorComponent } from '../components/expense/components/branch-vendor/branch-vendor.component';
import { ForwardingComponent } from '../components/expense/components/forwarding/forwarding.component';
import { PickupComponent } from '../components/expense/components/pickup/pickup.component';
import { StockIssueComponent } from '../components/admin/components/stock-issue/stock-issue.component';
import { PODDownloadComponent } from '../components/admin/components/poddownload/poddownload.component';
import { BusinessComponent } from '../components/admin/components/business/business.component';
import { StatusEntryComponent } from '../components/admin/components/status-entry/status-entry.component';
import { CreateLoginComponent } from '../components/admin/components/create-login/create-login.component';
import { SummaryComponent } from '../components/admin/components/summary/summary.component';
import { PendingRunSheetComponent } from '../components/admin/components/pending-run-sheet/pending-run-sheet.component';
import { StatusReportComponent } from '../components/admin/components/status-report/status-report.component';
import { SalesReportComponent } from '../components/admin/components/sales-report/sales-report.component';
import { PermissionComponent } from '../components/operation/components/permission/permission.component';
import { QueryComponent } from '../components/report/components/query/query.component';
import { ReportSalesComponent } from '../components/report/components/report-sales/report-sales.component';
import { LogFileComponent } from '../components/report/components/log-file/log-file.component';
import { InboundComponent } from '../components/report/components/inbound/inbound.component';
import { OutStandingComponent } from '../components/report/components/out-standing/out-standing.component';
import { ExpenseReportComponent } from '../components/report/components/expense-report/expense-report.component';
import { ExpenseReportProfitStmtComponent } from '../components/report/components/expense-report-profit-stmt/expense-report-profit-stmt.component';
import { PendingManifestComponent } from '../components/admin/components/pending-manifest/pending-manifest.component';
import { ReportPendingManifestComponent } from '../components/report/components/report-pending-manifest/report-pending-manifest.component';
import { EmployeeMasterComponent } from '../components/master/components/employee-master/employee-master.component';
import { PageNotFoundComponent } from '../components/error/page-not-found/page-not-found.component';

const dashboardComponets = 
[
  AdminComponent,
  DashboardComponent,
  MasterComponent,
  OperationComponent,
  BillingComponent,
  ExpenseComponent,
  ImportComponent,
  ReportComponent,
  HelpComponent,
  SalesReportComponent,
  StatusReportComponent,
  PendingManifestComponent,
  PendingRunSheetComponent,
  SummaryComponent,
  CreateLoginComponent,
  StatusEntryComponent,
  BusinessComponent,
  PODDownloadComponent,
  StockIssueComponent,
  PickupComponent,
  ForwardingComponent,
  BranchVendorComponent,
  SalesComponent,
  DeliveryComponent,
  RTOComponent,
  CompanyMasterComponent,
  HubMasterComponent,
  BranchMasterComponent,
  FranchiseMasterComponent,
  DestinationMasterComponent,
  PincodeMasterComponent,
  CountryMasterComponent,
  StateMasterComponent,
  ZoneMasterComponent,
  MultipleZoneMasterComponent,
  ODAMasterComponent,
  ModeMasterComponent,
  ProductMasterComponent,
  CustomerMasterComponent,
  ConsigneeMasterComponent,
  ExpenseMasterComponent,
  RateMasterCustomerComponent,
  RateMasterFranchiseComponent,
  RateMasterGroupComponent,
  RateMasterViewComponent,
  VehicleMasterComponent,
  BookingComponent,
  FastBookingComponent,
  ManifestComponent,
  InScanComponent,
  RunSheetComponent,
  PODUpdateComponent,
  PermissionComponent,
  QueryComponent,
  ReportPendingManifestComponent,
  ReportSalesComponent,
  InboundComponent,
  LogFileComponent,
  OutStandingComponent,
  ExpenseReportComponent,
  ExpenseReportProfitStmtComponent,
  EmployeeMasterComponent,
  PageNotFoundComponent
 //add your submodule here
]
@NgModule({
  declarations: [
    DashboardComponent,
    dashboardComponets
  ],
  imports: [
    CommonModule,
    //FlexLayoutModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
