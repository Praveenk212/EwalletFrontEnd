import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewcustomeraccountComponent } from './customer/newcustomeraccount/newcustomeraccount.component';
import { UpdatedetailComponent } from './customer/customermenu/updatedetail/updatedetail.component';
import { TransferamountComponent } from './customer/customermenu/transferamount/transferamount.component';
import { TransactiondetailComponent } from './customer/customermenu/viewdetail/transactiondetail/transactiondetail.component';
import { GetaccountstoapproveComponent } from './admin/adminmenu/getaccountstoapprove/getaccountstoapprove.component';
import { GetalltransactionComponent } from './admin/adminmenu/getalltransaction/getalltransaction.component';
import { AdminmenuComponent } from './admin/adminmenu/adminmenu.component';
import { CustomermenuComponent } from './customer/customermenu/customermenu.component';
import { CustomerlistComponent } from './admin/adminmenu/customerlist/customerlist.component';
import { ViewdetailComponent } from './customer/customermenu/viewdetail/viewdetail.component';
import { PersonaldetailComponent } from './customer/customermenu/viewdetail/personaldetail/personaldetail.component';
import { AccountdetailComponent } from './customer/customermenu/viewdetail/accountdetail/accountdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    ContactusComponent,
    NewcustomeraccountComponent,
    UpdatedetailComponent,
    ViewdetailComponent,
    TransferamountComponent,
    TransactiondetailComponent,
    GetaccountstoapproveComponent,
    GetalltransactionComponent,
    AdminmenuComponent,
    CustomermenuComponent,
    CustomerlistComponent,
    PersonaldetailComponent,
    TransactiondetailComponent,
    AccountdetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
