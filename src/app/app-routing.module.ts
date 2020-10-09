import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewcustomeraccountComponent } from './customer/newcustomeraccount/newcustomeraccount.component';
import { AdminmenuComponent } from './admin/adminmenu/adminmenu.component';
import { CustomermenuComponent } from './customer/customermenu/customermenu.component';
import { CustomerlistComponent } from './admin/adminmenu/customerlist/customerlist.component';
import { GetaccountstoapproveComponent } from './admin/adminmenu/getaccountstoapprove/getaccountstoapprove.component';
import { ViewdetailComponent } from './customer/customermenu/viewdetail/viewdetail.component';
import { AccountdetailComponent } from './customer/customermenu/viewdetail/accountdetail/accountdetail.component';
import { PersonaldetailComponent } from './customer/customermenu/viewdetail/personaldetail/personaldetail.component';
import { TransactiondetailComponent } from './customer/customermenu/viewdetail/transactiondetail/transactiondetail.component';
import { UpdatedetailComponent } from './customer/customermenu/updatedetail/updatedetail.component';
import { TransferamountComponent } from './customer/customermenu/transferamount/transferamount.component';
import { GetalltransactionComponent } from './admin/adminmenu/getalltransaction/getalltransaction.component';

const routes: Routes = [

  { path: 'newcustomeraccount', component: NewcustomeraccountComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'contactus', component: ContactusComponent },
  {
    path: 'admin/adminmenu', component: AdminmenuComponent,
    children: [
      { path: 'customerlist', component: CustomerlistComponent },
      { path: 'getaccountstoapprove', component: GetaccountstoapproveComponent },
      {path:'getalltransactions', component:GetalltransactionComponent}
    ]
  },

  {
    path: 'customer/customermenu/:phoneNo', component: CustomermenuComponent,
    children: [

      {path:'transfermoney',component:TransferamountComponent},

      { path: 'updatedetail', component: UpdatedetailComponent },
      {
        path: 'viewdetail', component: ViewdetailComponent,

        children: [
          { path: 'accountdetail', component: AccountdetailComponent },
          { path: 'personaldetail', component: PersonaldetailComponent },
          { path: 'transactiondetail', component: TransactiondetailComponent }

        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  AdminComponent;
  CustomerComponent;
  ContactusComponent;
  NewcustomeraccountComponent
}
