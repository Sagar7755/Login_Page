import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdminComponent } from '../components/admin/admin.component';
import { BillingComponent } from '../components/billing/billing.component';
import { MasterComponent } from '../components/master/master.component';
import { OperationComponent } from '../components/operation/operation.component';
import { ExpenseComponent } from '../components/expense/expense.component';
import { ImportComponent } from '../components/import/import.component';
import { ReportComponent } from '../components/report/report.component';
import { HelpComponent } from '../components/help/help.component';
import { BusinessComponent } from '../components/admin/components/business/business.component';
import { CreateLoginComponent } from '../components/admin/components/create-login/create-login.component';
import { PendingManifestComponent } from '../components/admin/components/pending-manifest/pending-manifest.component';
import { PendingRunSheetComponent } from '../components/admin/components/pending-run-sheet/pending-run-sheet.component';
import { PODDownloadComponent } from '../components/admin/components/poddownload/poddownload.component';
import { SalesReportComponent } from '../components/admin/components/sales-report/sales-report.component';
import { StatusEntryComponent } from '../components/admin/components/status-entry/status-entry.component';
import { StatusReportComponent } from '../components/admin/components/status-report/status-report.component';
import { StockIssueComponent } from '../components/admin/components/stock-issue/stock-issue.component';
import { SummaryComponent } from '../components/admin/components/summary/summary.component';
import { BranchMasterComponent } from '../components/master/components/branch-master/branch-master.component';
import { CompanyMasterComponent } from '../components/master/components/company-master/company-master.component';
import { ConsigneeMasterComponent } from '../components/master/components/consignee-master/consignee-master.component';
import { CountryMasterComponent } from '../components/master/components/country-master/country-master.component';
import { CustomerMasterComponent } from '../components/master/components/customer-master/customer-master.component';
import { DestinationMasterComponent } from '../components/master/components/destination-master/destination-master.component';
import { ExpenseMasterComponent } from '../components/master/components/expense-master/expense-master.component';
import { FranchiseMasterComponent } from '../components/master/components/franchise-master/franchise-master.component';
import { HubMasterComponent } from '../components/master/components/hub-master/hub-master.component';
import { ModeMasterComponent } from '../components/master/components/mode-master/mode-master.component';
import { MultipleZoneMasterComponent } from '../components/master/components/multiple-zone-master/multiple-zone-master.component';
import { ODAMasterComponent } from '../components/master/components/odamaster/odamaster.component';
import { PincodeMasterComponent } from '../components/master/components/pincode-master/pincode-master.component';
import { ProductMasterComponent } from '../components/master/components/product-master/product-master.component';
import { RateMasterCustomerComponent } from '../components/master/components/rate-master-customer/rate-master-customer.component';
import { RateMasterFranchiseComponent } from '../components/master/components/rate-master-franchise/rate-master-franchise.component';
import { RateMasterGroupComponent } from '../components/master/components/rate-master-group/rate-master-group.component';
import { RateMasterViewComponent } from '../components/master/components/rate-master-view/rate-master-view.component';
import { StateMasterComponent } from '../components/master/components/state-master/state-master.component';
import { VehicleMasterComponent } from '../components/master/components/vehicle-master/vehicle-master.component';
import { ZoneMasterComponent } from '../components/master/components/zone-master/zone-master.component';
import { PermissionComponent } from '../components/operation/components/permission/permission.component';
import { ManifestComponent } from '../components/operation/components/manifest/manifest.component';
import { InScanComponent } from '../components/operation/components/in-scan/in-scan.component';
import { FastBookingComponent } from '../components/operation/components/fast-booking/fast-booking.component';
import { BookingComponent } from '../components/operation/components/booking/booking.component';
import { PODUpdateComponent } from '../components/operation/components/podupdate/podupdate.component';
import { RunSheetComponent } from '../components/operation/components/run-sheet/run-sheet.component';
import { GeneralInvoiceComponent } from '../components/billing/components/general-invoice/general-invoice.component';
import { UpdateRateComponent } from '../components/billing/components/update-rate/update-rate.component';
import { ViewInvoiceComponent } from '../components/billing/components/view-invoice/view-invoice.component';
import { BranchVendorComponent } from '../components/expense/components/branch-vendor/branch-vendor.component';
import { ForwardingComponent } from '../components/expense/components/forwarding/forwarding.component';
import { PickupComponent } from '../components/expense/components/pickup/pickup.component';
import { DeliveryComponent } from '../components/import/components/delivery/delivery.component';
import { RTOComponent } from '../components/import/components/rto/rto.component';
import { SalesComponent } from '../components/import/components/sales/sales.component';
import { ExpenseReportComponent } from '../components/report/components/expense-report/expense-report.component';
import { ExpenseReportProfitStmtComponent } from '../components/report/components/expense-report-profit-stmt/expense-report-profit-stmt.component';
import { InboundComponent } from '../components/report/components/inbound/inbound.component';
import { LogFileComponent } from '../components/report/components/log-file/log-file.component';
import { OutStandingComponent } from '../components/report/components/out-standing/out-standing.component';
import { QueryComponent } from '../components/report/components/query/query.component';
import { ReportSalesComponent } from '../components/report/components/report-sales/report-sales.component';
import { EmployeeMasterComponent } from '../components/master/components/employee-master/employee-master.component';
import { PageNotFoundComponent } from'../components/error/page-not-found/page-not-found.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: '',
    component: AdminComponent,
  },
  { path:'business',component:BusinessComponent,
  },
  {
    path:'create-login',component:CreateLoginComponent,
  },
  {
    path:'pending-manifest',component:PendingManifestComponent,
  },
  {
    path:'pending-run-sheet',component:PendingRunSheetComponent,
  },
  {
    path:'poddownload',component:PODDownloadComponent,
  },
  {
    path:'sales-report',component:SalesReportComponent,
  },
  {
    path:'status-entry',component:StatusEntryComponent,
  },
  {
    path:'status-report',component:StatusReportComponent,
  },
  {
    path:'stock-issue',component:StockIssueComponent,
  },
  {
    path:'summary',component:SummaryComponent,
  },

  //master components
  {
    path:'',
    component:MasterComponent,
  },
  {
    path:'branch-master',
    component:BranchMasterComponent,
  },
  {
    path:'company-master',
    component:CompanyMasterComponent,
  },
  {
    path:'consignee-master',
    component:ConsigneeMasterComponent,
  },
  {
    path:'country-master',
    component:CountryMasterComponent,
  },
  {
    path:'customer-master',
    component:CustomerMasterComponent,
  },
  {
    path:'destination-master',
    component:DestinationMasterComponent,
  },
  {
    path:'expense-master',
    component:ExpenseMasterComponent,
  },
  {
    path:'franchise-master',
    component:FranchiseMasterComponent,
  },
  {
    path:'hub-master',
    component:HubMasterComponent,
  },
  {
    path:'mode-master',
    component:ModeMasterComponent,
  },
  {
    path:'multiple-zone-master',
    component:MultipleZoneMasterComponent,
  },
  {
    path:'odamaster',
    component:ODAMasterComponent,
  },
  {
    path:'pincode-master',
    component:PincodeMasterComponent,
  },
  {
    path:'product-master',
    component:ProductMasterComponent,
  },
  {
    path:'rate-master-customer',
    component:RateMasterCustomerComponent,
  },
  {
    path:'rate-master-franchise',
    component:RateMasterFranchiseComponent,
  },
  {
    path:'rate-master-group',
    component:RateMasterGroupComponent,
  },
  {
    path:'rate-master-view',
    component:RateMasterViewComponent,
  },
  {
    path:'state-master',
    component:StateMasterComponent,
  },
  {
    path:'vehicle-master',
    component:VehicleMasterComponent,
  },
  {
    path:'zone-master',
    component:ZoneMasterComponent,
  },
  {
    path:'employee-master',
    component:EmployeeMasterComponent,
  },
  
  //Operation
  {
    path:'operation',
    component:OperationComponent,
  },{
    path:'booking',
    component:BookingComponent,
  },{
    path:'fast-booking',
    component:FastBookingComponent,
  },{
    path:'in-scan',
    component:InScanComponent,
  },{
    path:'manifest',
    component:ManifestComponent,
  },{
    path:'permission',
    component:PermissionComponent,
  },{
    path:'fast-booking',
    component:FastBookingComponent,
  },{
    path:'in-scan',
    component:InScanComponent,
  },{
    path:'manifest',
    component:ManifestComponent,
  },{
    path:'permission',
    component:PermissionComponent,
  },{
    path:'podupdate',
    component:PODUpdateComponent,
  },{
    path:'run-sheet',
    component:RunSheetComponent,
  },
  
  //Billing
  {
    path:'billing',
    component:BillingComponent
  },{
    path:'general-invoice',
    component:GeneralInvoiceComponent
  },{
    path:'update-rate',
    component:UpdateRateComponent
  },{
    path:'view-invoice',
    component:ViewInvoiceComponent
  },
  
//Expense  
  {
    path:'expense',
    component:ExpenseComponent
  },{
    path:'branch-vendor',
    component:BranchVendorComponent
  },{
    path:'forwarding',
    component:ForwardingComponent
  },{
    path:'pickup',
    component:PickupComponent
  },
  
//Import  
  {
    path:'import',
    component:ImportComponent
  },{
    path:'delivery',
    component:DeliveryComponent
  },{
    path:'rto',
    component:RTOComponent
  },{
    path:'sales',
    component:SalesComponent
  },
  
//Report  
  {
    path:'report',
    component:ReportComponent
  },{
    path:'expense-report',
    component:ExpenseReportComponent
  },{
    path:'expense-report-profit-stmt',
    component:ExpenseReportProfitStmtComponent
  },{
    path:'inbound',
    component:InboundComponent
  },{
    path:'log-file',
    component:LogFileComponent
  },{
    path:'out-standing',
    component:OutStandingComponent
  },{
    path:'pending-manifest',
    component:PendingManifestComponent
  },{
    path:'query',
    component:QueryComponent
  },{
    path:'report-sales',
    component:ReportSalesComponent
  },
 {
   path:'home',
   component:HomeComponent
 },
  //Help
  {
    path:'help',
    component:HelpComponent
  },

 //PageNotFounds 
 { 
  path: '**', 
  component: PageNotFoundComponent
 },]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
